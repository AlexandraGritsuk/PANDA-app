import { Component } from "../Abstract/Componets";
import { TTypeGood, TTypesGoods } from "../Abstract/Types";
import { LogicService } from "../Services/LogicService";

export class ButtonTypeGood extends Component {
    constructor(parent: HTMLElement, private service: LogicService, private typeGood: TTypeGood) {
        super(parent,'div', ["criteria_button"], null);
    // new Component(cart.root, "img", ["cart"], null, ["src",'alt'], ["../assets/cart.svg",'cart']);
        const input = new Component(this.root,'input', ["criteria_input"], null, ["type"], ["checkbox"]);
        new Component(this.root,'span', ["criteria_name"], typeGood.title);
        
        
        input.root.onclick = () => {
            service.updateGoodsByType(typeGood.id);
        };
    }
}