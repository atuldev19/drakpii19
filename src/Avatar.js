import React from 'react';
import './Avatar.css';
import 'tachyons';
const Avatar = (props) => {
	return (
		<div className="avatarstyle ma4 bg-light-blue dib pa4 grow">
		<img src={props.site} alt="8nkit"/>
		<h1 className="tc">{props.name} </h1>
		<div><p> <h3> <center>{props.work} </center> </h3> </p></div>
		  <div class="tc mt3">
      <button class="white b pv2 ph3 bg-blue hover-bg-orange bn br-pill">
        Contact
      </button>
</div>
    </div> 
		)
}
export default Avatar;