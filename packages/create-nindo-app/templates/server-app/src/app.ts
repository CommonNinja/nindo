import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import router from './routes';

const port = parseInt(process.env.PORT || '3000');
const app = express();

// Parse cookies
app.use(cookieParser());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(
	bodyParser.json({
		limit: '50mb',
	})
);

app.use('/', router);

// Start server
app.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});

module.exports = app;
