import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const server = await db.server.delete({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
    });
    return NextResponse.json(server);
  } catch (e) {
    console.log("[SERVER_ID_DELETE]", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const profile = await currentProfile();
    const { name, imageUrl } = await req.json();

    if (!profile) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        name,
        imageUrl,
      },
    });
    return NextResponse.json(server);
  } catch (e) {
    console.log("[SERVER_ID_PATCH]", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
