exports.handler = async (event, context) => {
  console.log(JSON.stringify(event.Input, undefined, 2));

  return {};
};
