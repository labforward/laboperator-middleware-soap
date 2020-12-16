import { addFixtures } from 'laboperator-middleware/test_helper';
import config from 'laboperator-middleware/config';

import laboperator from './fixtures/laboperator';

addFixtures(config.providers.laboperator.url.href, laboperator);
