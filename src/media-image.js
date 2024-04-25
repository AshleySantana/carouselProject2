import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class mediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imageSrc = "";
    this.imageAltText = "";
    this.addEventListener("click", this.openDialog);
  }

  static get styles() {
    return css`
    img {
    border: solid 2px black ;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease-in .3s;
    display: inherit;
    margin: 32px 0;
    transition: all .3s ease-in;
    height: 200px;
    width: auto;
    }
    img:hover {
      transform: translate(8px,-8px);
      box-shadow: -8px 8px #000
    }



    `;
  }

  openDialog(e){
    this.dispatchEvent(new CustomEvent("openDialog", {bubbles :true}), {
      
    });
  }


  render() {
    return html`
    <div class="image">
      <img src="${this.imageSrc}" alt="${this.imageAltText}">
    </div>
    `;
  }

  static get properties() {
    return {
      imageSrc: {type: String},
      imageAltText: {type: String}
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);