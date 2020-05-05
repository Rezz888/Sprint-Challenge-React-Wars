// Write your Character component here
import React from "react";

export default function Character (props) {
   return (
    <div className="card_container">
        <div className="img_container">
        <img className="cardImg" src={props.image} alt="img"></img>
        <h1 className="charName">{props.name}</h1>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>gender: {props.gender}</h2>
            
        </div>

    </div>
   )

   
}



