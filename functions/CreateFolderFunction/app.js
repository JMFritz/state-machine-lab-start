const AWS = require("aws-sdk");
const uuid = require('uuid');
const s3 = new AWS.S3();
exports.handler = async (event) => {
  console.log(JSON.stringify(event, undefined, 2));

  // Access state input
  const { firstName, teamName } = event.Input;

  // Generate unique id and construct folder name
  const memberId = uuid.v4();
  const folderName = `${teamName}/${firstName}-${memberId.substr(-5)}/`;

  // Construct parameters for the putObject call
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: folderName
  };

  await s3.putObject(params).promise();

  // Return expected state object
  return {
    ...event.Input,
    memberId,
    folderName
  };
};