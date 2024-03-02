import { NextResponse } from "next/server";
import { prisma, i } from "@/lib";

export async function POST(request: Request) {
    try {
        const { url, jobType } = await request.json();
        const response = await prisma.jobs.create({ data: { url, jobType } });
        await jobsQueue.add("new loaction", { url, jobType, id: response.id });

        return NextResponse.json({ jobType: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
