import { EventTranformer } from "../../core/interface/event-transformer.interface";
import { BaseMessage, BaseRawEvent } from "../../core/type/base-message.type";



export class MessageTransformationService {


  private transformers: Map<string, EventTranformer> = new Map();

  registerTransformer(transformer: EventTranformer): void {
    this.transformers.set(transformer.eventType, transformer);
    console.log(`✓ Transformer registered: ${transformer.eventType}`);
  }

  registerTransformers(transformers: EventTranformer[]): void {
    transformers.forEach(t => this.registerTransformer(t))
  }


  transform(raw: BaseRawEvent): BaseMessage<any> | null {
    const transformer = this.transformers.get(raw.type);
    if (!transformer) {
      console.warn(`No transformer for: ${raw.type}`);
      return null;
    }

    if (!transformer.canHandle(raw)) {
      return null;
    }
    try {
      return transformer.transform(raw);
    } catch (err: any) {
      console.error(`Transform error for ${raw.type}:`, err);
      return null;
    }
  }

  transformBatch(rawEvents: BaseRawEvent[]): BaseMessage<any>[] {
    return rawEvents
      .map(raw => this.transform(raw))
      .filter((event): event is BaseMessage<any> => event !== null);
  }

  getRegisteredTransformers(): string[] {
    return Array.from(this.transformers.keys());
  }
}
