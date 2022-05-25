import Event from '../api/event';
import { client } from '../api/client';
import config from '../config.json';
import logger from '../api/logger';
import { VoiceState } from 'discord.js';
export default class VoiceStateUpdateEvent extends Event {
  constructor() {
    super('voiceStateUpdate');
  }
  public async handle(oldState: VoiceState, newState: VoiceState) {
    if (
      newState.member &&
      config.disconnect.includes(newState.member.id) &&
      Math.random() < 0.33
    ) {
      newState.disconnect();
    }
  }
}
