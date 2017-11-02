import React from "react";

require("./sharkwords.css");

export default class SharkWords extends React.Component {
    constructor() {
        super();

        // Bind "this" with non-static functions
        this.guessedWord = this.guessedWord.bind(this);
        this.handleGuess = this.handleGuess.bind(this);

        // Initial State
        this.state = {numWrong: 0, guessed: new Set()}
    }

    guessedWord() { // "app_e" for "apple"
        var word = "";

        for (var ltr of this.props.answer)
            word += this.state.guessed.has(ltr) ? ltr : "_";

        return word;
    }

    handleGuess(evt) {
        var letter = evt.target.value;
        this.state.guessed.add(letter);
        this.setState({guessed: this.state.guessed});

        if (this.props.answer.indexOf(letter) === -1)
            this.setState({'numWrong': this.state.numWrong + 1});
    }

    renderButtons() {
        var buttons = [];

        for (var ltr of "abcdefghijklmnopqrstuvwxyz")
            buttons.push(
                <button key={ ltr } value={ ltr }
                        disabled={ this.state.guessed.has(ltr) }
                        onClick={ this.handleGuess }>
                    { ltr }
                </button>)

        return (
            <div className="letters">{ buttons }</div>
        );
    }

    render() {
        return (
            <div className="sharkwords">
                <h1>Sharkwords!</h1>
                <img src={ require("./guess" + this.state.numWrong + ".png") } alt={`shark words with ${this.state.numWrong} wrong guesses`}/>
                <p className="guessed">
                    Wrong guesses: { this.state.numWrong }
                </p>
                <p className="word">{ this.guessedWord() }</p>

                { this.renderButtons() }
            </div>
        );
    }
}

// /* start-main */
// var word = randomWord();
// console.log("answer = " + word);

// ReactDOM.render(
//     <SharkWords answer={ word }/>,
//     document.getElementById('root'));
// /* end-main */