
const url = "http://LOCALHOST:3000/api/pedido";

const formArticulo = document.querySelector("form");

const userped = document.getElementById("USERPED");
const emausped = document.getElementById("EMAUSPED");
const celusped = document.getElementById("CELUSPED");
const foodped = document.getElementById("FOODPED");
const msgped = document.getElementById("MSGPED");

let option = '';

btnCrear.addEventListener(
    "click", () => {
        console.log("boton activado");
        option = 'crear';
    }
);

formArticulo.addEventListener(
    'submit',(e) => {
        e.preventDefault();
            if(option == 'crear'){
                if( userped.value == "" || emausped.value == ""|| celusped.value == ""|| foodped.value== ""|| msgped.value==""){
                    alert("Asegurese de que todo los rubros esten completos");
                } else {
                    console.log("Todos los campos estan completos");
                    fetch(
                        url, 
                        {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    USERPED: USERPED.value,
                                    EMAUSPED: EMAUSPED.value,
                                    CELUSPED: CELUSPED.value,
                                    FOODPED: FOODPED.value,
                                    MSGPED: MSGPED.value
                                }
                            )
                        }
                    ).then(
                        response => response.json()
                    ).then(
                        response => location.reload()
                    );
                }
            }
    }
);