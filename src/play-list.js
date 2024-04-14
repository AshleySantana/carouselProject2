import { LitElement, html, css } from 'lit';

export class playList extends LitElement {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`

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

globalThis.customElements.define(playList.tag, playList);