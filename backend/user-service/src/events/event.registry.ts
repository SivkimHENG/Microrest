import { handleUserAuthenticate } from "./handlers/authenticate.handler";
import { handleUserRegistered } from "./handlers/registeration.handler";


export type EventHandler = (eventId: string, payload: any) => Promise<any>;

export const EVENT_HANDLERS: Record<string, EventHandler> = {
  "UserRegistered": handleUserRegistered,
  "UserAuthenticate": handleUserAuthenticate
}




