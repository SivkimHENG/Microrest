import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient({
    errorFormat: "pretty",
    log: ["info"],
});
export default prisma;
