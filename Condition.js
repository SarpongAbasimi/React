import React from 'react';
import ReactDOM from 'react-dom'

class MyShowing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            listOfName: ['chris','trey','beyonce','kan','jis']
        }
    }

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
            {/* {this.state.listOfName.map((name) => <li key={name}>{name}</li> )}*/}
                {this.myConditon()}

            </ul>
            </div>
        );

    }
}


ReactDOM.render(<MyShowing/>,document.getElementById('root'))
