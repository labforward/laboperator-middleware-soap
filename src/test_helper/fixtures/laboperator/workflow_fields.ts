const workflowField1 = {
  id: '1',
  type: 'workflow_field',
  attributes: {
    identifier: 'fahrenheit',
    value: null,
  },
};

export default [
  {
    endpoint:
      '/workflow_fields?filter[workflow_fields][identifier]=fahrenheit&filter[workflow_fields][workflow_run_id]=1',
    response: {
      data: [workflowField1],
    },
  },
  {
    endpoint: '/workflow_fields/1',
    method: 'patch',
    request: {
      entryList: [
        {
          name: 'data',
          value: '{"type":"workflow_field","attributes":{"value":96.8}}',
        },
      ],
    },
    response: {
      data: [workflowField1],
    },
  },
];
