class ArrowReverse extends HTMLElement{

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
        <div class=" games-option">
             <img class="games-icon games-icon-size" src=https://cdn-icons-png.flaticon.com/512/2989/2989988.png>
        </div>
        `
    }

}

customElements.define('app-arrowrev', ArrowReverse)
export default ArrowReverse;