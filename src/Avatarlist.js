import React from 'react';

const Avatarlist = (props) => {
	return (
		<div className="avatarstyle ma4 bg-light-blue dib pa3 grow tc shadow-4">
		<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="8nkit"/>
		<h1 className="tc">{props.name} </h1>
		<p> {props.work} </p>
		
    </div> 
		)
}
export default Avatarlist;