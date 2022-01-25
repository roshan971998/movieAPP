class LectureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
    }
    mouseOver = () => { this.setState({ hovering: true }) }
    mouseOut = () => { this.setState({ hovering: false }) }
    render() {
        return (
            <div>
                {this.state.hovering === true ? <Tooltip /> : null}

                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
            </div>
        );
    }
}

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
    }
    mouseOver = () => { this.setState({ hovering: true }) }
    mouseOut = () => { this.setState({ hovering: false }) }
    render() {
        return (
            <div>
                {this.state.hovering === true ? <Tooltip /> : null}

                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
            </div>
        );
    }
}

class SomeOtherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        }
    }
    mouseOver = () => { this.setState({ hovering: true }) }
    mouseOut = () => { this.setState({ hovering: false }) }
    render() {
        return (
            <div>
                {this.state.hovering === true ? <Tooltip /> : null}

                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}></div>
            </div>
        );
    }
}


//here non-visual logic is  used in every component
// constructor(props) {
//     super(props);
//     this.state = {
//         hovering: false
//     }
// }
// mouseOver = () => { this.setState({hovering: true}) }
// mouseOut = () => { this.setState({ hovering: false }) }

//hence we want to reuse this non-visual logic for various components so what we we can do is
//we can crete a wrapper component and we will pass this logic to the wrapper and inside
//wrapper we will render whatever components(like progress bar,lecture card ..etc) we want
//and we will pass the state from wrapper to the components to be rendered via props
//hence we dont need to write this logic in every component separately
//this idea is shown in demo2.js and demo3.js

