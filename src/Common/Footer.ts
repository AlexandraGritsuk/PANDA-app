import { Component } from "../Abstract/Componets";

export class Footer extends Component {
    constructor(parent: HTMLElement) {
    super(parent, "footer", ["footer"]);
    
    const Logo = new Component(
        this.root,
        "div",
        ["Logo"],
        null
    );

    new Component(Logo.root, "img", ["footerImg"], null, ["src",'alt'], ["../assets/footerImg.png",'cart']);
    new Component(Logo.root, "h3", null, 'ОДО “PANDA”',);
    
    const Info = new Component(
        this.root,
        "div",
        ["Info"],
        null
    );

    new Component(Info.root, "h3", null, 'Телефон: +375298499595',);
    new Component(Info.root, "h3", null, 'г. Брест, ул. Суворова 21',);
    new Component(Info.root, "a", ["email"], 'market@panda.by', ["href"], ["#"]);
    const Links = new Component(
        Info.root,
        "div",
        ["Links"],
        null
    );
    const instagram = new Component(Links.root, "a", ["instagram"], null, ["href"], ["#"]);
    const telegram = new Component(Links.root, "a", ["telegram"], null, ["href"], ["#"]);
    const vk = new Component(Links.root, "a", ["vk"], null, ["href"], ["#"]);


    new Component(instagram.root, "img", ["instagram"], null, ["src",'alt'], ["../assets/instagram.png",'instagram']);
    new Component(telegram.root, "img", ["telegram"], null, ["src",'alt'], ["../assets/telegram.png",'telegram']);
    new Component(vk.root, "img", ["vk"], null, ["src",'alt'], ["../assets/vk.png",'vk']);


    }
}
