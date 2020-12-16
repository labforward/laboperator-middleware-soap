import { Request } from 'express';

export default async ({ body }: Request): Promise<number> => {
  const client = await require('../client').default;
  // eslint-disable-next-line new-cap
  const [result] = await client.CelsiusToFahrenheitAsync(body);

  return result.TemperatureInFahrenheit;
};
