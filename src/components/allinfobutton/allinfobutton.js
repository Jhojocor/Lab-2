class AllInfoButton extends HTMLElement{

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
          <section class="Allinfocontainer">
              <div class="allInfo">
                    <img src="${this.icon}">
                    <h1>${this.tittle}</h1>
                    <img src="https://cncdn.dmti.cloud/200e4a4b5c610e7faf2ade024293655cdbae5a40/static/media/arrow_wht.9822d346.svg">
              </div>
          </section>
      `
      }
  }
  
  customElements.define('app-allinfobutton', AllInfoButton)
  export default AllInfoButton;