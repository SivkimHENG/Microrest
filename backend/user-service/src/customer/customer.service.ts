import { prisma } from "../database"
import { UpdateProfile } from "./utils/interface";
import { Status } from "../../generated/prisma";
class CustomerService {

  constructor() { }

  async updateProfile(data: UpdateProfile) {
    try {

      if (!data.userId || !data.userUuid) {
        throw new Error("User Id & uuid not found in our database");
      }

      const updated = prisma.userProfiles.update({
        where: {
          userUuid: data.userUuid
        },
        data: {
          username: data.username,
          profileUrl: data.profileUrl,
          bio: data.bio,
          phoneNumber: data.phoneNumber,
          statuses: [Status.ACTIVE]
        }
      })


      return updated;

    } catch (err: any) {
      console.error(err.message);

    }


  }

}

export const customerService = new CustomerService();

