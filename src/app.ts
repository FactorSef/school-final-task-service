import express, { Response as ExResponse, Request as ExRequest } from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from '../build/routes';

import swagger from 'swagger-ui-express';

const App = express();

App.use(bodyParser.urlencoded({ extended: true }));

App.use(bodyParser.json());

App.use('/swagger', swagger.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swagger.generateHTML(await import('../build/swagger.json')))
})

RegisterRoutes(App);

export { App as app }