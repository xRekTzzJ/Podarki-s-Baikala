export class ImageSection{
    constructor({items, renderer}, containerSelector){
        this._renderer = renderer;
        this._rendererItems = items;
        this._container = document.querySelector(containerSelector)
    }
    renderItems(){
        this._rendererItems.forEach((item) => {
            this._renderer(item);
        })
    }
    addItem(element){
        this._container.append(element);
    }
}