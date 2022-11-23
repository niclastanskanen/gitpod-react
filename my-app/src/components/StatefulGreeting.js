import React from "react"

// class StatefulGreeting extends React.Component {
//     render() {
//         // return <h1>Heey from StatefulGreeting</h1>
//         return <h1>Hello {this.props.greeting}</h1>
//     }
// }

// export default StatefulGreeting;

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
    
}

export default StatefulGreeting;