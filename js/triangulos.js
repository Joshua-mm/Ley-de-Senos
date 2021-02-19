'use strict'

window.addEventListener('load', () => {

    var div_boton_generar = document.querySelector(".not-generated");
    var boton_generar = document.querySelector("#generar_triangulo_boton");
    var div_triangulo = document.querySelector(".triangulo_izquierda");
    var options_settings = document.querySelector(".options_settings");
    var options_settings2 = document.querySelector(".opt_set_2");
    var form_aal = document.querySelector("#form_aal");
    var form_lla = document.querySelector("#form_lla");
    var dunno = document.querySelector("#form");
    var err_dunno = document.querySelector("#error_dunno");
    var show_result = document.querySelector(".show_result");

    function calcularTrianguloAAL(angulo1, angulo2, lado, tipo_resultado) {

        if (angulo1.length <= 0 || isNaN(angulo1) || angulo2.length <= 0 || isNaN(angulo2) || lado.length <= 0 || isNaN(lado)) {
            alert("Ha habido un error");
        }
        let lado2 = ((lado/Math.sin(Math.PI / 180 * angulo1))*(Math.sin(Math.PI / 180 * angulo2))); 
        let angulo3 = ((180-angulo1-angulo2));
        let lado3 = ((lado2/Math.sin(Math.PI / 180 * angulo2)) * (Math.sin(Math.PI / 180 * angulo3)));
        return [lado2.toFixed(2), angulo3.toFixed(2), lado3.toFixed(2)];
    }

    function calcularTrianguloLLA(angulo1, lado1, lado2) {

        Number(angulo1);
        Number(lado1);
        Number(lado2);

        if (angulo1.length <= 0 || isNaN(angulo1) || lado1.length <= 0 || isNaN(lado1) || lado2.length <= 0 || isNaN(lado2)) {
            alert("Ha habido un error" + typeof(lado1));
            return false;
        }

        let angulo2_rad = (Math.asin((lado2/(lado1 / Math.sin(Math.PI / 180 * angulo1)))));
        let angulo2 = (180 * angulo2_rad /Math.PI);
        let angulo3 = (180-angulo1-angulo2);
        let lado3 = ((lado2/Math.sin(Math.PI / 180 * angulo2)) * (Math.sin(Math.PI / 180 * angulo3)));
        return [angulo2.toFixed(2), angulo3.toFixed(2), lado3.toFixed(2)];
    }

    boton_generar.addEventListener("click", ()=> {

        // Capturar output
        var selects_selected_output = document.querySelector("#opciones_select");
        var selected = selects_selected_output.options[selects_selected_output.selectedIndex].text;

        //Capturar datos
        var selects_selected_datos = document.querySelector(".datos_obt");
        var selected1 = selects_selected_datos.options[selects_selected_datos.selectedIndex].text;

        // Opciones seleccionadas
        var show_selected = document.querySelector("#opts");
        var options_gotten = document.querySelector(".options_gotten");

        // Obtener valores de los input
        var angulo1 = document.querySelector("#angulo1");
        var angulo2 = document.querySelector("#angulo2");
        var lado1 = document.querySelector("#lado1");
        var lado2 = document.querySelector("#lado2");

        var angulo1_aal = document.querySelector("#angulo1_aal");
        var angulo2_aal = document.querySelector("#angulo2_aal");
        var lado1_aal = document.querySelector("#lado1_aal");

        var angulo1_lla = document.querySelector("#angulo1_lla");
        var lado1_lla = document.querySelector("#lado1_lla");
        var lado2_lla = document.querySelector("#lado2_lla");

        // Errores 
        var error_angulo1_aal = document.querySelector("#error_angulo1_aal");
        var error_angulo2_aal = document.querySelector("#error_angulo2_aal");
        var error_lado1_aal = document.querySelector("#error_lado1_aal");
        
        var error_angulo1_lla = document.querySelector("#error_angulo1_lla")
        var error_lado1_lla = document.querySelector("#error_lado1_lla")
        var error_lado2_lla = document.querySelector("#error_lado2_lla");

        var error_angulo1 = document.querySelector("#error_angulo1");
        var error_angulo2 = document.querySelector("#error_angulo2");
        var error_lado1 = document.querySelector("#error_lado1");
        var error_lado2 = document.querySelector("#error_lado2");

        var boton_submit_normal = document.querySelector(".boton_normal");

        /*var calcular1 = document.querySelector(".calcular_triangulo1");
        var calcular2 = document.querySelector(".calcular_triangulo2");
        var calcular3 = document.querySelector(".calcular_triangulo3");*/


        boton_generar.style.display="none";
        div_triangulo.style.display="block"
        options_settings.style.display="none"
        options_settings2.style.display="none"
        form_aal.style.display="none"
        form_lla.style.display="none"
        dunno.style.display="none"
        options_gotten.style.display="block"
        show_selected.innerHTML = selected + ", " + selected1;

        // Mostrar forms
        if(selected1 === "LLA") {
            form_lla.style.display="block";
        } else if(selected1 === "AAL") {
            form_aal.style.display="block";
        }else if(selected1 === "No lo sé") {
            dunno.style.display="block";
        }else {
            dunno.style.display="block";
            alert("XDDD")
        }

        // Validar Forms
        form_aal.addEventListener("submit", ()=> {

            let A_aal = document.querySelector("#A");
            let B_aal = document.querySelector("#B");
            let C_aal = document.querySelector("#C");
            let a_aal = document.querySelector("#a");
            let b_aal = document.querySelector("#b");
            let c_aal = document.querySelector("#c");

            if(angulo1_aal.value.trim() <= 0 || angulo1_aal.value > 180 || isNaN(angulo1_aal.value)) {
                error_angulo1_aal.innerHTML = "El ángulo es incorrecto.";
                return false;
            } else {
                error_angulo1_aal.style.display="none";
            }
            if(angulo2_aal.value.trim() <= 0 || angulo2_aal.value > 180 || isNaN(angulo2_aal.value)) {
                error_angulo2_aal.innerHTML = "El ángulo es incorrecto."
                return false;
            } else {
                error_angulo2_aal.style.display="none"    
            }
            if(lado1_aal.value.trim() <= 0 || isNaN(lado1_aal.value)) {
                error_lado1_aal.innerHTML = "El lado es incorrecto."
                return false;
            } else {
                error_lado1_aal.style.display="none"
            }

            const [lado2, angulo3, lado3] = calcularTrianguloAAL(angulo1_aal.value, angulo2_aal.value, lado1_aal.value);

            show_result.style.display="flex";
            A_aal.innerHTML+=angulo1_aal.value;
            B_aal.innerHTML+=angulo2_aal.value;
            C_aal.innerHTML+=angulo3;
            a_aal.innerHTML+=lado1_aal.value;
            b_aal.innerHTML+=lado2;
            c_aal.innerHTML+=lado3;
            angulo1_aal.disabled = true;
            angulo2_aal.disabled = true;
            lado1_aal.disabled = true;
        });

        form_lla.addEventListener("submit", ()=> {

            let A_lla = document.querySelector("#A");
            let B_lla = document.querySelector("#B");
            let C_lla = document.querySelector("#C");
            let a_lla = document.querySelector("#a");
            let b_lla = document.querySelector("#b");
            let c_lla = document.querySelector("#c");   

            if(angulo1_lla.value.trim() <= 0 || angulo1_lla.value > 180 || isNaN(angulo1_lla.value)) {
                error_angulo1_lla.innerHTML = "El ángulo es incorrecto.";
                return false;
            } else {
                error_angulo1_lla.style.display="none";
            }
            if(lado1_lla.value.trim() <= 0 || isNaN(lado1_lla.value)) {
                error_lado1_lla.innerHTML = "El lado es incorrecto."
                return false;
            } else {
                error_lado1_lla.style.display="none"
            }
            if(lado2_lla.value.trim() <= 0 || isNaN(lado2_lla.value)) {
                error_lado2_lla.innerHTML = "El lado es incorrecto."
                return false;
            } else {
                error_lado2_lla.style.display="none"
            }

            const [angulo2, angulo3, lado3] = calcularTrianguloLLA(angulo1_lla.value, lado1_lla.value, lado2_lla.value);

            show_result.style.display="flex";
            A_lla.innerHTML+=angulo1_lla.value;
            B_lla.innerHTML+=angulo2;
            C_lla.innerHTML+=angulo3;
            a_lla.innerHTML+=lado1_lla.value;
            b_lla.innerHTML+=lado2_lla.value;
            c_lla.innerHTML+=lado3;
            angulo1_lla.disabled = true;
            lado2_lla.disabled = true;
            lado1_lla.disabled = true;
        });
        dunno.addEventListener("submit", ()=> {

            let contador = 0;
            if(angulo1.value.trim() <= 0 || isNaN(angulo1.value)) {
                contador+=1;
            }
            if(angulo2.value.trim() <= 0 || isNaN(angulo2.value)) {
                contador+=1;
            }
            if(lado1.value.trim() <= 0 || isNaN(lado1.value)) {
                contador+=1;
            }
            if(lado2.value.trim() <= 0 || isNaN(lado2.value)) {
                contador+=1;
            }

            if (contador > 1) {
                err_dunno.innerHTML = "Los parametros son incorrectos"
                return false;
            }else {
                err_dunno.style.display="none";
            }
        });
    });
});