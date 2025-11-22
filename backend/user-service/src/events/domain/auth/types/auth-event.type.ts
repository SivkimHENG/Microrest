import { BaseRawEvent } from "../../../core/type/base-message.type";



export interface UserRegisteredRaw extends BaseRawEvent {
  type: 'UserRegistered';
  user_id: number
  user_uuid: string
  username: string
  email: string
  role?: string | string[]
}

export interface UserAuthenticateRaw extends BaseRawEvent {
  type: 'UserAuthenticate';
  user_id: number
  user_uuid: string
  email: string
  role?: string | string[]
  last_login_at?: Date
  last_login_ip?: string
  ip_address?: string
  login_count?: number
  user_agent?: string

}


export type RawAuthEvent = UserRegisteredRaw | UserAuthenticateRaw;
