import   React  from 'react';
import  ReactDOM  from 'react-dom'

const SayName =(props)=> {
    return (
    <h1>Hey are you working {props.name}</h1>);
}

const MyApp = class SayHello extends React.Component{
    render(){
        return(
        <div className='ui ustackable items'>
        Hello,friends! I am a basic React Component.
        <SayName name="React"/>
        </div>
        );
    }
}

ReactDOM.render(<MyApp/>,document.getElementById("root"))