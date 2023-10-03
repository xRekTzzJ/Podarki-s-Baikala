export class Footer{
    text(){
        const operating = document.querySelector('.footer__operating-text');
        const order = document.querySelector('.footer__order-text');
        const number = document.querySelector('.footer__phone-number');
        const copyright = document.querySelector('.footer__copyright')
        operating.textContent = 'Режим работы: с 10:00 до 19:00'
        order.textContent = 'Доставка по всей России'
        number.textContent = '+7 (914) 838-78-30'
        copyright.textContent = '© 2023 "Prospekt"'
    }
}