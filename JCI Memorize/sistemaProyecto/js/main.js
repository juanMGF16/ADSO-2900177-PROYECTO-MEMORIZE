document.addEventListener("DOMContentLoaded", function () {


    let btn1 = document.getElementById("btn1");

    let btn2 = document.getElementById("btn2");

    let btn3 = document.getElementById("btn3");

    let btn4 = document.getElementById("btn4");

    let ocultar1 = document.getElementById('ocultar1')
    let ocultar2 = document.getElementById('ocultar2')
    let ocultar3 = document.getElementById('ocultar3')

    ocultar1.style.display = 'none';
    ocultar2.style.display = 'none';
    ocultar3.style.display = 'none';

    // capturamos los datos que necesitamos y mostramos  
    btn1.addEventListener("click", function () {
        let ocultar = document.getElementById('ocultar');
        let ocultar1 = document.getElementById('ocultar1');
      
    
        console.log('presionado');

        ocultar.style.display = 'block';
        ocultar1.style.display = 'none';

    });
    // capturamos los datos que necesitamos y mostramos
    btn2.addEventListener("click", function () {
        let ocultar1 = document.getElementById('ocultar1');
        console.log('presionado');

        let ocultar = document.getElementById('ocultar');
        ocultar.style.display = 'none';

        ocultar1.style.display = 'block';
     
    });

    btn3.addEventListener("click", function () {
        let ocultar2 = document.getElementById('ocultar2');
        console.log('presionado');

        let ocultar1 = document.getElementById('ocultar1');
        ocultar1.style.display = 'none';

        ocultar2.style.display = 'block';
    });

    btn4.addEventListener("click", function () {
        let ocultar3 = document.getElementById('ocultar3');
        console.log('presionado');

        let ocultar2 = document.getElementById('ocultar2');
        ocultar2.style.display = 'none';

        ocultar3.style.display = 'block';
    });
});
