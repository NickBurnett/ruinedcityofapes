import { Client, ClientOptions, Intents } from 'discord.js';

const clientOptions: ClientOptions = {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
};

export const client = new Client(clientOptions);
