import { Client } from 'discord.js';

export default abstract class Event {
  public name: string;

  protected constructor(event: string) {
    this.name = event;
  }

  public abstract handle(...args: any[]): void;
}
