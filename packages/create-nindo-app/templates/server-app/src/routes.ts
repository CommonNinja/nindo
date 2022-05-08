import { NextFunction, Request, Response, Router } from 'express';
import CommonNinja from '@commonninja/node-sdk';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';

const router: any = Router();
const { COMMONNINJA_APP_ID, COMMONNINJA_APP_SECRET } = process.env;

function getCommonNinjaClient(req: Request) {
	if (!COMMONNINJA_APP_ID || !COMMONNINJA_APP_SECRET) {
		throw new Error('Missing Common Ninja app ID or secret key.');
	}

	// Create a new Common Ninja instance
	return new CommonNinja({
		appId: COMMONNINJA_APP_ID,
		appSecret: COMMONNINJA_APP_SECRET,
		accessToken: req.query.token as string,
		env: CommonNinja.envs.production,
		logs: true,
	});
}

// Authentication
router.get('/connect', async (req: Request, res: Response) => {
	// Get a new Common Ninja instance
	const client = getCommonNinjaClient(req);

	// Get authentication url for platform
	const url = client.auth.getConnectUrl();

	// Redirect to authentication url
	res.redirect(url);
});

router.all('/api*', async (req: Request, res: Response, next: NextFunction) => {
	// Get a new Common Ninja instance
	const client = getCommonNinjaClient(req);

  // Proxy api requests to Common Ninja API
  // For example: 
  // /api/ecommerce/products will be proxied to 
  // https://api.commonninja.com/integrations/api/v1/ecommerce/products
  // The middleware will handle the authentication headers and request body
  return client.apiProxyMiddleware(req, res, next, {
    '/api/': '/',
  });
});

// Validate and handle Common Ninja's webhooks
router.post('/webhooks', async (req: Request, res: Response) => {
	try {
		const { COMMONNINJA_APP_ID, COMMONNINJA_APP_SECRET } = process.env;
		if (!COMMONNINJA_APP_ID || !COMMONNINJA_APP_SECRET) {
			throw new Error('Missing Common Ninja app ID or secret key.');
		}

		const client = new CommonNinja({
			appId: COMMONNINJA_APP_ID,
			appSecret: COMMONNINJA_APP_SECRET,
			env: CommonNinja.envs.production,
		});

		// Validate webhook message source
		const validated = client.webhooks.validateWebhook(req);
		if (!validated) {
			throw new Error('Cannot validate signature.');
		}

		console.log('Webhook message', req.body);

		// Send a 200 OK response back to Common Ninja
		res.sendStatus(200);
	} catch (e) {
		console.error(`Cannot handle webhook message`, e);
		res.status(500).send((e as Error).message);
	}
});

export default router;
