import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber : false
    };

    getText(){
        if( this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ....'
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!'
        }
        else{
            return 'You\'re safe!'
        }
    }

    handleOnClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        setTimeout(() => {
            let num = Math.ceil(Math.random() * 8);
            console.log("num: " + num);
            
            this.setState({
                spinningTheChamber: false,
                chamber: num
            })
        }, 2000);
    }

    render(){
        return (
            <div>
                <p>{this.getText()}</p>
                <button onClick={this.handleOnClick}>Pull the trigger!</button>
            </div>
        );
    }
}

export default RouletteGun;