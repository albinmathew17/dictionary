import React, { Component } from 'react';
import './cardform.css';

class Cardform extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlCahnge = this.handlCahnge.bind(this);
        this.state = {
            value: ''
        }
    }

    handleSubmit(event){
        this.props.handleSubmit(this.state.value);
        event.preventDefault();
    }
    handlCahnge(event){
         this.setState({value: event.target.value});
    }
    render(props){
        return(
            <div className="inputContainer">
                <form onSubmit={this.handleSubmit} onChange={this.handlCahnge}>
                    <input type="text" value={this.state.value} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Cardform