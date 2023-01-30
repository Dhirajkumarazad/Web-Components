const linkSectionTemplate = document.createElement('template');
linkSectionTemplate.innerHTML = `
<style>
    .link-wrapper {
        display: flex;
        flex-direction: column;        
        height: 200px;
        border: 1px solid black;   
        margin-top: 10px;    
        text-align: center;  
    }   
</style>
<div class="link-wrapper">
 <h2><a href="url">google.com</a></h2>
</div>
`

class LinkSection extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(linkSectionTemplate.content.cloneNode(true));

    }
}

window.customElements.define('link-section', LinkSection);
