class Games extends HTMLElement{
  
      constructor(){
          super();
          this.attachShadow({mode: 'open'})
      }
  
      connectedCallback(){
          this.render();
      }

      render(){
          this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="index.css">
               <img class="games-icon" src="https://i.gifer.com/4XAV.gif">
      `
      }
  }
  
  customElements.define('app-games', Games)
  export default Games;