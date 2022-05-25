import { Interaction } from 'discord.js';
import {
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  DiscordGatewayAdapterCreator,
  joinVoiceChannel,
  NoSubscriberBehavior,
} from '@discordjs/voice';
import Command from '../api/command';
export default class ThomussyCommand extends Command {
  constructor() {
    super('thomussy', ';)');
  }
  public async handle(interaction: Interaction) {
    if (!interaction.isCommand() || !interaction.member) return;
    const member = interaction.guild?.members.cache.get(
      interaction.member!.user.id
    );
    if (!member?.voice.channelId)
      return interaction.reply({
        content:
          'You need to be in a voice channel to feast on the Thomussy ;)',
        ephemeral: true,
      });
    const voiceChannel = member.voice.channel!;

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guildId,
      adapterCreator: interaction.guild
        ?.voiceAdapterCreator as DiscordGatewayAdapterCreator,
    });
    const audioPlayer = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      },
    });
    const audioResource = createAudioResource(
      '/mnt/c/Users/nicol/Desktop/thomussy.mp3'
    );
    audioPlayer.play(audioResource);
    connection.subscribe(audioPlayer);
    audioPlayer.on(AudioPlayerStatus.Idle, (oldState, newState) => {
      connection.destroy();
    });

    interaction.reply({
      content: ';)',
      ephemeral: true,
    });
  }
}
