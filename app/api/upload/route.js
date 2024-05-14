import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
	region: process.env.AWS_S3_REGION,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY,
		secretAccessKey: process.env.SECRET_ACCESS_KEY,
	}
});

async function uploadFileToS3(file, fileName) {

	const fileBuffer = file;
	console.log(fileName);

	const params = {
		Bucket: process.env.AWS_S3_BUCKET_NAME,
		Key: `${fileName}`,
		Body: fileBuffer,
		ContentType: "image/jpg"
	}

	const command = new PutObjectCommand(params);
	// const command = new ListBucketsCommand(params);
	const response = await s3Client.send(command);
	return fileName;
	// await s3Client.send(command);
	// return fileName;
}

export async function POST(request) {
	try {

		const formData = await request.formData();
		const file = formData.get("file");

		if(!file) {
			return NextResponse.json( { error: "File is required."}, { status: 400 } );
		} 

		const buffer = Buffer.from(await file.arrayBuffer());
		const location = await uploadFileToS3(buffer, file.name);
		return NextResponse.json({ success: true, location});
	} catch (error) {
		return NextResponse.json({ error });
	}
}
