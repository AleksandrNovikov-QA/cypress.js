describe('Тестирование формы авторизации', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio');           // Заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru');    // Вводим верный емайл
         cy.get('#pass').type('iLoveqastudio1');        // Вводим верный пароль
         cy.get('#loginButton').click();                // Нажимаем кнопку "Войти"
         cy.contains('Авторизация прошла успешно');     //Проверка наличия текста успеха авторизации
         cy.get('#exitMessageButton > .exitIcon');      // Проверка наличия крестика на странице  
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');                // Заходим на сайт
        cy.get('#forgotEmailButton').click();               // Нажимаем на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru');   // Вводим верный емайл
        cy.get('#restoreEmailButton').click();              // Нажимаем на кнопку "Отправить код"
        cy.contains('Успешно отправили пароль на e-mail');  // Проверка наличия текста на сайте
        cy.get('#exitMessageButton > .exitIcon');           //Проверка наличия крестика на странице  
    })
    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio');                // Заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru');         // Вводим верный емайл
        cy.get('#pass').type('iLoveqastudio2');             // Вводим неверный пароль
        cy.get('#loginButton').click();                     // Нажимаем кнопку "Войти"
        cy.contains('Такого логина или пароля нет');        // Проверка наличия текста на странице
        cy.get('#exitMessageButton > .exitIcon');           //Проверка наличия крестика на странице 
    })
    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio');                // Заходим на сайт
        cy.get('#mail').type('sasha@dolnikov.ru');          // Вводим неверный емайл
        cy.get('#pass').type('iLoveqastudio1');             // Вводим верный пароль
        cy.get('#loginButton').click();                     // Нажимаем кнопку "Войти"
        cy.contains('Такого логина или пароля нет');        // Проверка наличия текста на странице
        cy.get('#exitMessageButton > .exitIcon');           //Проверка наличия крестика на странице 
    })
    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio');                // Заходим на сайт
        cy.get('#mail').type('germandolnikov.ru');          // Вводим верный емайл без @
        cy.get('#pass').type('iLoveqastudio1');             // Вводим верный пароль
        cy.get('#loginButton').click();                     // Нажимаем кнопку "Войти"
        cy.contains('Нужно исправить проблему валидации');  // Проверка наличия текста на странице
        cy.get('#exitMessageButton > .exitIcon');           //Проверка наличия крестика на странице 
    })
    it('Проверка на приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio');           // Заходим на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru');    // Вводим верный емайл
         cy.get('#pass').type('iLoveqastudio1');        // Вводим верный пароль
         cy.get('#loginButton').click();                // Нажимаем кнопку "Войти"
         cy.contains('Авторизация прошла успешно');     //Проверка наличия текста успеха авторизации
         cy.get('#exitMessageButton > .exitIcon');      // Проверка наличия крестика на странице  
    })
})