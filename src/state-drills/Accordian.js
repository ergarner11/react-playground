import React from 'react'

class Accordian extends React.Component {
    static defaultProps = {
        sections :[]
    }

    state = {
        currentIndex : null
    }

    handleOnClick(index){
        this.setState({currentIndex:index})
    }

    renderP(index){
        if(index === this.state.currentIndex){
            return <p>{this.props.sections[index].content}</p>
        }
        return
    }

    renderLis() {
        return this.props.sections.map((section,index) =>
            (<li key={index}>
                <button onClick={() => this.handleOnClick(index)}>{section.title}</button>
                {this.renderP(index)}
            </li>)
        )
    }

    render() {
        return (
            <ul>
                {this.renderLis()}
            </ul>
        )
    }
}

export default Accordian;