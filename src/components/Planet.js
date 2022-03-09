import React from "react"

function Planet({planet}) {
    return(
        <tr>
            <td><span>{planet.name}</span></td>
            <td><span>{planet.climate}</span></td>
            <td><span>{planet.terrain}</span></td>
            <td><span>{planet.population}</span></td>
        </tr>
    );
}

export default Planet;