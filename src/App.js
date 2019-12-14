import React, {Component} from 'react';
import './App.css';
import ShowList from "./Component/ShowList";

class App extends Component {

    state = {
        todoList: [],
        isShow: false,
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('todolist'))
        if (data === null) {
            return;
        }

        this.setState({todoList: data})
    }


    addNewRow = () => {
        this.setState({isShow: true}, () => {
            this.todoInput.focus();
            this.todoInput.value="";
        });
    };


    onAddList = (event) => {
        if (event.key === 'Enter') {
            const todoInput = this.todoInput.value;
            const data = JSON.parse(localStorage.getItem('todolist'));
            if (data === null) {
                let items = this.state.todoList
                items.push(todoInput)
                localStorage.setItem('todolist', JSON.stringify(items));
                this.setState({todoList: items})
            } else {
                data.push(todoInput);
                localStorage.setItem('todolist', JSON.stringify(data));
                this.setState({todoList: data});
            }
            this.setState({isShow: false})
            this.addNewRow();
        }
    };

    render() {
        let row = <div className='showList'>
            <i className="fa fa-circle-o fa-sm" aria-hidden="true" style={{padding: "5px", color: "grey"}}/>
                        <input type="text" className="input"
                               ref={todoInput => this.todoInput = todoInput}
                               onKeyPress={this.onAddList}
                        />
                  </div>;
        let showRow = this.state.isShow === true ? row : ' ';
        let list = this.state.todoList.length > 0 ? <ShowList todoList={this.state.todoList}/> : ' ';
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-title">
                        Todo
                    </div>
                    <div className="AddButton">
                        <i className="fa fa-plus-square fa-2x" aria-hidden="true" onClick={this.addNewRow}/>
                    </div>
                </div>
                <div className="List">
                    {list}
                    {showRow}
                </div>
            </div>
        )
    }
}

export default App;
