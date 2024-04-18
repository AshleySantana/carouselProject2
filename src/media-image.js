import { LitElement, html, css } from 'lit';

export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.imageSrc = "";
    this.imageAltText = "";
    this.addEventListener("click", this.clickEvent);
  }

  clickEvent(e){
    this.dispatchEvent(new CustomEvent("openMediaImage"), {
      detail: "no"
    });
  }

  static get styles() {
    return css`
    .image{
    border: solid 2px black ;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease-in .3s;
    display: inherit;
    margin: 32px 0;
    transition: all .3s ease-in;
    }
    img:hover {
      transform: translate(8px,-8px);
      box-shadow: -8px 8px #000
    }
    `;
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