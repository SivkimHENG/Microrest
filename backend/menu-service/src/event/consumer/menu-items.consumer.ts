import { kafka } from "../kafka/kafka.client";
import { BaseConsumer } from "./consumer";
import { processEvent } from "./handlers/index.handler";


//Menu Item Endpoints
export class MenuItemsConsumer extends BaseConsumer {

  constructor() {
    super(kafka, "user.management.event", "menu-service-group")
  }

  async handleMessage(message: any): Promise<void> {
    try {

      const value = message.value.toString();
      const eventData = JSON.parse(value);

      console.log('=== RAW EVENT DATA ===');
      console.log(JSON.stringify(eventData, null, 2));
      console.log('=====================');


      console.log('Processing category:', {
        type: eventData.type,
        eventId: eventData.eventId,
        category: {
          categoryId: eventData.category.categoryId,
        }
      });

      await processEvent(eventData);

    } catch (err: any) {
      console.error(' Error in handleMessage:', {
        message: err.message,
        stack: err.stack
      });
    }
  }


}
