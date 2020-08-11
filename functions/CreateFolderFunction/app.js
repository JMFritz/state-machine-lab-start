const AWS = require("aws-sdk");
const uuid = require('uuid');
const s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log(JSON.stringify(event, undefined, 2));

  // Access your task state input
  const { firstName, lastName, teamName } = event.Input;

  // Generate ID and construct folder name
  const memberId = uuid.v4();
  const folderName = `${teamName}/${firstName}-${memberId.substr(-5)}/`;

  // Construct parameters and call putObject
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: folderName
  };

  await s3.putObject(params).promise();

  // Return expected state object
  return {
    firstName,
    lastName,
    teamName,
    memberId,
    folderName
  };
};