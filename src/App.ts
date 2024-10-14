import { Component } from "./Abstract/Componets";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { MainPage } from "./Pages/MainPage";
import './style.scss'
class App {
    constructor(parent : HTMLElement) {
        const wrap = new Component(parent,'div', ["wrapper"]);
        new Header(wrap.root);

        //const main = new Component(wrap.root, "main");
        new MainPage(wrap.root);

        new Footer(wrap.root);

    }
}

declare global {
    interface Window {
        app: App;
    }
}

window.app = new App(document.body);