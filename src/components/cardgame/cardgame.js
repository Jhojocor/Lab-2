class CardGame extends HTMLElement{

    static get observedAttributes() {
        return ["cardimg", "nameserie", "namejuego"];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
      }
  

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="index.css">
        <div class="cardgame">
            <img class="cardgameimg" src="${this.cardimg}">
        <div class="arreglo">
            <div class="tittlecard">
                <h5>${this.nameserie}</h5>
                <h2>${this.namejuego}</h2>
            </div>
            <div class="iconremote">
            <img src="https://cn.i.cdn.ti-platform.com/menu/item/games/es/games.svg">
            </div>
        </div>
        </div>
        `
    }
}

customElements.define('app-cardgame', CardGame)
export default CardGame;