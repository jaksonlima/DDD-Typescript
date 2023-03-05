import { EventHandlerInterface } from "../../../@shared/event/event-handler.interface";
import { ProductCreatedEvent } from "../product-create.event";

export class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log(`Send e amilt to ${event.eventData.email} ...`);
  }
}
