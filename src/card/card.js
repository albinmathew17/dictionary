import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render(){
        const mal = this.props.mal;
        const eng = this.props.eng;
        return(
            <div className ="cardContainer">
                <div className="card">
                    <div className="subheads">
                        <span className="inputText">{this.props ? this.props.eng : ''}</span>
                    </div>
                    { this.props.mal.length > 0 ? (
                        <div className="outputBlock">
                            <ul className="malayalamCard">
                                { this.props.mal.map(
                                        (t,i) =><li>{t}</li>
                                    )
                                    }
                            </ul>
                        </div>
                    ) : ''
                        
                    }
                    
                    {/*<div className="forntCard">
                        <div className="englishCard">{this.props ? this.props.eng : ''}
                        </div>
                    </div>
                    <div className="backCard">
                        <ul className="malayalamCard">
                            { this.props.mal.map(
                                    (t,i) =><li>{t}</li>
                                )
                                }
                        </ul>
                    </div>*/}
                </div>
             </div>
        )
    }
}

export default Card