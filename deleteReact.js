import React from 'react'

{/* A JSON object with some information*/}
const list =
 [
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

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list,
        }
    }



    onDismiss=(objectID)=> {
        const upDateList = this.state.list.filter((item)=> item.objectID != objectID);
        this.setState({ list: upDateList });
    }
    /* Lopping through the JSon object to rendering them to the view */
    /* Each of the element was given an item ID */
    /* A dismiss button is created to delete and object from the list*/
    render(){
        return(
            <div>
                {this.state.list.map((item)=><div key={item.objectID}>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>
                    {item.author}
                </span>
                <span>
                    {item.num_comments}
                </span>
                <span>
                    {item.points}
                </span>
                <span>
                    <button onClick={()=>this.onDismiss(item.objectID)} type='button'>Dismiss</button>
                </span>

                </div>)}
            </div>
        );
    }
}


export default Hello
