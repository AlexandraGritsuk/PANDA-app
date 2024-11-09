import { Component } from "./Abstract/Componets";
import { Footer } from "./Common/Footer";
import { Header } from "./Common/Header";
import { Router } from "./Common/Router";
import { Magazine } from "./Pages/MagazinePage";
import { Information } from "./Pages/InformationPage";
import { MainPage } from "./Pages/MainPage";
import "./sass/style.scss";
import { DBService } from "./Services/DBService";
import { LogicService } from "./Services/LogicService";

const dbService = new DBService();
const logicService = new LogicService(dbService);

class App {
  constructor(parent: HTMLElement) {
    const wrap = new Component(parent, "div", ["wrapper"]);
    new Header(wrap.root);

    const main = new Component(wrap.root, "main");
    const links = {
      "#": new MainPage(main.root),
      "#magazine": new Magazine(main.root,  logicService),
      "#information": new Information(main.root),
    };

    new Router(links);

    new Footer(wrap.root);
  }
}

declare global {
  interface Window {
    app: App;
  }
}

window.app = new App(document.body);
