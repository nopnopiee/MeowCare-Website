import React from "react";
import axios from "axios";

const awd = () => {
    axios.get("https://api.quotable.io/random")
    .then ((res) => {
        console.log(res);
    })
    .catch ((err) => {
        console.log(err);
    });
};
const Test = () => {
    return <div>
        <button onClick={awd}>Get data</button>
    </div>;
};

export default Test;