import { Client, createClientAsync } from 'soap';
import config from 'laboperator-middleware/config';

export default async (): Promise<Client> => {
  config.logger.debug('[API][converter] Initializing SOAP Client');

  const client = await createClientAsync(config.providers.converter.url.href);

  config.logger.debug('[API][converter] SOAP Client Initialized');

  return client;
};
