//we can write classes inside functions also in javascript

//technique is called HIGHER ORDER COMPONENTS

function withHover(Component) {  //Component can be any like lecture card ,progressbar or any other component
    class withHover extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hovering: false
            }
        }
        mouseOver = () => { this.setState({hovering: true}) }
        mouseOut = () => { this.setState({ hovering: false }) }
        render(){
            return(
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component hovering = {this.state.hovering} />
                </div>
            );
        }
    }

    return withHover;  //function basically takes a component and returns a component
}                   //that has ability to show tooltips
//such function are called higherorder component function