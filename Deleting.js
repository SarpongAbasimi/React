
import   React  from 'react';
import  ReactDOM  from 'react-dom'

const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
},
];

const MyApp = class SayHello extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:list,
        }
        this.buttonEvent= this.buttonEvent.bind(this);
    }
    buttonEvent(elements){
        const filterElements=this.state.list.filter((myElements)=>myElements.objectID !== elements);
        this.setState({list:filterElements});
    }

    render() {
        return(
            <div>
                {this.state.list.map(elements=>
                    <div keys={elements.objectID}>
                    <span>{elements.author}</span>
                    <button onClick={()=>this.buttonEvent(elements.objectID)}>Dismiss</button>
                    </div>
                )}
            </div>

        );
    }

}

ReactDOM.render(<MyApp/>,document.getElementById("root"))
