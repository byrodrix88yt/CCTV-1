const button = document.getElementById("cambiarFondo");
const audio1 = new Audio('sounds/pcstart.mp3');
const audio2 = new Audio('sounds/pcambience.mp3');
let reproduciendo = false;
let isButtonDisabled = false;
let fondoActual = "pc_off";
let clickCount = 0;

function alMenosUnBotonSecundarioVisible() {
    const botonesSecundarios = document.querySelectorAll(".boton-secundario");
    for (const boton of botonesSecundarios) {
        if (boton.style.display !== "none") {
            return true;
        }
    }
    return false;
}

button.addEventListener("click", function() {
    if (isButtonDisabled) {
        return;
    }

    clickCount++;

    if (!reproduciendo) {
        iniciarReproduccion();
    } else {
        detenerReproduccion();
    }

    cambiarFondo();
    habilitarBotonTemporalmente();

    if (clickCount % 2 === 0) {
        fondoActual = "pc_off";
        document.body.style.backgroundImage = "url('images/pc_off.png')";
        reloj.style.display = "none";
        
        const botonesSecundarios = document.querySelectorAll(".boton-secundario");
        botonesSecundarios.forEach(boton => {
            boton.style.display = "none";
        });
    }
    
    // Mostrar u ocultar el reloj según el estado de los botones secundarios
    const reloj = document.getElementById("reloj");
    reloj.style.display = alMenosUnBotonSecundarioVisible() ? "block" : "none";
});

function iniciarReproduccion() {
    audio1.currentTime = 0;
    audio1.play();
    audio2.volume = 0;
    audio2.loop = true;
    audio2.play();
    fadeAudioIn(audio2);
    reproduciendo = true;
}

function detenerReproduccion() {
    audio1.pause();
    fadeAudioOut(audio2);
    reproduciendo = false;
}

function cambiarFondo() {
    if (fondoActual === "pc_off") {
        document.body.style.backgroundImage = "url('images/pc_on.png')";
        fondoActual = "pc_on";
        setTimeout(function() {
            cambiarFondoPersonalizado();
        }, 6000);
    } else {
        cambiarFondoPersonalizado();
    }
}

function cambiarFondoPersonalizado() {

        const botonesSecundarios = document.querySelectorAll(".boton-secundario");
        botonesSecundarios.forEach(boton => {
            boton.style.display = "block";
        });
    document.body.style.backgroundImage = "url('images/pc_on2.png')";
    fondoActual = "otra_imagen1";
}

function habilitarBotonTemporalmente() {
    button.disabled = true;
    isButtonDisabled = true;
    setTimeout(function() {
        button.disabled = false;
        isButtonDisabled = false;
    }, 4000);
}

function fadeAudioIn(audioElement) {
    let volume = 0.1;
    const fadeInterval = setInterval(function() {
        if (volume >= 1.0) {
            clearInterval(fadeInterval);
        } else {
            volume += 0.1;
            audioElement.volume = volume;
        }
    }, 3000);
}

function fadeAudioOut(audioElement) {
    let volume = 1.0;
    let playbackRate = 1.0;
    const fadeInterval = setInterval(function() {
        if (volume <= 0.0) {
            clearInterval(fadeInterval);
            audioElement.pause();
        } else {
            volume -= 0.1;
            playbackRate += 0.1;
            audioElement.volume = volume;
            audioElement.playbackRate = playbackRate;
        }
    }, 100);
}
const boton2 = document.getElementById("boton2");

const paginaWeb2 = "https://byrodrix88yt.github.io/CCTV-1/camera15.html"; // Reemplaza con la URL deseada

boton2.addEventListener("click", function() {
    window.location.href = paginaWeb2;
});

const boton4 = document.getElementById("boton4");

const paginaWeb = "https://www.youtube.com/@Byrodrix_88YT"; // Reemplaza con la URL deseada

boton4.addEventListener("click", function() {
    window.location.href = paginaWeb;
});


function actualizarReloj() {
    const ahora = new Date();
    const opciones = { hourCycle: "h12", hour: "numeric", minute: "2-digit" };
    let horaActual = ahora.toLocaleTimeString(undefined, opciones);
    horaActual = horaActual.replace(/\./g, '').toUpperCase();

    document.getElementById("reloj").textContent = horaActual;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();
const botonSecundario = document.querySelectorAll(".boton-secundario");
const reloj = document.getElementById("reloj");


const botonWin = document.getElementById("win");
botonWin.addEventListener("click", function() {
    document.body.style.backgroundImage = "url('images/pc_on_win.png')";
});
botonWin.addEventListener("click", function() {
    if (fondoActual === "pc_on_win") {
        document.body.style.backgroundImage = "url('images/pc_on2.png')";
        fondoActual = "pc_on2";
    } else {
        document.body.style.backgroundImage = "url('images/pc_on_win.png')";
        fondoActual = "pc_on_win";
    }
});

// 3/10/23 abajo


document.addEventListener("DOMContentLoaded", function () {
    var boton1 = document.getElementById("boton1");
    var seguirBoton = document.getElementById("seguirBoton");
    var imagenMovible = document.getElementById("imagenMovible");
    var imageapp2 = document.getElementById("imageapp2");

    boton1.addEventListener("click", function () {
        imagenMovible.style.display = "block";
        seguirBoton.style.display = "block";
        imageapp2.style.display = "block";
        imagenMovible.classList.add("movible");

        var ventanaAncho = window.innerWidth;
        var ventanaAlto = window.innerHeight;
        var imagenAncho = imagenMovible.clientWidth;
        var imagenAlto = imagenMovible.clientHeight;

        var x = 50;
        var y = 0;
        var x2 = 1150;
        var y2 = 190;

        imagenMovible.style.left = x + "px";
        imagenMovible.style.top = y + "px";
        seguirBoton.style.left = x2 + x + "px";
        seguirBoton.style.top = y2 + y - 30 + "px";
        var isDragging = false;
        var offsetX, offsetY;

        var limiteIzquierdo = 0;
        var limiteSuperior = 0;
        var limiteDerecho = 80;
        var limiteInferior = 70;

        function actualizarLimites() {
            ventanaAncho = window.innerWidth;
            ventanaAlto = window.innerHeight;
            var limiteIzquierdo = (ventanaAncho + imagenAncho) / 2; // Centrar horizontalmente y reducir el límite izquierdo
             limiteSuperior = (ventanaAlto + imagenAlto) / 2; // Centrar verticalmente y reducir el límite superior
             limiteDerecho = limiteIzquierdo + imagenAncho; // Reducir el límite derecho
             limiteInferior = limiteSuperior + imagenAlto; // Reducir el límite inferior

            console.log("limiteIzquierdo:", limiteIzquierdo);
            console.log("limiteSuperior:", limiteSuperior);
            console.log("limiteDerecho:", limiteDerecho);
            console.log("limiteInferior:", limiteInferior);
        }

        window.addEventListener("resize", actualizarLimites);

        var isDragging = false;
        var offsetX, offsetY;

        imagenMovible.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - imagenMovible.getBoundingClientRect().left;
            offsetY = e.clientY - imagenMovible.getBoundingClientRect().top;
            imagenMovible.style.cursor = "grabbing";
            e.preventDefault();
        });

        document.addEventListener("mousemove", function (e) {
            if (isDragging) {
                var x = e.clientX - offsetX;
                var y = e.clientY - offsetY;
                var x2 = 1150;
                var y2 = 190;

                x = Math.min(Math.max(x, limiteIzquierdo), limiteDerecho);
                y = Math.min(Math.max(y, limiteSuperior), limiteInferior);

                imagenMovible.style.left = x + "px";
                imagenMovible.style.top = y + "px";
                seguirBoton.style.left = x2 + x + "px";
                seguirBoton.style.top = y2 + y - 30 + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            if (isDragging) {
                isDragging = false;
                imagenMovible.style.cursor = "grab";
            }
        });

        seguirBoton.addEventListener("click", function () {
            seguirBoton.style.display = "none";
            imagenMovible.style.display = "none";
            imageapp2.style.display = "none";
            imagenMovible.classList.remove("movible");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var boton3 = document.getElementById("boton3");
    var seguirBoton2 = document.getElementById("seguirBoton2");
    var fe_download_goback = document.getElementById("fe_download_goback");
    var fe_a1_goback = document.getElementById("fe_a1_goback");
    var fe_downloads = document.getElementById("fe_downloads");
    var fe_a1_files = document.getElementById("fe_a1_files");
    var a1_files = document.getElementById("a1_files");
    var a2_files = document.getElementById("a2_files");
    var imagenMovible2 = document.getElementById("imagenMovible2")
    var imageapp1 = document.getElementById("imageapp1");
    var imagendownloads = document.getElementById("imagendownloads");
    var fe_searchbar = document.getElementById("searchbar");
    var fe_a1_password = document.getElementById("a1_password");
    var fe_a1_protected_file = document.getElementById("a1_protected_file");
    var fe_a1_protected_file_wrong = document.getElementById("a1_protected_file_wrong");
    var close_protected_file = document.getElementById("close_protected_file");

    fe_downloads.addEventListener("click", function () {
            imagendownloads.classList.add("movible2");
            imagenMovible2.style.display = "none";
            fe_searchbar.style.display = "block";
            imagendownloads.style.display = "block";
            fe_download_goback.style.display = "block";
            fe_downloads.style.display = "none";
            a1_files.style.display = "none";
            a2_files.style.display = "none";
    });

    a1_files.addEventListener("click", function () {
            fe_a1_password.style.display = "block";
            fe_a1_protected_file_wrong.style.display = "none";
            fe_a1_protected_file.style.display = "block";
            close_protected_file.style.display = "block";
            close_protected_file.style.width = "13px";
            close_protected_file.style.height = "13px";
    });
    
    close_protected_file.addEventListener("click", function () {
            fe_a1_password.style.display = "none";
            fe_a1_protected_file_wrong.style.display = "none";
            fe_a1_protected_file.style.display = "none";
            close_protected_file.style.display = "none";
    });

    fe_download_goback.addEventListener("click", function () {
        imagenMovible2.style.display = "block";
        fe_download_goback.style.display = "none";
        fe_searchbar.style.display = "block";
        seguirBoton2.style.display = "block";
        fe_downloads.style.display = "block";
        a1_files.style.display = "block";
        a2_files.style.display = "block";
        imageapp1.style.display = "block";
        imagenMovible2.classList.add("movible2");
        imagendownloads.classList.add("movible2");
        imagendownloads.style.display = "none";
        imagenMovible2.classList.remove("aparecer");
    });

    fe_a1_goback.addEventListener("click", function () {
        imagenMovible2.style.display = "block";
        fe_download_goback.style.display = "none";
        fe_a1_goback.style.display = "none";
        fe_searchbar.style.display = "block";
        seguirBoton2.style.display = "block";
        fe_downloads.style.display = "block";
        fe_a1_files.style.display = "none";
        a1_files.style.display = "block";
        a2_files.style.display = "block";
        imageapp1.style.display = "block";
        imagenMovible2.classList.add("movible2");
        imagendownloads.classList.add("movible2");
        imagendownloads.style.display = "none";
        imagenMovible2.classList.remove("aparecer");
    });

    boton3.addEventListener("click", function () {
        imagenMovible2.style.display = "block";
        fe_download_goback.style.display = "none";
        fe_a1_goback.style.display = "none";
        fe_searchbar.style.display = "block";
        seguirBoton2.style.display = "block";
        fe_downloads.style.display = "block";
        a1_files.style.display = "block";
        a2_files.style.display = "block";
        imageapp1.style.display = "block";
        imagenMovible2.classList.add("movible2");
        imagendownloads.classList.add("movible2");
        fe_a1_files.classList.add("movible2");
        fe_a1_files.style.display = "none";
        imagenMovible2.classList.add("aparecer");
        imagenMovible2.classList.remove("desaparecer");
        imagenMovible2.addEventListener("animationend", function () {
            imagenMovible2.style.display = "block";
            fe_downloads.style.display = "block";
            fe_searchbar.style.display = "block";
            a1_files.style.display = "block";
            a2_files.style.display = "block";
        });

        var ventanaAncho = window.innerWidth;
        var ventanaAlto = window.innerHeight;
        var imagenAncho = imagenMovible2.clientWidth;
        var imagenAlto = imagenMovible2.clientHeight;

        var x = 50;
        var y = 0;
        var x2 = 1150;
        var y2 = 190;
        var x3 = 837;
        var y3 = 232;
        var x4 = 910;
        var x5 = 983;
        var xg6 = 825;
        var yg6 = 223;
        var xs7 = 670;
        var ys7 = 212;

        imagenMovible2.style.left = x + "px";
        imagenMovible2.style.top = y + "px";
        imagendownloads.style.left = x + "px";
        imagendownloads.style.top = y + "px";
        fe_a1_files.style.left = x + "px";
        fe_a1_files.style.top = y + "px";
        seguirBoton2.style.left = x2 + x + "px";
        seguirBoton2.style.top = y2 + y - 30 + "px";
        fe_download_goback.style.left = xg6 + x + "px";
        fe_download_goback.style.top = yg6 + y - 30 + "px";
        fe_a1_goback.style.left = xg6 + x + "px";
        fe_a1_goback.style.top = yg6 + y - 30 + "px";
        fe_searchbar.style.left = xs7 + x + "px";
        fe_searchbar.style.top = ys7 + y - 30 + "px";
        fe_downloads.style.left = x3 + x + "px";
        fe_downloads.style.top = y3 + y - 30 + "px";
        a1_files.style.left = x4 + x + "px";
        a1_files.style.top = y3 + y - 30 + "px";
        a2_files.style.left = x5 + x + "px";
        a2_files.style.top = y3 + y - 30 + "px";
        var isDragging = false;
        var offsetX, offsetY;

        var limiteIzquierdo = 0;
        var limiteSuperior = 0;
        var limiteDerecho = 80;
        var limiteInferior = 70;

        function actualizarLimites() {
            ventanaAncho = window.innerWidth;
            ventanaAlto = window.innerHeight;
            var limiteIzquierdo = (ventanaAncho + imagenAncho) / 2;
             limiteSuperior = (ventanaAlto + imagenAlto) / 2;
             limiteDerecho = limiteIzquierdo + imagenAncho;
             limiteInferior = limiteSuperior + imagenAlto;

            console.log("limiteIzquierdo:", limiteIzquierdo);
            console.log("limiteSuperior:", limiteSuperior);
            console.log("limiteDerecho:", limiteDerecho);
            console.log("limiteInferior:", limiteInferior);
        }

        window.addEventListener("resize", actualizarLimites);

        var isDragging = false;
        var offsetX, offsetY;

        imagenMovible2.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - imagenMovible2.getBoundingClientRect().left;
            offsetY = e.clientY - imagenMovible2.getBoundingClientRect().top;
            imagenMovible2.style.cursor = "default";
            e.preventDefault();
        });

        imagendownloads.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - imagendownloads.getBoundingClientRect().left;
            offsetY = e.clientY - imagendownloads.getBoundingClientRect().top;
            imagendownloads.style.cursor = "default";
            e.preventDefault();
        });

        fe_a1_files.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - fe_a1_files.getBoundingClientRect().left;
            offsetY = e.clientY - fe_a1_files.getBoundingClientRect().top;
            fe_a1_files.style.cursor = "default";
            e.preventDefault();
        });

        document.addEventListener("mousemove", function (e) {
            if (isDragging) {
                var x = e.clientX - offsetX;
                var y = e.clientY - offsetY;
                var x2 = 1150;
                var y2 = 190;
                var x3 = 837;
                var y3 = 232;
                var x4 = 910;
                var x5 = 983;
                var xg6 = 825;
                var yg6 = 223;
                var xs7 = 670;
                var ys7 = 212;

                x = Math.min(Math.max(x, limiteIzquierdo), limiteDerecho);
                y = Math.min(Math.max(y, limiteSuperior), limiteInferior);

                imagenMovible2.style.left = x + "px";
                imagenMovible2.style.top = y + "px";
                imagendownloads.style.left = x + "px";
                imagendownloads.style.top = y + "px";
                fe_a1_files.style.left = x + "px";
                fe_a1_files.style.top = y + "px";
                seguirBoton2.style.left = x2 + x + "px";
                seguirBoton2.style.top = y2 + y - 30 + "px";
                fe_download_goback.style.left = xg6 + x + "px";
                fe_download_goback.style.top = yg6 + y - 30 + "px";
                fe_a1_goback.style.left = xg6 + x + "px";
                fe_a1_goback.style.top = yg6 + y - 30 + "px";
                fe_searchbar.style.left = xs7 + x + "px";
                fe_searchbar.style.top = ys7 + y - 30 + "px";
                fe_downloads.style.left = x3 + x + "px";
                fe_downloads.style.top = y3 + y - 30 + "px";
                a1_files.style.left = x4 + x + "px";
                a1_files.style.top = y3 + y - 30 + "px";
                a2_files.style.left = x5 + x + "px";
                a2_files.style.top = y3 + y - 30 + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            if (isDragging) {
                isDragging = false;
                imagenMovible2.style.cursor = "default";
                imagendownloads.style.cursor = "default";
                fe_a1_files.style.cursor = "default";
            }
        });

        seguirBoton2.addEventListener("click", function () {
            seguirBoton2.style.display = "none";
            imageapp1.style.display = "none";
            imagenMovible2.classList.add("desaparecer");
            imagenMovible2.classList.remove("aparecer");
            imagenMovible2.classList.remove("movible2");
            fe_downloads.style.display = "none";
            a1_files.style.display = "none";
            a2_files.style.display = "none";
            imagenMovible2.style.display = "none";
            imagendownloads.style.display = "none";
            fe_a1_files.style.display = "none";
            fe_searchbar.style.display = "none";
            fe_download_goback.style.display = "none";
            fe_a1_goback.style.display = "none";
            imagenMovible2.addEventListener("animationend", function () {
                imagenMovible2.style.display = "none";
                imagendownloads.style.display = "none";
                fe_a1_files.style.display = "none";
                fe_downloads.style.display = "none";
                a1_files.style.display = "none";
                a2_files.style.display = "none";
                fe_searchbar.style.display = "none";
                fe_download_goback.style.display = "none";
                fe_a1_goback.style.display = "none";
            });
        });
    });

    var a1_password = document.getElementById("a1_password");
var mensajeLimite = document.getElementById("mensajeLimite");

a1_password.addEventListener("input", function () {
    var textoIngresado = a1_password.value;
    var caracteresRestantes = 26 - textoIngresado.length;
    
    if (caracteresRestantes < 0) {
        a1_password.value = textoIngresado.slice(0, 26);
        caracteresRestantes = 0;
    }
    var input = document.getElementById("input");

    input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
    });

        mensajeLimite.textContent = "Caracteres restantes: " + caracteresRestantes;
    });

    a1_password.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        
        var mensajeIngresado = a1_password.value.trim().toLowerCase();

        if (mensajeIngresado === "argentum-mens") { 
          mostrarImagen();
        }

        if (mensajeIngresado !== "argentum-mens") {
          mostrarImagen2();
        }
      }
    });

    function mostrarImagen() {
            fe_a1_password.style.display = "none";
            fe_a1_protected_file_wrong.style.display = "none";
            fe_a1_protected_file.style.display = "none";
            close_protected_file.style.display = "none";
            fe_a1_files.style.display = "block";
            fe_a1_goback.style.display = "block";
            fe_downloads.style.display = "none";
            a1_files.style.display = "none";
            a2_files.style.display = "none";
            imagenMovible2.style.display = "none";
    }
    function mostrarImagen2() {
            fe_a1_protected_file.style.display = "none";
            fe_a1_protected_file_wrong.style.display = "block";
    }
});