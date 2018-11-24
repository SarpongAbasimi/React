/*
First, in the render() method,
have the component render an
input element, button element,
and ul element. When the input element changes,
it should trigger a handleChange() method.
Also, the input element should render the value of input that's in the component's state.
The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods.
The handleChange() method should update the input with what the user is typing.
The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.
Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.

*/


import React from 'react'

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
     handleChange = (event)=> this.setState({input:event.target.value})

     submitMessage =()=> {
        this.setState({messages:this.state.messages.concat(this.state.input)})
        this.setState({input:''})
        console.log(this.state.messages)

     /*
      The same task can be dome with this code
      this.setState(prevState => {
      return {messages: [...prevState.messages,prevState.input],
        input: ''
      }
    })
   */
     }

     render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
           <div>
               <input onChange={this.handleChange}  value={this.state.input}  type={'text'} ref={this.myRef}></input>
               <button onClick={this.submitMessage}>submit</button>
               {this.state.messages.map((ele)=> <li key={ele}>{ele}</li>)}
           </div>
          { /* change code above this line */ }
        </div>
      );
    }
  }

  export default DisplayMessages
