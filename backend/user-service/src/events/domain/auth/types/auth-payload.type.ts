export interface UserRegisteredPayload {
  user_id: number;
  user_uuid: string;
  event_id: string;
  email: string;
  roles: string[];
}

export interface UserAuthenticatePayload {
  event_id: string;
  user_id: number;
  user_uuid: string;
  email: string;
  roles: string[];
  last_login_at: Date;
  last_login_ip: string;
  login_count: number;
  user_agent: string;
  ip_address: string;
}

export type AuthEventPayload =
  | UserRegisteredPayload
  | UserAuthenticatePayload 
