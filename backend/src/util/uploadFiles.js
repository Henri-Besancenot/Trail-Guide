import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../s3.js";

export async function uploadPicture(req, userId) {
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


export async function uploadFiles(req, userId) {
  const fields = req.body;

  let imageUrls = [];
  if (req.files?.images) {
    for (const file of req.files.images) {
      const key = `trails_images/${userId}-${Date.now()}-${file.originalname}`;
      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
      );
      imageUrls.push(
        `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
      );
    }
  }

  if (req.files?.gpx_file?.[0]) {
    const gpxFile = req.files.gpx_file[0];
    const key = `trails/${userId}-${Date.now()}-${gpxFile.originalname}`;
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: gpxFile.buffer,
        ContentType: gpxFile.mimetype,
      })
    );
    fields.gpx_file = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }

  if (imageUrls.length > 0) fields.images = imageUrls;

  return fields;
}
