import { client } from './api/client';
import { events } from './api/registry';
import config from './config.json';
import logger from './api/logger';
for (let [key, event] of events.entries()) {
  client.on(event.name, event.handle);
  logger.log(`Registered event '${event.name}'`);
}
client.login(config.token);
