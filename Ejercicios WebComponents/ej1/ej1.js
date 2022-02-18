//blink custom element
class Blink extends HTMLElement {
    constructor () {
      super ();   
    }
	
	connectedCallback(){
	  const interval = (this.getAttribute ('changeInterval') * 1000 || 1000);
      const baseColor = this.getAttribute ('baseColorColor') || 'inherit';
      const altColor = this.getAttribute ('altColorrnativeColor') || 'transparent';
	  let inx = 0;	
	  
	  setInterval (() => {
        if (inx % 2 != 0){
			this.style.color = altColor;
		} else {
			this.style.color = baseColor;
		}
      }, interval);
	}	
}

customElements.define('wc-blink', Blink);