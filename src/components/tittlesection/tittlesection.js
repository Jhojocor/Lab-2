class TittleSection extends HTMLElement{

    static get observedAttributes() {
        return ["icon", "tittle"];
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
        <div class="tittleGame">
        <div class="icon">
        <img src="${this.icon}">
        </div>
        <h1>${this.tittle}</h1>
        </div>
        `
    }

}

customElements.define('app-tittlesection', TittleSection)
export default TittleSection;