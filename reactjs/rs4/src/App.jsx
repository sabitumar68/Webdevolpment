import React from 'react';

import ReactDOM from 'react-dom';

class Student extends React.Component {

constructor(props){

super(props)

this.state = {

name: "Reena",

grade: 5,

favorite_color: "green",

favorite_subject: "Math"

};

}

render() {

return(

<div>

<h1>Student Details</h1>

<p>My name is {this.state.name}</p>

<p>I am in grade {this.state.grade}</p>

<p>My favorite colour is {this.state.favorite_color}</p>

<p>My favorite subject is {this.state.favorite_subject}</p>

</div>

);

}

}

ReactDOM.render(<Student />, document.getElementById('root'));
