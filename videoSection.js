const videoSectionTemplate = document.createElement('template');
videoSectionTemplate.innerHTML = `
<style>
    .video-wrapper {
        display: flex;
        flex-direction: column;        
        height: 200px;
        border: 1px solid black;   
        margin-top: 10px;       
    }   
</style>
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/mJ-qvsxPHpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
</div>

`

class VideoSection extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(videoSectionTemplate.content.cloneNode(true));

    }
}

window.customElements.define('video-section', VideoSection);