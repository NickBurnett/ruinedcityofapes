import Event from '../api/event';
import { client } from '../api/client';
import { commands } from '../api/registry';
import config from '../config.json';
import logger from '../api/logger';
import { Interaction, Message, VoiceState } from 'discord.js';
import Command from '../api/command';
export default class InteractionCreateEvent extends Event {
  constructor() {
    super('interactionCreate');
  }
  public async handle(interaction: Interaction) {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    if (!commands.has(commandName)) return;
    const command: Command = commands.get(commandName)!;
    command.handle(interaction);
  }
}
