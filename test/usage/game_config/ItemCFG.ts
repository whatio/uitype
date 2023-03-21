export interface ItemCFG extends game_config.ItemCFG{};
export class ItemCFG {
  get htmlName(): string {
    return `${this.Name}`;
  }
}