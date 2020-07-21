function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


$(document).ready(function () {
    $('.header__content_menu').click(function (event) {
        $('.header__content_menu').toggleClass('active');
        $('.header__content_navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


function f() {
    let price_year = document.querySelector('#price_year'),
        price_moth = document.querySelector('#price_moth');


    let arrPrice = ['3', '10', '15', '30'];
    let moth = 12;

    for (let i = 0; i < arrPrice.length; i++) {
        let price = document.querySelector('.price_server_' + arrPrice[i]);

        let getPrice = Number(price.innerHTML);

        price_year.addEventListener('click', function(event){
            let getInner = price.innerHTML *= moth;
        }, {once: true});
        
        price_moth.addEventListener('click', function(event){
            let getInner = price.innerHTML /= moth;
        }, {once: true});
        
    };
    
};
            
f();

