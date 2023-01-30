const orientationTemplate = document.createElement('template');
orientationTemplate.innerHTML = `
<style>
    h3 {
        color: coral;
    }
</style>
<div class="orientation-panel">
    <h3></h3>
    <search-bar></search-bar>  
</div>
`

class OrientationPanel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(orientationTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
}

window.customElements.define('orientation-panel', OrientationPanel);