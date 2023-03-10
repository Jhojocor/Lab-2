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

        <section class="cards">
        <app-arrow></app-arrow>
         <app-cards cardimg="https://cn.i.cdn.ti-platform.com/content/334/bmx-champions/game/es/bmxchampions-1920x1080-en.cce2a4fe.jpg?imwidth=400"></app-cards>
         <app-cards cardimg="https://apps.cartoonnetwork.co.uk/uploads/galleries/app/app2/5/427/mini/63d4b94d92ad590b86d7e646a17f0ad69862012.jpg"></app-cards>
         <app-cards cardimg="https://cn.i.cdn.ti-platform.com/content/334/penalty-power-3/game/es/penaltypower3_1600x900-es-min.f3ff4834.jpg?imwidth=300"></app-cards>
         <app-arrowrev></app-arrowrev>
        </section>

        <section class="featuredGames">
        <app-tittlesection icon="https://cn.i.cdn.ti-platform.com/menu/item/games/es/games.svg" tittle="Juegos destacados"></app-tittlesection>
        <div class="Pedazopajuegos">
          <app-arrow></app-arrow>
          <app-cardgame cardimg="https://cn.i.cdn.ti-platform.com/content/1718/busca-la-pareja/game/es/matchup-1600x900-es.6ace9185.jpg?imwidth=300" data-src="https://cn.i.cdn.ti-platform.com/content/1718/busca-la-pareja/game/es/matchup-1600x900-es.6ace9185.jpg?imwidth=300"  nameserie="DC Super Hero girls" namejuego="Busca la pareja"></app-cardgame>
          <app-cardgame cardimg="https://cn.i.cdn.ti-platform.com/content/934/carambola-de-ositos/game/es/bouncycubs-1600x900-es.288eac69.jpg?imwidth=300" nameserie="Somos osos" namejuego="bear carambola"></app-cardgame>
          <app-cardgame cardimg="https://cn.i.cdn.ti-platform.com/content/1897/how-to-draw---gumball/game/uk/thumbnails_how-to-draw-gumball-1600-x-900.d5035e62.jpg?imwidth=300" nameserie="#CNjunto" namejuego="!learn to draw??"></app-cardgame>
          <app-cardgame cardimg="https://cn.i.cdn.ti-platform.com/cnemea/content/16410/game/SoundCastle-WBB-Cover-Es.jpg?imwidth=300" nameserie="Hora de aventura" namejuego="Sonocastillo"></app-cardgame>
          <app-arrowrev></app-arrowrev>
        </div>
        <app-allinfobutton icon="https://cncdn.dmti.cloud/200e4a4b5c610e7faf2ade024293655cdbae5a40/static/media/game_wht.e0291b25.svg" tittle="VER TODOS LOS JUEGOS"></app-allinfobutton>
        </section>
      `
    }
}

customElements.define('app-container', AppContainer)