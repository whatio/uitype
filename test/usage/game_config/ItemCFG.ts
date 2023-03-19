module game_config {
  export class ItemCFG {
    get htmlName(): string {
      return `${this.Name}`;
    }
  }
}