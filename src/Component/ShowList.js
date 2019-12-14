import  React,{ Component} from "react";
import "./ShowList.css";

class showList extends Component {
    render() {
        let list = this.props.todoList
        return (
            <div>
                {list.map((item, index) => (
                    <div className="showList" key={index}>
                        <div className="listItem">
                            <i className="fa fa-circle-o fa-sm" aria-hidden="true" style={{padding: "5px", color: "grey"}}/>
                            <span style={{color:"white"}}>
                                 {item}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default showList;