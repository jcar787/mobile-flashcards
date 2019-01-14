import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardQuiz } from '../card';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      correctAnswers: 0,
      showAnswer: false,
      quizCompleted: false
    };

    this.markAsCorrect = this.markAsCorrect.bind(this);
    this.changeShowAnswer = this.changeShowAnswer.bind(this);
    this.markAsIncorrect = this.markAsIncorrect.bind(this);
  }

  restartQuiz() {
    this.setState({
      currentCard: 0,
      correctAnswers: 0,
      showAnswer: false,
      quizCompleted: false
    });
  }

  finishedQuiz() {
    const { currentCard } = this.state;
    const { cards } = this.props;
    return currentCard + 1 === cards.length;
  }

  markAsCorrect() {
    if (!this.finishedQuiz()) {
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1,
          currentCard: prevState.currentCard + 1,
          showAnswer: false
        };
      });
    } else {
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1,
          quizCompleted: true
        };
      });
    }
  }

  markAsIncorrect() {
    if (!this.finishedQuiz()) {
      this.setState(prevState => {
        return {
          currentCard: prevState.currentCard + 1,
          showAnswer: false
        };
      });
    } else {
      this.setState({
        quizCompleted: true
      });
    }
  }

  changeShowAnswer() {
    this.setState(prevState => {
      return {
        showAnswer: !prevState.showAnswer
      };
    });
  }

  render() {
    const { cards, navigation } = this.props;
    const {
      currentCard,
      showAnswer,
      quizCompleted,
      correctAnswers
    } = this.state;
    console.log(cards);
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.textCardsQuantity}>
            Current Card: {currentCard + 1}
          </Text>
          <Text style={styles.textCardsQuantity}>
            Total Cards: {cards.length}
          </Text>
        </View>
        {!quizCompleted ? (
          <CardQuiz
            card={cards[currentCard]}
            markAsCorrect={this.markAsCorrect}
            markAsIncorrect={this.markAsIncorrect}
            changeShowAnswer={this.changeShowAnswer}
            showAnswer={showAnswer}
          />
        ) : (
          <View>
            <Text style={styles.title}>Correct Answers: {correctAnswers}</Text>
            <Text style={styles.title}>Total Questions: {cards.length}</Text>
            <Text style={styles.title}>
              Percentage: {((correctAnswers / cards.length) * 100).toFixed(2)} %
            </Text>
            <View style={styles.textContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.restartQuiz()}
              >
                <Text style={styles.buttonText}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.buttonText}>Go Back to Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

mapStateToProps = (state, props) => {
  const { deckId } = props.navigation.state.params;
  const [deck] = state.deck.decks.filter(deck => deck.id === deckId);
  const { cards } = deck;

  return { cards };
};

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  textCardsQuantity: {
    fontSize: 16,
    color: 'midnightblue'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'midnightblue',
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1
  },
  button: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3,
    marginLeft: 15
  },
  buttonText: {
    borderColor: 'midnightblue',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'midnightblue',
    color: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps)(Quiz);
