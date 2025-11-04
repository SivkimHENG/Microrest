import { prisma } from "../../database"


interface AuthenticatePayload {
  eventId: string,
  userId: number,
  userUuid: string
  email: string,
  password: string,
  token: {
    refreshToken: string,
    accessToken: string
  }
}


export async function authenticateHandler(eventId: string) {





}
