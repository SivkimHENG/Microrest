import { categoryHandlers } from "./categoryHandlers";

type EventHandler = ((event: any) => Promise<any>)

const eventHandlers: Record<string, EventHandler> = {
  'CategoryCreated': categoryHandlers.create,
  'CategoryUpdated': categoryHandlers.update,
}



export async function processEvent(event: any): Promise<void> {
  const { type } = event;
  const handler = eventHandlers[type];

  if (!handler) {
    console.log(`Proccess event Type: ${type}`)
    return;
  }
  try {
    await handler(event);
    console.log(`Handler for ${type} completed successfully`);

  } catch (err: any) {
    console.error(`Handler for ${type} failed:`, {
      message: err.message,
      stack: err.stack
    });
    throw err;
  }


}


