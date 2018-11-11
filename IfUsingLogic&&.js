import React from 'react';
import ReactDOM from 'react-dom'

class MyShowing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            listOfName: []
        }
    }
    //conditinal statements can be made in react by using the normal if/else statements
    //a method called myCondition has been defined and this returns something when a condition is met
    myConditon(){
        if (this.state.listOfName.length===0) return (<p style={{backgroundColor:"rgb(255,35,78)"}}>Hey your list is Empty</p>);
        return (this.state.listOfName.map((name) => <li key={name}>{name}</li> ));
    }

    render(){
        const divStyle={
            backgroundColor:' #CCD6DD',
            width:'50%',
            height:'auto',
            borderRadius:5,
            textAlign:"center"
        }
        return(
            <div style={divStyle}>
            <ul>
            {/* Another  means of performing conditions is by usning the logic operator && */}
            {this.state.listOfName.length === 0 && "nope"}
            {this.myConditon()}
            </ul>
            </div>
        );

    }
}


ReactDOM.render(<MyShowing/>,document.getElementById('root'))
