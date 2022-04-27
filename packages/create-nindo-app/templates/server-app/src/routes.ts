import { Request, Response, Router } from 'express';
import CommonNinja from '@commonninja/node-sdk';

const router: any = Router();
const {
  COMMONNINJA_APP_ID,
  COMMONNINJA_APP_SECRET,
} = process.env;

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
  });
}

// Authentication
router.get('/authenticate', async (req: Request, res: Response) => {
  const { platform } = req.query;

  if (!platform) {
    res.status(500).send('Missing platform parameter.');
    return;
  }

  // Get a new Common Ninja instance
  const client = getCommonNinjaClient(req);

  // Get authentication url for platform
  const url = client.getAuthenticationUrl(platform as any);

  // Redirect to authentication url
  res.redirect(url);
});

// Proxy requests to Common Ninja's API
router.all(
  '/api/resource*',
  async (req: Request, res: Response) => {
    try {
      // Get a new Common Ninja instance
      const client = getCommonNinjaClient(req);

      // Extract the resource path from the request
      const [, path] = req.path.split('resource/');

      if (!path) {
        throw new Error('Could not find resource');
      }

      console.log('path', path, req.method);
      
      // Make the request to Common Ninja's api
      const result = await client.request({
        path,
        method: req.method as any,
        data: req.body,
        queryParams: {
          limit: req.query.limit || 10,
          page: req.query.page || '',
        },
      });

      res.send(result);
    } catch (e) {
      console.error('Error', e);
      res.status(500).send((e as Error).message);
    }
  }
);

// Validate and handle Common Ninja's webhooks
router.post('/webhooks', async (req: Request, res: Response) => {
  try {
    const {
      COMMONNINJA_APP_ID,
      COMMONNINJA_APP_SECRET,
    } = process.env;
    if (!COMMONNINJA_APP_ID || !COMMONNINJA_APP_SECRET) {
      throw new Error('Missing Common Ninja app ID or secret key.');
    }

    const client = new CommonNinja({
      appId: COMMONNINJA_APP_ID,
      appSecret: COMMONNINJA_APP_SECRET,
      env: CommonNinja.envs.production,
    });

    // Use the Common Ninja SDK to validate the webhook
    const validated = client.validateWebhook(req);
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