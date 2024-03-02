import { PrismaClient } from "@prisma/client";



let prisma: PrismaClient;

if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if(process.env.NODE_ENV !== 'development')
    prisma = global.prisma
}