import { Client, Intents } from 'discord.js';
import { client } from './api/client';
import config from './config.json';
import Event from './api/event';
import ReadyEvent from './event/ready';
import logger from './api/logger';
import VoiceStateUpdateEvent from './event/voiceStateUpdate';

const events: Event[] = [new ReadyEvent(), new VoiceStateUpdateEvent()];

events.forEach((event) => {
  client.on(event.name, event.handle);
  logger.log(`Loaded event '${event.name}'`);
});

client.login(config.token);
