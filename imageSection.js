const imageSectionTemplate = document.createElement('template');
imageSectionTemplate.innerHTML = `
<style>
    .image-wrapper {
        display: flex;
        flex-direction: column;        
        height: 200px;
        border: 1px solid black;   
        margin-top: 10px;       
    }   
</style>
<div class="image-wrapper">
<iframe src="https://www.dreamstime.com/taj-mahal-agra-india-morning-light-reflection-water-uttar-pradesh-image108954918" title="description"></iframe>
</div>

`

class ImageSection extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(imageSectionTemplate.content.cloneNode(true));

    }
}

window.customElements.define('image-section', ImageSection);