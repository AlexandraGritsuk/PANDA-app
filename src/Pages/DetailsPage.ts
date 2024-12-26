import { Component } from "../Abstract/Componets";
import { TGood } from "../Abstract/Types";
import { Slider } from "../Common/Slider";
import { LogicService } from "../Services/LogicService";

export class DetailsPage extends Component {
  stateUpdate: boolean = false;

  private good: TGood | null = null;

  h2Name: Component;
  divProp: Component;
  slider: Slider;

  constructor(parent: HTMLElement, private service: LogicService) {
    super(parent, "div", ["details_page"]);
    const mainDiv = new Component(this.root, "div");
    this.h2Name = new Component(mainDiv.root, "h2");
    
    this.slider = new Slider(mainDiv.root, service);
    this.divProp = new Component(mainDiv.root, "div", ['test']);

    new Component(mainDiv.root, "button", ['cartButton'], "Добавить в корзину")
    service.addListener("updatePageDetails", (good) => {
        this.good = good as TGood;
        this.update();
    })
  }

  renderWithUpdate(): void {
    if (!this.stateUpdate) {
      this.update();
      this.stateUpdate = true;
    }
    this.myRender();
  }

  update(): void {
    if (!this.good) return;
    this.h2Name.root.textContent = this.good.title + " " + this.good.fields["Артикул"];

    this.divProp.root.innerHTML = "";
    this.slider.setPhotos(this.good);
    this.good.typeFields.forEach((type,num) => {
        const divElem = new Component(this.divProp.root, "div", ["attribute"]);
        if (type[1] !== "Артикул") {
            new Component(divElem.root, "span", ["type"], type[1] + ":" + " ");
            new Component(divElem.root, "span", ["value"], "" + this.good?.valueFields[num][1]);
        }
        

    })
  }

  isGoodInDetailsPage(): boolean {
    return this.good ? true : false;
  }
}
