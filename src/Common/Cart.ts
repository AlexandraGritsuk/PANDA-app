import { Component } from "../Abstract/Componets";
import { TGood } from "../Abstract/Types";
import { LogicService } from "../Services/LogicService";

export class Cart extends Component {
    constructor(parent: HTMLElement, private service: LogicService, private good: TGood) {
        super(parent,'a', ["cart"]);

        new Component(this.root,'img', ["image_cart"], null , ["src", "alt"], [good.photoLink, "good"]);
        //new Component(this.root,'img', ["image_cart"], null , ["src", "alt"], [good.photoLink, "good"]);


        new Component(this.root, "h3", [], good.title);

        new Component(this.root, "h5", [], good.fields["Артикул"] + "");

        this.root.onclick = () => {
            service.openPageDetails(good);
        }
    }
}