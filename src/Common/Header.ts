import { Component } from "../Abstract/Componets";

export class Header extends Component {
    constructor(parent: HTMLElement) {
    super(parent, "div", ["header"]);

    new Component(
        this.root,
        "img",
        ["logo"],
        null,
        ["src", "alt"],
        ["../assets/mainLogo.svg", "Логотип"]
    );

    const nav = new Component(this.root, "nav", ["nav"]);

    //const block = new Component(nav.root, "div", ["block"]);
    new Component(nav.root, "a", null, "Каталог", ["href"], ["#"]);
    new Component(nav.root, "a", null, "Магазины", ["href"], ["#"]);
    new Component(nav.root, "a", null, "Контакты", ["href"], ["#"]);

    const buttons = new Component(this.root, "div", ["buttons"]);
    
    // new Component(buttons.root, "img", ["profile"], null, ["src",'alt'], ["../assets/profile.svg",'profile']);
    // new Component(buttons.root, "img", ["cart"], null, ["src",'alt'], ["../assets/cart.svg",'cart']);
    const profile = new Component(buttons.root, "a", ["profile"], null, ["href"], ["#"]);
    const cart = new Component(buttons.root, "a", ["cart"], null, ["href"], ["#"]);

    new Component(cart.root, "img", ["cart"], null, ["src",'alt'], ["../assets/cart.svg",'cart']);
    new Component(profile.root, "img", ["profile"], null, ["src",'alt'], ["../assets/profile.svg",'cart']);
    


    }
}
