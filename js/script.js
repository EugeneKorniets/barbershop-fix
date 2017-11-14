// работа с модальными окнами start

// объявление всех переменных для работы с модальными окнами
var loginBtn = document.querySelector(".login");
var modalOverlay = document.querySelector(".modal-overlay");
var loginPopup = document.querySelector(".modal-content");
var login = loginPopup.querySelector("[name=login]");

var form = loginPopup.querySelector("form");
var password = loginPopup.querySelector("[name=password]");

var closeLogin = document.querySelector(".modal-content .modal-content-close");

var mapBtn = document.querySelector(".js-btn-map");
var mapPopup = document.querySelector(".modal-content-map");

var mapBtnFooter = document.querySelector(".footer .js-btn-map");

var closeMap = document.querySelector(".modal-content-map .modal-content-close");

// появление окна авторизации при клике по кнопке Вход, фокусировка на поле Логин
loginBtn.addEventListener("click", function(event){
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    loginPopup.classList.add("modal-content-show");
    login.focus();
});

// проверка формы на заполненность полей при попытке отправки формы
form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        loginPopup.classList.add("modal-error"); // не забываем удалить при закрытии окна
    }
});

// скрытие окна авторизации при клике по кнопке Закрыть модального окна
closeLogin.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    loginPopup.classList.remove("modal-content-show");
    loginPopup.classList.remove("modal-error");
});

// скрытие окна авторизации при клике вне модального окна
modalOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    loginPopup.classList.remove("modal-content-show");
    loginPopup.classList.remove("modal-error");
});

// скрытие окна авторизации при нажатии клавиши ESC
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (loginPopup.classList.contains("modal-content-show")) {
            modalOverlay.classList.remove("modal-overlay-show");
            loginPopup.classList.remove("modal-content-show");
            loginPopup.classList.remove("modal-error");
        }
    }
});

// появление окна с картой при клике по кнопке Как проехать
mapBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    mapPopup.classList.add("modal-content-map-show");
});


// появление окна с картой при клике по кнопке Как нас найти в футере
mapBtnFooter.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    mapPopup.classList.add("modal-content-map-show");
});


// скрытие окна с картой, при клике по кнопке Закрыть модального окна
closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    mapPopup.classList.remove("modal-content-map-show");
});

// скрытие окна с картой, при клике вне модального окна
modalOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    mapPopup.classList.remove("modal-content-map-show");
});

// скрытие окна с картой при нажатии клавиши ESC
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-map-show")) {
            modalOverlay.classList.remove("modal-overlay-show");
            mapPopup.classList.remove("modal-content-map-show");
        }
    }
});

// работа с модальными окнами end