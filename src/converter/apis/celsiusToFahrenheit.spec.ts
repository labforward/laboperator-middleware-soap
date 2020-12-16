import { toRequest } from '~/converter/apis/helpers';

import celsiusToFahrenheit from './celsiusToFahrenheit';

describe('celsiusToFahrenheit', () => {
  it('fetch all experiments from all the pages', async () => {
    const result = await celsiusToFahrenheit(
      toRequest({ body: { TemperatureInCelsius: '36' } })
    );

    expect(result).to.eql(96.8);
  });
});
