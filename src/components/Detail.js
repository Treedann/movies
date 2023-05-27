/* eslint-disable react/prop-types */
import React from "react";

function Detail({id, year, title, summary, poster}) {
    console.log(year);
    console.log({year});
    return (
        <div>
            <h1>{id}</h1>
            <p>{year}</p>
        </div>
    );
}

export default Detail;