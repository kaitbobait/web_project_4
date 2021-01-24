

/**
 * Renders a list of elements on a page
 * Receives markup through a callback function
 * inserts the markup in the container
 */
class Section {
  constructor({items, renderer}, cardElementSelector) {
    this._items = items; //array of data to add on a page
    this._renderer = renderer; // creates and renders data on a page
    this._cardElement = document.querySelector(cardElementSelector);
  }

  // renders all the elements on the page
  renderItems() {
    // this._items.forEach(item => this.renderer(item)); 
    this._items.forEach(item => {
      this._renderer(item); 
    });
  }

  // takes a DOM element and adds to a container
  addItem(element) {
    this._cardElement.prepend(element);
  }
}

export default Section;