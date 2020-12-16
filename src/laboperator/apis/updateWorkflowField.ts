import * as laboperator from 'laboperator-middleware/laboperator';
import { Request } from 'express';

export default async (
  { body: { workflowRunId } }: Request,
  fahrenheit: number
): Promise<void> => {
  const client = await laboperator.client;
  const authentication = await client.authentication.authenticateAsUser();

  const getWorkflowField = async () => {
    const response = await client.apis.workflow_fields.getWorkflowFields(
      {
        filter: {
          filter: {
            // eslint-disable-next-line camelcase
            workflow_fields: {
              identifier: 'fahrenheit',
              // eslint-disable-next-line camelcase
              workflow_run_id: workflowRunId,
            },
          },
        },
      },
      authentication
    );

    return response.body.data[0];
  };

  const workflowField = await getWorkflowField();

  await client.apis.workflow_fields.updateWorkflowField(
    { id: workflowField.id },
    {
      ...authentication,
      requestBody: {
        data: {
          type: 'workflow_field',
          attributes: { value: fahrenheit },
        },
      },
    }
  );
};
