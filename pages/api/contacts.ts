import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient , prisma, Prisma } from "@prisma/client";

const prismaClient = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
       return res.status(405).json({ message: 'Method Not Allowed' });
    }
    try {
        const contact: Prisma.ContactCreateInput = JSON.parse(req.body);
        const saveContact = await prismaClient.contact.create({ data: contact });
        res.status(200).json(saveContact);
    } catch (error) {
        res.status(400).json({ message: 'something went wrong' });
    }
}