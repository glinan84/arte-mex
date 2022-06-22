// Ejercicios para componentes. Clase 20.junio



const arr = [1,2,3];

const[cero,uno,dos] = arr;

const obj = {a:1,b:2,c:3};   //Sirve para extraer variables para un objeto.
/* const a = obj.a
const b = obj.b
const c = obj.c */
const name = "Luis"
const lastname = "Pérez"
const objeto2 = {
    name,
    lastname: lastname
}


//Ejemplo de renderización de código

/*
import React from "react";

export const MiComponente = ({ miNumero }) => {
    
    return (
        <>
            <div>MiComponente</div>
            <div>{miNumero}</div>
        </>
    )
}
*/

// CLASE COMPONENTES II Botones para clic  CÓMO HACER UN EVENTO EN REACT
/*
import React from "react";

export const MiComponente = ({ numero }) => {
    
    const numero = 1
    const handlerClick = () => {
        console.log("hacer click");
    }

    return (
        <>
            <div>MiComponente</div>
            <div>{numero}</div>
            <button onClick = {handlerClick}>Click me</button>
        </>
    )
}

*/


//

import React from "react";

export const MiComponente = ({ numero }) => {
    
    const numero = 1
    const handlerClick = () => {
        console.log("hacer click");
    }

    return (
        <>
            <div>MiComponente</div>
            <div>{numero}</div>
            <button onClick = {handlerClick}>Click me</button>
        </>
    )
}

function ItemCount ({stock, initial, onAdd}) {

}