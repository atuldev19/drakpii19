import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


class Avatar extends Component{
	constructor(){
		super();
		this.state={
			name:"Welcome to 8nkit Inc."
		}
	}
	nameChange(){
		this.setState({
			name: " Leave a mail on enbact@gmail.com"
		})
	}

	render() {
		const avatarlistarray=[{
		id:1,
		name:"Ankit",
		work:"Developer"
	},
	{
		id:2,
		name:"Arun",
		work:"Tester"
	},
	{
		id:3,
		name:"Arvind",
		work:"Backend"
	},
	{
		id:4,
		name:"Arjun",
		work:"Frontend"
	}
]


		const arrayavtarcard = avatarlistarray.map((avatarcard,i)=>{
		return <Avatarlist key={i} id={avatarlistarray[i].name}  
						name={avatarlistarray[i].name}
						work={avatarlistarray[i].work}/>

	})
	return (
		<div className="mainpage">
		<h1>{this.state.name} </h1>
				{arrayavtarcard}
      <button onClick={ () => this.nameChange() } >
        Contact
      </button>
</div>
		)
	}
}

	

	



export default Avatar;