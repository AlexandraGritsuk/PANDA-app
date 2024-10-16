import { Component } from "../Abstract/Componets";

export class Information extends Component {
  stateUpdate: boolean = false;
  constructor(parent: HTMLElement) {
    super(parent, "div", ["catalog"]);

    new Component(this.root, "p", null, "Здесь будет каталог");
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
