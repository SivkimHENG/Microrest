import { BaseMessage, BaseRawEvent } from "../type/base-message.type"



export interface EventTranformer<TRaw = any, TPayload = any> {
  readonly eventType: string
  canHandle(raw: BaseRawEvent): boolean;
  transform(raw: TRaw): BaseMessage<TPayload> | null
}


export abstract class BaseEventTransformer<TRaw extends BaseRawEvent, TPayload>
  implements EventTranformer<TRaw, TPayload> {

  constructor(public readonly eventType: string) { }
  canHandle(raw: BaseRawEvent): boolean {
    return raw.type === this.eventType;
  }

  abstract transform(raw: TRaw): BaseMessage<TPayload> | null;

  protected createBaseTranform(raw: BaseRawEvent):
    Pick<BaseMessage, "eventId" | "timestamp"> {
    return {
      eventId: raw.event_id,
      timestamp: raw.occurred_at
    };
  }

  protected normalizedRole(role?: string | string[]): string[] {

    if (Array.isArray(role)) return role;
    return [role || "CUSTOMER"]
  }
}
