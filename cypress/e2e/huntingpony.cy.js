describe('Тестирование сайта huntinpony', function () {
    it('Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');           // Заходим на сайт
         cy.get('[href="/collection/sumki-i-avtokresla"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click(); // Переходим в раздел сумки и автокресла
         cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); // Выбираем сумка-переноска
         cy.get('.add-cart-counter__btn').click(); // Нажимаем кнопку "В корзину"
         cy.get('[data-add-cart-counter-plus=""]').click(); // Нажимаем кнопку "+" в корзине
         cy.get('.header__cart').click(); // Переходим в корзину
         cy.get('.cart-controls > .button').click(); // Нажимаем на кнопку "Оформить заказ"
         cy.contains('Оформление заказа'); // Проверка наличия текста на странице
        })  
})