import { Command } from './Command';

export interface CommandHandler<T extends Command, Response = void> {
  subscribeTo(): Command;
  handle(command: T): Promise<Response>;
}
