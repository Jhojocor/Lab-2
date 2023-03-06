class Cards extends HTMLElement{

    static get observedAttributes() {
        return ["cardimg"];
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
             <img class="cards-icon" src=${this.cardimg}>
      `
    }
}

customElements.define('app-cards', Cards)
export default Cards;