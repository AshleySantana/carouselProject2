import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class playList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.currentSlideIndex = 0;
    this.slideArray = [];
  }

  static get styles() {
    return css`

    `;
  }

// var data [
//   imageSrc = 
//   description = 
// ]


  firstUpdated(){
    const mediaImage = document.querySelectorAll("media-image");
    const selectedImage = "";

    //Find all the media images on the page
    //Somehow pull all their data into an array
    mediaImage.forEach(img => {
      // push each image into slideArray
      this.slideArray.push(img.getAttribute("imageSrc"));
      this.requestUpdate();
    })
    console.log(this.slideArray);


    // this is gonna listen for the event to be triggered 
    //and send down the dom tree to open play list tag
    document.addEventListener("media-clicked", (e) =>{
        //Show your play-list
        //Figure out which image was clicked
        //Show that images content first 

      // add event listener for each image to see if they were clicked and then add to var
      mediaImage.forEach(img => {
        mediaImage.addEventListener('click', (e) => { 
          selectedImage = mediaImage.textContent;
        });
      })
      

      const desiredImage = ;
      let currImageIndex = -1;
      for(let i = 0; i < this.slideArray.length; i++){
        if(this.slideArray[i].img.getAttribute("imageSrc")) == desiredImage){
          desiredImage = i;
          break;
        }
      }
      console.log(e);
    });

  }

  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1) % this.slides.length;
    this.showSlide(this.currentSlideIndex);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.showSlide(this.currentSlideIndex);
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  //${this.firstUpdated ? open : ""}
  render() {
    return html`
      <dialog class="playList" >
        <button class="exitButton">x</button>
        <div>
          <button @click="${this.previousSlide}"> < </button>
          <img class="blah" src="${this.slideArray[this.currentSlideIndex]}" alt="Italian Trulli" hieght="300px" width="300px">
          <button @click="${this.nextSlide}"> > </button>
        </div>
      </dialog>
      `;
  }

  static get properties() {
    return {
      currentSlideIndex: {type: Number},
      slideArray: {type: Array}, 

    };
  }
}

globalThis.customElements.define(playList.tag, playList);