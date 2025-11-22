import { BaseMessage } from "../core/type/base-message.type";
import {
  UserAuthenticateHandler,
  UserRegistrationHandler
} from "../domain/auth";
import {
  categoryPublisher,
  menuItemPublisher
} from "../domain/catalog/publisher";
import { KafkaEventBus } from "../infrastructure/kafka";
import {
  EventRegistryService,
  PublisherRegistryService
} from "../infrastructure/service";

export class Bootstrap {

  private eventBus: KafkaEventBus;
  private eventRegistry: EventRegistryService;
  private publisherRegistry: PublisherRegistryService;


  private registrationHandler = new UserRegistrationHandler();
  private authenticateHandler = new UserAuthenticateHandler();


  constructor(
    eventBus: KafkaEventBus,
    eventRegistry: EventRegistryService,
    publisherRegistry: PublisherRegistryService,

    registrationHandler?: UserRegistrationHandler,
    authenticateHandler?: UserAuthenticateHandler,

  ) {
    this.eventBus = eventBus;
    this.eventRegistry = eventRegistry;
    this.publisherRegistry = publisherRegistry;





  }

  async initialize(): Promise<void> {
    try {
      await this.eventBus.initialize();
      await this.eventBus.start();
      console.log("Event bus initialized and start");

      this.setupEventListeners();
      console.log("✓ Event listeners configured");

      await this.initializeEventRegistry()
      console.log("✓ Event registry initialized");

      categoryPublisher.initialize(this.eventBus);
      await this.initializePublishRegistry();
      console.log("✓ Publisher registry initialized");
      console.log("✓ Bootstrap initialization completed successfully");
    } catch (err: any) {
      console.error("✗ Bootstrap initialization failed:", err.message);
      throw new Error(`Bootstrap initialization failed: ${err.message}`);
    }
  }


  private async initializeEventRegistry(): Promise<void> {
    this.eventRegistry.registerHandlers([
      this.registrationHandler,
      this.authenticateHandler
    ]);

  }

  private async initializePublishRegistry(): Promise<void> {
    this.publisherRegistry.registerPublishers([
      categoryPublisher,
      menuItemPublisher
    ]);
  }


  private setupEventListeners(): void {

    this.eventBus.on("auth.user.event", async (topic, message, metadata) => {
      try {
        const parsed = JSON.parse(message.value?.toString() || '{}');

        const baseMessage: BaseMessage<typeof parsed> = {
          eventId: parsed.eventId || `${Date.now()}`,
          timestamp: parsed.timestamp || new Date().toISOString(),
          payload: parsed,
        };

        await this.eventRegistry.dispatch(baseMessage);
      } catch (err: any) {
        console.error(`Error processing auth event:`, err);
        throw err;
      }
    });
  }

}

