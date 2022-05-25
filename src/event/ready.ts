import Event from '../api/event';
import { client } from '../api/client';
import { commands } from '../api/registry';
import config from '../config.json';
import logger from '../api/logger';
import { ActivityTypes } from 'discord.js/typings/enums';
export default class ReadyEvent extends Event {
  constructor() {
    super('ready');
  }
  public async handle() {
    if (!client.user) return;
    for (let [key, command] of commands.entries()) {
      client.guilds.cache.get(config.guild)?.commands.create({
        name: command.name,
        description: command.description,
      });
      logger.log(`Registered command '${command.name}'`);
    }
    logger.log(
      `Logged in as ${client.user.username}#${client.user.discriminator}`
    );
    client.user.setActivity(config.activity, {
      type: ActivityTypes.LISTENING,
      name: '',
    });
  }
}
