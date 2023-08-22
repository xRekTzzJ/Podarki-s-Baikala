export class Image{
    constructor(data, imageTemplateSelector){
        this._data = data;
        this._imageTemplate = imageTemplateSelector;
        this._image = data.src;
        this._isActive = data.isActive;
    }
    _getTemplate(){
            const imageElement = document
            .querySelector(this._imageTemplate)
            .content.querySelector('.product__mini-image')
            .cloneNode(true);

        return imageElement;
    }
    generateProduct(){
        this._element = this._getTemplate();
        this._element.src= this._image;
        return this._element;
    }
}