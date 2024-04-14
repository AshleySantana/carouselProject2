import { LitElement, html, css } from 'lit';

export class mediaImage extends LitElement {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`
    .article-body img{
    border: solid 2px var(--border-primary);
    cursor: pointer;
    -o-transition: all ease-in .3s;
    display: inherit;
    border-radius: 8px;
    margin: 32px 0;
    transition: all .3s ease-in;
    // transition-behavior: normal;
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
    transition-delay: 0s;
    transition-property: all;
    }
    `;
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

globalThis.customElements.define(mediaImage.tag, mediaImage);