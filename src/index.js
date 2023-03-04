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
      `
    }
}

customElements.define('app-container', AppContainer)