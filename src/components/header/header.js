class Header extends HTMLElement{

    static get observedAttributes() {
        return ["icon", "names"];
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
            <div class="header-option">
             <img class="header-icon" src="${this.icon}">
             <h4>${this.names}</h4>
            </div>
      `
    }
}

customElements.define('app-header', Header)
export default Header;