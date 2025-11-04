
export interface Address {
  addressLine1: string
  addressLine2?: string
  city: string
  sangkat: string
  khan: string

}

export interface Meta {
  ipAdress: string
  userAgent?: string
  deviceInfo?: string

}


export interface UpdateProfile {
  userId: number
  userUuid: string
  username: string
  email: string
  bio: string
  profileUrl: string
  phoneNumber: string
  status: string[]
}
