export class Product{
    constructor(data, productTemplateSelector){
        this._data = data;
        this._productTemplateSelector = productTemplateSelector;
        this._image = data.image;
        this._name = data.name;
        this._link = data.link;
    }
    _getTemplate(){
            const productElement = document
            .querySelector(this._productTemplateSelector)
            .content.querySelector('.main-catlog__item')
            .cloneNode(true);
        
        return productElement;
    }
    generateProduct(){
        this._element = this._getTemplate();
        this._element.href= this._link;
        this._cardPicture = this._element.querySelector('.main-catalog__item-image');
        this._cardPicture.src = this._image;
        this._cardName = this._element.querySelector('.main-catlog__item-title');
        this._cardName.textContent = this._name;

        return this._element;
    }
}