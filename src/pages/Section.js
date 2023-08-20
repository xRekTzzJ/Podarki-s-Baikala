export class Section{
    constructor({items, renderer}, containerSelector){
        this._renderer = renderer;
        this._rendererItems = items;
        this._contaier = document.querySelector('.main-catalog__items-container')
    }
    renderItems(){
        this._rendererItems.forEach((item) => {
            this._renderer(item);
        })
    }
    addItem(element){
        this._contaier.append(element);
    }
}