import React from 'react'

function Store({store}) {
    return (
    <tr>
        <td className="row-name">
            <span>NAME</span>
        </td>
        <td>
            <a href="" target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>SEASON</span>
        </td>
        <td>
            <span>EPISODE</span>
        </td>
        <td>
            <button>{false ? "Watched" : "Not Watched" }</button>
        </td>
    </tr>
    );
}

export default Store