const searchTemplate = document.createElement('template');
searchTemplate.innerHTML = `
<style>
    .search-wrapper {
        display: flex;
        flex-direction: column;
        gap: .25rem;
    }
    
    input {
        font-size: 1rem;
    }
</style>
<div class="search-wrapper">
    <input type="search" id="search" placeholder="Search">
</div>
`

class SearchBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(searchTemplate.content.cloneNode(true));
    }
}

window.customElements.define('search-bar', SearchBar);