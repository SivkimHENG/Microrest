export interface Meta {
  ipAddress: string
  userAgent?: string
  deviceInfo?: string

}


export interface ProfileData {
  userUuid: string
  userId: number
  username: string
  email: string
  bio: string
  profileUrl: string
  phoneNumber: string
  address: string
  status: string[]
}


export interface UpdateProfile {
  userId: number
  userUuid: string
  username: string
  email: string
  bio?: string
  profileUrl?: string
  phoneNumber?: string

  customerProfileId: number
  addressId: number
  addressLine1: string
  addressLine2?: string
  city: string
  sangkat: string
  khan: string
  [key: string]: any

}
