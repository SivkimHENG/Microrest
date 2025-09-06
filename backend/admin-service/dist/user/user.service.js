import { assert } from "console";
import prisma from "../utils/db";
import bcrypt from "bcryptjs";
export const UserService = {
    async findUserByEmail(email) {
        assert(email != undefined);
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });
        return user ? user.email : null;
    },
    async createUserByEmailAndPassword(user) {
        user.password = bcrypt.hashSync(user.password, 12);
        return await prisma.user.create({
            data: user,
        });
    },
    async findUserById(id) {
        return await prisma.user.findUnique({
            id
        });
    }
};
