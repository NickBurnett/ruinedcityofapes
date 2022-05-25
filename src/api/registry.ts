import BeepCommand from '../command/beep';
import ThomussyCommand from '../command/thomussy';
import InteractionCreateEvent from '../event/interactionCreate';
import MessageCreatedEvent from '../event/messageCreated';
import ReadyEvent from '../event/ready';
import VoiceStateUpdateEvent from '../event/voiceStateUpdate';
import Command from './command';
import Event from './event';

export const commands: Map<string, Command> = new Map(
  Object.entries({
    beep: new BeepCommand(),
    thomussy: new ThomussyCommand(),
  })
);
export const events: Map<string, Event> = new Map(
  Object.entries({
    ready: new ReadyEvent(),
    voiceStateUpdate: new VoiceStateUpdateEvent(),
    messageCreated: new MessageCreatedEvent(),
    interactionCreate: new InteractionCreateEvent(),
  })
);
