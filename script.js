(function() {
    let point = localStorage.getItem('point');
    if (!point) {
        alert('Здравствуйте! Добавлена страница для первой карточки из каталога, а также подключен JavaScript!');
        localStorage.setItem('point', point);
    }
})();