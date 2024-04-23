import { LitElement, html, css } from 'lit';

export class imageGallery extends LitElement {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();
    this.opened = false;

  }

  static get styles() {
    return css`

    `;
  }



  firstUpdated(){
    // this is gonna listen for the event to be triggered 
    //and send down the dom tree
    // to open play list tag
    document.body.addEventListener("openDialog", (e) =>{
      this.opened = true;
    });
    document.body.addEventListener("closeDialog", (e) =>{
      this.opened = false;
    });
  }
  
  
  render() {
    return html`
      ${this.opened ? html`<play-list></play-list>` : ""}
      `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(imageGallery.tag, imageGallery);