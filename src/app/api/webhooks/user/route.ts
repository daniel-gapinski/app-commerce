import prisma from "@/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { Webhook } from 'svix';
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { EmailAddress } from "@clerk/nextjs/server";

const webhookSecret = process.env.WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';

type Event = {
    data:    EventDataType;
    object: 'event';
    type:    EventType
};

type EventDataType = {
    id:                       string;
    first_name:               string;
    last_name:                string;
    email_addresses:          EmailAddressType[];
    primary_email_address_id: string;
    attributes:               Record<string, string | number>;
}

type EmailAddressType = {
    id:            string;
    email_address: string;
}

async function handler(request: Request) {
    const payload = await request.json();
    const headersList = headers();
    const heads = {
        'svix-id': (await headersList).get('svix-id'),
        'svix-timestamp': (await headersList).get('svix-timestamp'),
        'svix-signature': (await headersList).get('svix-signature'),
    };
    const wh = new Webhook(webhookSecret);
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;