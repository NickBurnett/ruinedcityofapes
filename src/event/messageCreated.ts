import Event from '../api/event';
import { client } from '../api/client';
import config from '../config.json';
import logger from '../api/logger';
import { Message, VoiceState } from 'discord.js';
export default class MessageCreatedEvent extends Event {
  constructor() {
    super('messageCreate');
  }
  public async handle(message: Message) {
    if (
      message.member &&
      config.users.message.includes(message.member.id) &&
      Math.random() < 0.25
    ) {
      message.reply({
        content:
          config.message_replies[
            Math.floor(Math.random() * config.message_replies.length)
          ],
      });
    }
  }
}
