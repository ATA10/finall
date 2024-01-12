import { NextResponse } from "next/server";
import axios from "axios";
import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";

export async function POST(request) {

    const formData = await request.formData();

    const file = formData.get("file")

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const relativeUploadDir = `pic`;
    const uploadDir = join(process.cwd(), "public", relativeUploadDir);

    try {
        await stat(uploadDir);
    } catch (e) {
        if (e.code === "ENOENT") {
            await mkdir(uploadDir, { recursive: true });
        } else {
            console.error(
                "Error while trying to create directory when uploading a file\n",
                e
            );
            return NextResponse.json({ success: false });
        }
    }

    try {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${file.name.replace(
            /\.[^/.]+$/,
            ""
        )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
        await writeFile(`${uploadDir}/${filename}`, buffer);

        const fileUrl = `${relativeUploadDir}/${filename}`;


        const response = NextResponse.json(
            { success: true, imagePath: fileUrl },
            { status: 200, headers: { "content-type": "application/json" } }
        );

        return response;

    } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return NextResponse.json({ success: false });
    }
}