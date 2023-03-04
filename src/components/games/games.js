class Games extends HTMLElement{

      static get observedAttributes() {
        return ["game"];
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
               <img class="games-icon" src="${this.game}">
      `
      }
  }
  
  customElements.define('app-games', Games)
  export default Games;