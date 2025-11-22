import { validate } from "uuid";
import { BaseEventTransformer } from "../../../core/interface/event-transformer.interface";
import { BaseMessage } from "../../../core/type/base-message.type";
import { UserAuthenticateRaw } from "../types/auth-event.type";
import { UserAuthenticatePayload } from "../types/auth-payload.type";



export class UserAuthenticateTranformer
  extends BaseEventTransformer<UserAuthenticateRaw, UserAuthenticatePayload> {

  constructor() {
    super("UserAuthenticate");
  }

  transform(raw: UserAuthenticateRaw): BaseMessage<UserAuthenticatePayload> | null {
    try {
      if (!this.validateRawEvent(raw)) {
        console.error("Invalid UserAuthenticate Event:", raw);
        return null;
      }

      return {
        ...this.createBaseTranform(raw),
        payload: {
          eventId: raw.event_id,
          userId: raw.user_id,
          userUuid: raw.user_uuid,
          email: raw.email,
          roles: this.normalizedRole(raw.role),
          lastLoginAt: new Date(),
          lastLoginIp: raw.last_login_ip || "",
          loginCount: raw.login_count || 1,
          userAgent: raw.user_agent || "",
          ipAddress: raw.ip_address || ""
        }
      }

    } catch (err: any) {
      console.error('Error transforming UserAuthenticate event:', err);
      return null;
    }

  }


  protected validateRawEvent(raw: UserAuthenticateRaw): boolean {
    return !!(
      raw.event_id &&
      raw.user_id &&
      raw.user_uuid &&
      raw.email &&
      raw.occurred_at
    );
  }


}
