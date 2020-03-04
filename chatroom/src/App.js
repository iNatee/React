import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';


export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            messages: [""],
            time: "",
            newItemText: ""
        }
    }

    updateNewTextValue = (event) => {
        this.setState({newItemText: event.target.value})
    };

    getTime = () => {
        let secs = (new Date().getSeconds());
        let mins = (new Date().getMinutes());
        let hrs = (new Date().getHours());
        if (secs < 10) {
            return hrs + " : " + mins + " : " + "0" + secs;
        } else {
            return hrs + " : " + mins + " : " + secs;
        }
    };

    isAuth = () => {
        if (this.state.userName === "Anon") {
            return false;
        } else {
            return true;
        }
    };

    authAccount = () => {
        let userId = ["James", "Byron", "Caitlin", "Nathan"];
        let password = ["1234", "0987", "2000", "1999"];

        if (this.isAuth()) {
            alert("Already signed in. Please sign out to access a different account")
        } else {

            let userIn = prompt("Enter your username");

            switch (userIn) {

                case userId[0]:
                    userIn = prompt("Enter your password");

                    if (userIn === password[0]) {
                        this.setState({
                            userName: this.state.userName = userId[0]
                        })
                    } else {
                        alert("Wrong password. Try again");
                    }
                    break;
                case userId[1]:
                    userIn = prompt("Enter your password");

                    if (userIn === password[1]) {
                        this.setState({
                            userName: this.state.userName = userId[1]
                        })
                    } else {
                        alert("Wrong password. Try again");
                    }
                    break;
                case userId[2]:

                    userIn = prompt("Enter your password");

                    if (userIn === password[2]) {
                        this.setState({
                            userName: this.state.userName = userId[2]
                        })
                    } else {
                        alert("Wrong password. Try again");
                    }
                    break;
                case userId[3]:
                    userIn = prompt("Enter your password");

                    if (userIn === password[3]) {
                        this.setState({
                            userName: this.state.userName = userId[3]
                        })
                    } else {
                        alert("Wrong password. Try again");
                    }
                    break;
                default:
                    alert("No such user exists. Try again");
            }
        }
    };

    createNewMessage = () => {

        this.setState({
                messages: [...this.state.messages, {
                    name: this.state.userName + ": ",
                    text: this.state.newItemText,
                    time: this.getTime().toString()
                }],
                newItemText: ""
            }, () => localStorage.setItem("messages", JSON.stringify((this.state)))
        )
    }
    ;

    messageDisplay = () => this.state.messages.map(item =>
        <tr key={item.text}>
            <td>{item.name} {item.text} -- {item.time}</td>
        </tr>);

    logOut = () => {
        this.setState({
            userName: this.state.userName = "Anon"
        })
    };

    componentDidMount = () => {
        let data = localStorage.getItem("messages");
        this.setState(data != null
            ? JSON.parse(data)
            : {
                userName: "Anon",
                messages: [
                    {}],
                showCompleted: true
            });
    };

    clearMessages = () => {
        localStorage.removeItem("messages");
        window.location.reload();
    };

    render = () =>
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                Chatroom
                <br/>
                <br/>
                User: {this.state.userName}
            </h4>
            <br/>
            &nbsp;
            &nbsp;
            &nbsp;
            <button className={"btn btn-primary mt-2"} onClick={this.authAccount}>Log In</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button className={"btn btn-primary mt-2"} onClick={this.logOut}>Log Out</button>

            <div className={"container-fluid"}>
                <br/>
                <br/>
                <div className="my-1">
                    <input className={"formControl"}
                           value={this.state.newItemText}
                           onChange={this.updateNewTextValue}
                           placeholder={"Enter message..."}/>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button className={"btn btn-primary mt-1"}
                            onClick={this.createNewMessage}>
                        Send
                    </button>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button className={"btn btn-primary mt-1"}
                            onClick={this.clearMessages}>
                        Clear
                    </button>
                </div>
                <table className={"table table-striped table-bordered"}>
                    <thead>
                    <tr>
                        <th>
                            Messages
                        </th>
                    </tr>
                    </thead>
                    <tbody>{this.messageDisplay()}</tbody>
                </table>
            </div>
        </div>
}