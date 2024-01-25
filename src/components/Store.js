import React from 'react'

function Store({name, season, episode}) {
    return (
    <tr>
        <td className="row-name">
            <span>{name}</span>
        </td>
        <td>
            <a href="" target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{season}</span>
        </td>
        <td>
            <span>{episode}</span>
        </td>
        <td>
            <button>{false ? "Watched" : "Not Watched" }</button>
        </td>
    </tr>
    );
}

export default Store