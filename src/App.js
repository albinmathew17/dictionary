import React, { Component } from 'react';
import './App.css';
import Card from './card/card';
import Cardform from './cardform/cardform';
import DB_CONFIG from './config/firebase/db_config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.submitCard = this.submitCard.bind(this);
    this.state = {
      cards : [
      ],
      currentCard : {

      }
    }
  }

componentWillMount(){
  const currentCards= this.state.cards;
//   this.database.on('child_added',snap => {
//     currentCards.push({
//       id:snap.key,
//       eng:snap.val().english_word,
//       mal: snap.val().malayalam_definition
//     })

//     this.setState({
//       cards: currentCards,
//       currentCard:this.getRandomCard(currentCards)
//   })
// })

 this.setState({
      cards: currentCards,
      currentCard:this.getRandomCard(currentCards)
  })
 
}
getRandomCard(cards){
  var card = cards[Math.floor(Math.random() * cards.length)];
  return card;
}

submitCard(word){
  let database = this.app.database().ref().child('words');
  var _this = this;
  const currentCards = this.state.cards;
  database.orderByChild("english_word").equalTo(word).limitToLast(10).on("value", function(snapshot) {
    let meaningArray = snapshot.val();
    const malayalValues = []
    Object.keys(meaningArray).map(function(keyName, keyIndex) {
       malayalValues.push(meaningArray[keyName].malayalam_definition);
     })
    currentCards.push({
        id:snapshot.key,
        english_word:word,
        malayalam_definition: malayalValues
    })
      _this.setState({
        cards: currentCards,
        currentCard:currentCards[0]
    })
  });
}
  render() {
    return (
      <div className="App">
        <div className="cardBlock">
          <Card eng={this.state.currentCard ? this.state.currentCard.english_word : ''} mal={this.state.currentCard ? this.state.currentCard.malayalam_definition:''}/>
        </div>
        <div className="inputBlock">
          <Cardform handleSubmit={this.submitCard}/>
        </div>
      </div>
    );
  }
}

export default App;
