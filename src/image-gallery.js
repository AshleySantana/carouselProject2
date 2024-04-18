import { LitElement, html, css } from 'lit';

export class imageGallery extends LitElement {

  static get tag() {
    return 'image-gallery';
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`

    `;
  }

  openMediaImage(e){
    // this is gonna listen for the event to be triggered 
    //and send down the dom tree
    // to open play list tag
  }

  render() {
    return html`
      
      `;
  }

  static get properties() {
    return {
      
    };
  }
}

globalThis.customElements.define(imageGallery.tag, imageGallery);