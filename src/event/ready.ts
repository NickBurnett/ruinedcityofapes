import Event from '../api/event';
import { client } from '../api/client';
import config from '../config.json';
import logger from '../api/logger';
import { ActivityTypes } from 'discord.js/typings/enums';
import BeepCommand from '../command/beep';
export default class ReadyEvent extends Event {
  constructor() {
    super('ready');
  }
  public async handle() {
    if (!client.user) return;
    logger.log(
      `Logged in as ${client.user.username}#${client.user.discriminator}`
    );
    client.user.setActivity(config.activity, {
      type: ActivityTypes.LISTENING,
      name: '',
    });
  }
}
