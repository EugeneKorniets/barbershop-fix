// работа с модальными окнами start

// модальное окно login
if (document.querySelector(".modal-login") != null) {
  var loginBtn = document.querySelector(".login");
  var loginPopup = document.querySelector(".modal-login");
  var modalOverlay = document.querySelector(".modal-overlay");
  var login = loginPopup.querySelector("[name=login]");
  var form = loginPopup.querySelector("form");
  var password = loginPopup.querySelector("[name=password]");
  var closeLogin = document.querySelector(".modal-login .modal-content-close");

  // появление окна login при клике по кнопке Вход, фокусировка на поле Логин
  loginBtn.addEventListener("click", function(event){
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    loginPopup.classList.add("modal-login-show");
    login.focus();
  });

  // проверка формы на заполненность полей при попытке отправки формы
  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      loginPopup.classList.add("modal-error"); // не забываем удалить при закрытии окна
    }
  });

  // скрытие окна login при клике по кнопке Закрыть модального окна
  closeLogin.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    loginPopup.classList.remove("modal-login-show");
    loginPopup.classList.remove("modal-error");
  });
}


// модальное окно feedback
if (document.querySelector(".modal-feedback") != null) {
  var feedbackBtn = document.querySelector(".feedback-btn");
  var feedbackModal = document.querySelector(".modal-feedback");
  var closeFeedback = document.querySelector(".modal-feedback .modal-content-close");

  // появление окна feedback при клике на кнопке Обратная связь на главной
  feedbackBtn.addEventListener("click", function(event){
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    feedbackModal.classList.add("modal-feedback-show");
  });

  // скрытие окна feedback при клике по кнопке Закрыть модального окна
  closeFeedback.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    feedbackModal.classList.remove("modal-feedback-show");
  });
}


// модальное окно map
if (document.querySelector(".modal-map") != null) {
  var mapBtn = document.querySelector(".js-btn-map");
  var mapBtnFooter = document.querySelector(".footer .js-btn-map");
  var mapPopup = document.querySelector(".modal-map");
  var closeMap = document.querySelector(".modal-map .modal-content-close");

  // появление окна map при клике по кнопке Как проехать
  mapBtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    mapPopup.classList.add("modal-map-show");
  });

  // появление окна map при клике по кнопке Как нас найти в футере
  mapBtnFooter.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-overlay-show");
    mapPopup.classList.add("modal-map-show");
  });

  // скрытие окна map, при клике по кнопке Закрыть модального окна
  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-overlay-show");
    mapPopup.classList.remove("modal-map-show");
  });
}


// скрытие всех модальных окон при клике вне модального окна
if (document.querySelector(".modal-overlay") != null) {
  modalOverlay.addEventListener("click", function(event) {
    if (document.querySelector(".modal-login") != null) {
      modalOverlay.classList.remove("modal-overlay-show");
      loginPopup.classList.remove("modal-login-show");
      loginPopup.classList.remove("modal-error");
    }

    if(document.querySelector(".modal-feedback") != null) {
      if (feedbackModal.classList.contains("modal-feedback-show")) {
        modalOverlay.classList.remove("modal-overlay-show");
        feedbackModal.classList.remove("modal-feedback-show");
      }
    }

    if(document.querySelector(".modal-map") != null) {
      mapPopup.classList.remove("modal-map-show");
    }
  });
}


// скрытие всех модальных окон при нажатии клавиши ESC
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (loginPopup.classList.contains("modal-login-show")) {
      modalOverlay.classList.remove("modal-overlay-show");
      loginPopup.classList.remove("modal-login-show");
      loginPopup.classList.remove("modal-error");
    }
    if (mapPopup.classList.contains("modal-map-show")) {
      modalOverlay.classList.remove("modal-overlay-show");
      mapPopup.classList.remove("modal-map-show");
    }
    if(document.querySelector(".modal-feedback") != null) {
      if (feedbackModal.classList.contains("modal-feedback-show")) {
        modalOverlay.classList.remove("modal-overlay-show");
        feedbackModal.classList.remove("modal-feedback-show");
      }
    }
  }
});

// работа с модальными окнами end

// работа слайдера start
if (document.querySelectorAll(".gallery-image").length > 0) {
  var galleryImage = document.querySelectorAll(".gallery-image");
  var galleryBtnPrev = document.querySelector(".gallery-prev");
  var galleryBtnNext = document.querySelector(".gallery-next");
  var countGalleryImages = galleryImage.length;
  var activeGalleryImage;

  toggleButtons();

  galleryBtnNext.addEventListener('click', function(){
    for (i = 0; i < countGalleryImages; i++) {
      if (galleryImage[i].classList.contains("active")) {
        activeGalleryImage = i;
        break;
      }
    }
    galleryImage[activeGalleryImage].classList.remove('active');
    activeGalleryImage = activeGalleryImage + 1;
    galleryImage[activeGalleryImage].classList.add('active');
    if (activeGalleryImage == countGalleryImages - 1) {
      galleryBtnNext.disabled = true;
    }
    if (activeGalleryImage != 0 &  activeGalleryImage <countGalleryImages - 1) {
      galleryBtnNext.disabled = false;
      galleryBtnPrev.disabled = false;
    }
  });

  galleryBtnPrev.addEventListener('click', function(){
    for (i = 0; i < countGalleryImages; i++) {
      if (galleryImage[i].classList.contains("active")) {
        activeGalleryImage = i;
        break;
      }
    }
    galleryImage[activeGalleryImage].classList.remove('active');
    galleryImage[activeGalleryImage - 1].classList.add('active');
    activeGalleryImage = activeGalleryImage - 1;
    if (activeGalleryImage == 0) {
      galleryBtnPrev.disabled = true;
      galleryBtnNext.disabled = false;
    }
    if (activeGalleryImage != 0 &  activeGalleryImage <countGalleryImages - 1) {
      galleryBtnNext.disabled = false;
      galleryBtnPrev.disabled = false;
    }
  });

  function toggleButtons () {
    if (galleryImage[0].classList.contains("active")) {
      galleryBtnPrev.disabled = true;
    }

    if (galleryImage[countGalleryImages - 1].classList.contains("active")) {
      galleryBtnNext.disabled = true;
    }
  };
}

// работа слайдера end