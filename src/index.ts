import { client } from './api/client';
import config from './config.json';
import Event from './api/event';
import ReadyEvent from './event/ready';
import logger from './api/logger';
import VoiceStateUpdateEvent from './event/voiceStateUpdate';
import MessageCreatedEvent from './event/messageCreated';

const events: Event[] = [
  new ReadyEvent(),
  new VoiceStateUpdateEvent(),
  new MessageCreatedEvent(),
];

events.forEach((event) => {
  client.on(event.name, event.handle);
  logger.log(`Loaded event '${event.name}'`);
});

client.login(config.token);
