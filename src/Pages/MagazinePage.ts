import { Component } from "../Abstract/Componets";

export class Magazine extends Component {
  stateUpdate: boolean = false;
  constructor(parent: HTMLElement) {
    super(parent, "div", ["magazine"]);

    new Component(this.root, "p", null, "Здесь будут магазины");
  }

  renderWithUpdate(): void {
    if (!this.stateUpdate) {
      this.update();
      this.stateUpdate = true;
    }
    this.myRender();
  }

  update(): void {}
}
