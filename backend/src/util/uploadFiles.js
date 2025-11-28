import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../s3.js";

export async function uploadFiles(req, userId) {
  const fields = req.body;

  if (!req.file) {
    return fields;
  }

  const file = req.file;
  const ext = file.originalname.split(".").pop();
  const key = `profile_pictures/${userId}.${ext}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  const pictureUrl =
    `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

  return {
    ...fields,
    picture: pictureUrl,
  };
}
