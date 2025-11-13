"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../generated/prisma");
exports.prisma = new prisma_1.PrismaClient();
exports.prisma.$on("query", (e) => {
    console.log(`Query:${e.query}`);
    console.log(`Params:${e.params}`);
    console.log(`Duration ${e.duration} ms`);
});
