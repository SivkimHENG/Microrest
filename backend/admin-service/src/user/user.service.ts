import { assert } from "console";
import prisma from "../utils/db";
import bcrypt from "bcryptjs";


interface User {
  email: string
  password: string
  refreshToken: string

}


export const UserService = {


  async findUserByEmail(email: string): Promise<string | null> {



    assert(email != undefined)

    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    });
    return user ? user.email : null;

  },


  async createUserByEmailAndPassword(user: User) {
    user.password = bcrypt.hashSync(user.password, 12);

    return await prisma.user.create({
      data: user,
    });

  },

  async findUserById(id: number): Promise<number> {

    return await prisma.user.findUnique({
      id
    })

  }




}
