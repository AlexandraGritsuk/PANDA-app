import { Component } from "../Abstract/Componets";

export class MainPage extends Component {
  stateUpdate: boolean = false;
  constructor(parent: HTMLElement) {
    super(parent, "main", ["main_pages"]);

    // new Component(cart.root, "img", ["cart"], null, ["src",'alt'], ["../assets/cart.svg",'cart']);

    const mainPage = new Component(this.root, "div", ["mainImg"], null);

    new Component(
      mainPage.root,
      "p",
      null,
      "Оставьте заявку на новую коллекцию PANDA"
    );
    const catalog = new Component(this.root, "div", ["cataloge"], null);

    const FirstCard = new Component(catalog.root, "div", ["card"], null);
    new Component(
      FirstCard.root,
      "img",
      ["card_img"],
      null,
      ["src"],
      ["../assets/cardPhoto1.png"]
    );
    new Component(FirstCard.root, "h3", null, "Осень 2024");
    new Component(FirstCard.root, "h5", null, "Женская одежда");

    const SecondCard = new Component(catalog.root, "div", ["card"], null);
    new Component(
      SecondCard.root,
      "img",
      ["card_img"],
      null,
      ["src"],
      ["../assets/cardPhoto2.png"]
    );
    new Component(SecondCard.root, "h3", null, "Осень 2024");
    new Component(SecondCard.root, "h5", null, "Школьная форма");
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
