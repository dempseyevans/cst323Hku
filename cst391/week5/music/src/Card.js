import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
	return (
		<div>
		  <h1>Music I like</h1>
		  
		  <div className="card" style= {{width: '12rem'}}>
  			<img src={props.imageURL} alt="title" />
  			<div className="card-body">
    			<h5 className="card-title">{props.albumTitle}</h5>
    			<p className="card-text">{props.albumDescription}</p>
    			<button href="#" className="btn btn-primary">{props.buttonText}</button>
  			</div>
		  </div>
		</div>
	)
}

export default Card;
