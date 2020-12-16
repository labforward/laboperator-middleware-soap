import { Express, Request, Response } from 'express';
import { jsonResponse, propagateErrors } from 'laboperator-middleware/helpers';

export default (app: Express): void => {
  const converter = require('../converter');
  const laboperator = require('../laboperator');

  app.patch(
    '/celsius_to_fahrenheit',
    propagateErrors(async (req: Request, res: Response) => {
      const fahrenheit = await converter.apis.celsiusToFahrenheit(req);

      await laboperator.apis.updateWorkflowField(req, fahrenheit);

      res.json(jsonResponse(200));
    })
  );
};
