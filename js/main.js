var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
});

var button = document.getElementById("btn-form",);
button.addEventListener('click', function() {
    swal("Отправлено!!!", "", "success");
});