import { BaseEventTransformer } from "../../../core/interface/event-transformer.interface";
import { BaseMessage } from "../../../core/type/base-message.type";
import { UserRegisteredRaw } from "../types/auth-event.type";
import { UserRegisteredPayload } from "../types/auth-payload.type";

export class UserRegistratedTransformer extends
  BaseEventTransformer<UserRegisteredRaw, UserRegisteredPayload> {

  constructor() {
    super("UserRegistered");
  }

  transform(raw: UserRegisteredRaw): BaseMessage<UserRegisteredPayload> | null {
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
          username: raw.username,
          email: raw.email,
          roles: this.normalizedRole(raw.role),
        }
      }

    } catch (err: any) {

      console.error('Error transforming UserAuthenticate event:', err);
      return null;
    }
  }

  protected validateRawEvent(raw: UserRegisteredRaw): boolean {
    return !!(
      raw.event_id &&
      raw.user_id &&
      raw.user_uuid &&
      raw.email &&
      raw.occurred_at
    );
  }

}
