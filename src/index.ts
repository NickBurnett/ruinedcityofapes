import { client } from './api/client';
import { commands, events } from './api/registry';
import config from './config.json';
import logger from './api/logger';
for (let [key, command] of commands.entries()) {
  client.guilds.cache.get(config.guild)?.commands.create({
    name: command.name,
    description: command.description,
  });
  logger.log(`Registered command '${command.name}'`);
}
for (let [key, event] of events.entries()) {
  client.on(event.name, event.handle);
  logger.log(`Registered event '${event.name}'`);
}

client.login(config.token);
