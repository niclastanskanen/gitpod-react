import React from "react"

// class StatefulGreeting extends React.Component {
//     render() {
//         // return <h1>Heey from StatefulGreeting</h1>
//         return <h1>Hello {this.props.greeting}</h1>
//     }
// }

// export default StatefulGreeting;

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }


    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, ()=>{
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }


    render() {
        return(
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
    
}

export default StatefulGreetingWithCallback;