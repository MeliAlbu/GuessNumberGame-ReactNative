import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';

import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

// import GameAsset from  './Assets/gameasset.jpg'
// class App extends Component {
//   /*state= {
//  const  [userNumber, setUserNumber] = useState() 
// };*/
// }

function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds<= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = (
    <GameOverScreen 
    roundsNumber = {guessRounds} 
    userNumber={userNumber}
    onRestart={configureNewGameHandler}/> 
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* <Image style={styles.asset} 
      resizeMode= 'contain'
      source={require('./Assets/gameasset.jpg')} /> */}
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  asset: {
    width: 250,
    height: 250,
  }
});
export default App