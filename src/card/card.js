import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            eng: '',
            mal: ''
        }
    }
    render(props){
        return(
            <div className ="cardContainer">
                <div className="card">
                    <div className="forntCard">
                        <div className="englishCard">{props ? props.eng : ''}
                        </div>
                    </div>
                    <div className="backCard">
                        {props ? props.mal.map((data) => (
                            <div className="malayalamCard">{data}</div>
                        )) : ''}
                    </div>
                </div>
             </div>
        )
    }
}

export default Card