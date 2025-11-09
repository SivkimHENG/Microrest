import { consumer } from "../config/kafka";
import { prisma } from "../database"
import { Meta, ProfileData, UpdateProfile } from "./utils/interface";
class CustomerService {


  async getProfile(userUuid: string, payload: ProfileData, meta: Meta) {
    try {
      const [user, customer] = await Promise.all([
        prisma.userProfiles.findUnique({
          where: {
            userUuid: userUuid
          },
        }),

        prisma.customerProfiles.findUnique({
          where: {
            userUuid: userUuid,
          },
        }),
      ]);


      if (!user) {
        throw new Error(`User ${userUuid} not found`);
      }

      if (!customer) {
        throw new Error(`Customer ${userUuid} not found`);
      }


      const fullProfile = {
        userUuid: user.userUuid,
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileUrl: user.profileUrl,
        phoneNumber: user.phoneNumber,
        status: "ACTIVE",
        role: user.role,

        customer: customer ? {
          loyalty_points: customer.loyalty_points,
          customer_since: customer.customer_since,
        } : null,


      };



      return { customer: fullProfile };

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }

  async updateProfile(userUuid: string, payload: UpdateProfile, meta: Meta) {
    try {

      const existingUser = await prisma.userProfiles.findUnique({
        where: { userUuid }
      });


      if (!existingUser) {
        throw new Error(`User ${userUuid} not found`);
      }


      const updateData: Partial<UpdateProfile> = {};

      if (payload.bio !== undefined) {
        updateData.bio = payload.bio;
      }

      if (payload.phoneNumber !== undefined) {
        updateData.phoneNumber = payload.phoneNumber;
      }


      if (Object.keys(updateData).length === 0) {
        throw new Error(`No valid fields to update. Received: ${JSON.stringify(payload)}`);
      }

      console.log('Update data:', updateData);

      const updatedUser = await prisma.userProfiles.update({
        where: { userUuid },
        data: updateData,
      });

      const customer = await prisma.customerProfiles.findUnique({
        where: { userUuid }
      })

      if (!customer) {
        console.log("customer not found")

      }


      const existingAddress = await prisma.customerAddress.findUnique({
        where: { id: customer?.id }
      })

      if (existingAddress) {
        console.log("Address already existing");
      }



      const address = await prisma.customerProfiles.update({
        where: { userUuid },
        data: {
          id: customer?.id,
          address: {
            create: {
              address_line1: payload.addressLine1,
              address_line2: payload.addressLine2,
              city: payload.city,
              khan: payload.khan
            }

          }
        }

      });

      return {
        userData: updatedUser,
        address: address
      };
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }



}

export const customerService = new CustomerService();

