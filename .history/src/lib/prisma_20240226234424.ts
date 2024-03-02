import { PrismaClient } from "@prisma/client";



let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if(!glo)
    prisma = global.prisma
}