import "./components/index.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    render(){
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="index.css">
        
        <nav class="header">
          <img src=https://cncdn.dmti.cloud/200e4a4b5c610e7faf2ade024293655cdbae5a40/static/media/cn-logo.3f4d7cfb.svg>
          <app-header icon="https://cn.i.cdn.ti-platform.com/menu/item/games/es/games.svg" names="Juegos"></app-header>
          <app-header icon="https://cn.i.cdn.ti-platform.com/menu/item/videos/es/2b2e02f48a364aa3a9fc67a82bd33dda.svg" names="Videos"></app-header>
          <app-header icon="https://cn.i.cdn.ti-platform.com/menu/item/climate-champions/za/climate-champs-mainnav.92be4ce8.svg" names="Campeones del clima"></app-header>
          <app-header icon="https://cn.i.cdn.ti-platform.com/menu/item/aplicaciones/es/apps.svg" names="Aplicaciones"></app-header>
        </nav>

        <section class="games">
          <app-arrow></app-arrow>
          <app-games game="https://i.gifer.com/4XAV.gif"></app-games>
          <app-games game="https://i.pinimg.com/564x/b9/55/c3/b955c32276f1e17b2b130195f1eaff2f.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/77/04/c2/7704c27a43263c74d5bc4109f1d071da.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/2c/3e/7e/2c3e7eece7e29c46fe64211a474ed3ef.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/3b/25/33/3b2533c58f57018870d7ae0eb5e681a4.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/b8/5b/8d/b85b8d5b0e8d9f4de95a267bc8ba5cd2.jpg"></app-games>
          <app-games game="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODJmZDQ4YTY4NTg4YWRhZjNmZDQyY2FmZTc2Nzc4Mjk5MDA2ZmEwYiZjdD1n/YqbUp2Lrhtoy8MtlGl/giphy.gif"></app-games>
          <app-games game="https://i.pinimg.com/564x/04/65/77/046577cb7df966d5b2fc33cf10050555.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/af/33/22/af3322f5fbb971500e10fe1d66a0e78c.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/13/e8/66/13e866eb8d15833b55d4182c8425318d.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/74/67/97/746797c9435bcfbccc51d27e940fdd37.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/e3/ba/1a/e3ba1a29c74f92b7c9e2c6ef82f84d65.jpg"></app-games>
          <app-games game="https://i.pinimg.com/564x/71/d3/ff/71d3ff7bd485cda936080a4e2020cd1e.jpg"></app-games>
          <app-arrowrev></app-arrowrev>
        </section>
      `
    }
}

customElements.define('app-container', AppContainer)