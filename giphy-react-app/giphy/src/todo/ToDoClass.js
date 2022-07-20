import React from 'react'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider'

const ListItem = ({key, item}) => (
    <li key={key}>{item}</li>
)

class ToDoClass extends React.Component {
    // Classes handle state as an object
    state = {
        toDoInput: '',
        toDoList: [
         'Cycle',
         'Read a book',
         'test my new beer',
        'get to Diamond in Apex Legends']
    }

    componentDidMount = () => {
        console.log('hello')
        console.log(this.state)
        function sayHello() {
            console.log('Hello')
        }
    }

    componentDidUpdate = () => {
        function tellMeIUpdated() {
            console.log('I Updated')
        }
    }

    addToDo = () => {
        if(!this.state.toDoInput) return;
        this.setState({toDoList: [...this.state.toDoList, this.state.toDoInput]})
    }

    handleChangeInput = (event) => {
        this.setState({toDoInput: event.target.value})
    }

    render() {
        return(
            <div>
                <h2>To DO APP Class</h2>
                <input value={this.state.toDoInput} onChange={this.handleChangeInput}/>
                <button onClick={this.addToDo}>Add to do</button>
                <ul>
                    {this.state.toDoList.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoClass
