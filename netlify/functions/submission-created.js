exports.handler = async function (event, context) {
  const form = JSON.parse(event.body).payload.data;
  return {
    statusCode: 200,
    body: "Hi " + form.name,
  };
};
