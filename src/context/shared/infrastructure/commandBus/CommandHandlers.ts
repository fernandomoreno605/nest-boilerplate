import { Command } from '../../domain/bus/command/Command';
import { CommandHandler } from '../../domain/bus/command/CommandHandler';

export class CommandHandlers extends Map<Command, CommandHandler<Command>> {
  constructor(commandHandlers: Array<CommandHandler<Command>>) {
    super();
    commandHandlers.forEach((commandHandler) => {
      this.set(commandHandler.subscribeTo(), commandHandler);
    });
  }

  public get(command: Command): CommandHandler<Command> {
    const commandHandler = super.get(command.constructor);
    if (!commandHandler) throw new Error();
    return commandHandler;
  }

  static create() {
    throw new Error('Method not implemented');
  }
}
