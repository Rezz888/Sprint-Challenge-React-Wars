// Write your Character component here
import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
  } from "reactstrap";

export default function Character (props) {
   return (
    <Card color="darkgrey"className="card_">
    
        
        <CardImg top width="30%" className="cardImg" src={props.image} alt="img"/>
        
        <h1 className="charName">{props.name}</h1>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>gender: {props.gender}</h2>
            
    
    </Card>
   )
   
}



