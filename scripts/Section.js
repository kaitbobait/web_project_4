
class Section {
  constructor({items, renderer}, cardElements) {
    this._items = items;
    this._renderer = renderer;
    this._cardElements = cardElements;
  }

  // renders all the elements on the page
  renderer() {
    return this._cardElements //incomplete
  }

  // takes a DOM element and adds to a container
  addItem() {
    
  }
}