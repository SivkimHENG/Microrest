import { CategoryConsumer } from "./consumer/categoryConsumer";
import { MenuItemsConsumer } from "./consumer/menu-items.consumer";

class EventRegistry {
  private consumers = [
    new CategoryConsumer(),
    new MenuItemsConsumer(),
  ];

  async startAll() {
    for (const consumer of this.consumers) {
      await consumer.connect();
      console.log(`Started consumer: ${consumer.constructor.name}`);
    }
  }

  async stopAll() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
      console.log(`Stopped consumer: ${consumer.constructor.name}`);
    }
  }
}

(async () => {
  const eventRegistry = new EventRegistry();
  await eventRegistry.startAll();

  process.on("SIGINT", async () => {
    await eventRegistry.stopAll();
  })

})()


