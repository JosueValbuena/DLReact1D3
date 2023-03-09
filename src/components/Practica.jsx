import React from "react";

const Practica = ()=>{

    const Frutas = ["Manzanas", "Peras","Bananas","Naranjas",]
    const FrutasOrdenadas = Frutas.sort();

    return(
        <ul>
            {FrutasOrdenadas.map(fruta => <li key={fruta}>{fruta}</li>)}
        </ul>
    )
}

export default Practica;