import { server } from 'laboperator-middleware/test_helper';

describe('Routes', () => {
  describe('PATCH /celsius_to_fahrenheit', () => {
    it('should update the related workflow field with the converted value', async () => {
      const response = await server()
        .patch('/celsius_to_fahrenheit')
        .send({ TemperatureInCelsius: 36, workflowRunId: '1' }); // eslint-disable-line camelcase

      expect(response).to.have.status(200);
      expect(response.body).to.containSubset({
        status: 'OK',
        code: 200,
        details: 'OK',
      });
    });
  });
});
