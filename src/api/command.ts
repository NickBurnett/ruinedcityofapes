import { Interaction } from 'discord.js';

export default abstract class Command {
  public name: string;
  public description: string;
  protected constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  public abstract handle(interaction: Interaction): void;
}
