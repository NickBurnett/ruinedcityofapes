import {
  DiscordGatewayAdapterCreator,
  joinVoiceChannel,
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
} from '@discordjs/voice';
import { Interaction } from 'discord.js';
import Command from '../api/command';
export default class BeepCommand extends Command {
  constructor() {
    super('beep', 'Check if the bot is online.');
  }
  public async handle(interaction: Interaction) {
    if (!interaction.isCommand()) return;
    interaction.reply({
      content: 'Boop!',
      ephemeral: true,
    });
  }
}
