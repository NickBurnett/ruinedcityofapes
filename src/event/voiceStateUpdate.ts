import Event from '../api/event';
import config from '../config.json';
import { VoiceState } from 'discord.js';
export default class VoiceStateUpdateEvent extends Event {
  constructor() {
    super('voiceStateUpdate');
  }
  public async handle(oldState: VoiceState, newState: VoiceState) {
    if (
      newState.member &&
      config.users.disconnect.includes(newState.member.id) &&
      Math.random() < 0.33
    ) {
      newState.disconnect();
    }
  }
}
