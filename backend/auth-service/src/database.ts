
import { PrismaClient } from "../generated/prisma";


export const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
prisma.$on("query", (e) => console.log("prisma query:", e.query, e.params));
