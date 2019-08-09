class Copyright extends HTMLElement {
    constructor(){
        super()
        this._title = ''
        this._year = '2019'
        this._shadow = this.attachShadow({mode: 'open'})
        this.render()
    }

    static get observedAttributes(){return ['title', 'year']}

    attributeChangedCallback(name, oldValue, newValue){
        if (name === 'title') {
            this._title = newValue
        } 
        if(name === 'year'){
            this._year = newValue
        }
        this.render()
    }

    render(){
        this._shadow.innerHTML = `${this._title} ©${this._year}`
    }
}

customElements.define('copy-right', Copyright)