import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import "dotenv/config";
// Loading Credentials from ~/.aws/credentials
const config = {
  region: "us-east-1",
  credentials: fromIni({ profile: "default" }),
};

// Preparing Object conte to submit
const deleteData = {
  Bucket: process.env.AWS_BUCKET,
  Key: "photo.jpg",
};

const s3Client = new S3Client(config);
const response = await s3Client.send(new DeleteObjectCommand(deleteData));

console.log("response: ", response);
