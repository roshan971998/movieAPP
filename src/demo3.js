//higher order component
//or HOC

function withHover(Component) {  
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

    return withHover;
} 

class LectureCard extends React.Component{
    render(){
        return(
            <div>
                {this.props.hovering === true ? <Tooltip />:null }
    
                <div></div> 
            </div>
        );
    }
}

class ProgressBar extends React.Component{
    render(){
        return(
            <div>
                {this.props.hovering === true ? <Tooltip />:null }
    
                <div></div> 
            </div>
        );
    }
}

class SomeOtherComponent extends React.Component{
    render(){
        return(
            <div>
                {this.props.hovering === true ? <Tooltip />:null }
    
                <div></div> 
            </div>
        );
    }
}

const LectureCardWithHover = withHover(LectureCard);
const ProgressBarWithHover = withHover(ProgressBar);
const SomeOtherComponentWithHover = withHover(SomeOtherComponent);

{/* <LectureCardWithHover a={1} />
<ProgressBarWithHover  />
<SomeOtherComponentWithHover /> */}