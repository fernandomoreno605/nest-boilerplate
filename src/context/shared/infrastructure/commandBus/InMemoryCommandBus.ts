import { Injectable, Logger } from '@nestjs/common';
import { Command } from '../../domain/bus/command/Command';
import { CommandBus } from '../../domain/bus/command/CommandBus';
import { CommandHandler } from '../../domain/bus/command/CommandHandler';
import InfrastructureError from '../../domain/error/InfrastructureError';

@Injectable()
export default class InMemoryCommandBus implements CommandBus {
  private readonly logger = new Logger(InMemoryCommandBus.name);
  private readonly handlerMap: Map<Command, CommandHandler<Command>> =
    new Map();
  constructor(handlers: CommandHandler<Command>[]) {
    handlers.forEach((handler) => {
      this.handlerMap.set(handler.subscribeTo(), handler);
    });
  }

  async dispatch(command: Command): Promise<void> {
    const handler = this.handlerMap.get(command.constructor.name);

    if (!handler) {
      throw new InfrastructureError({
        code: '6829992e-fec0-4f70-83d5-d6089d963e50',
        message: `No Command Handler register for ${command.constructor.name}`,
      });
    }
    this.logger.debug(`Dispatching ${command.constructor.name}`);
    await handler.handle(command);
  }
}
