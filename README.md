# Guess My Number!

This is a simple JavaScript game where the player has to guess a randomly generated number between 1 and 20. The game provides feedback on whether the guess is too high, too low, or correct. The player starts with a score of 20 and loses 1 point for each incorrect guess. The goal is to guess the correct number before running out of points!

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- **Random Number Generation**: A random number between 1 and 20 is generated each time the game starts.
- **Score Tracking**: The player’s score starts at 20 and decreases with incorrect guesses.
- **Game Reset**: The "Again!" button allows players to reset the game without refreshing the page.
- **Dynamic UI Updates**: The UI updates dynamically based on the player's actions, providing feedback and resetting styles on game reset.
- **High Score Tracking**: Tracks and displays the player's highest score.

## Project Structure

```bash
.
├── index.html    # The main HTML file
├── main.css      # The CSS file for styling the game
└── app.js        # The JavaScript file handling the game logic
```

### `index.html`

This is the main HTML structure for the game interface. It includes:
- The title of the game.
- Input fields and buttons for user interaction.
- Score and high score display.
- Links to the CSS and JavaScript files.

### `main.css`

This file contains the styling for the game interface, including:
- Layout structure.
- Button styles.
- Font and background colors.
- Animations for correct guesses and game reset.

### `app.js`

This is where the game logic is handled:
- **Event Listeners**: Handling the `click` events for guessing the number and resetting the game.
- **Game Logic**: Comparison of the guessed number to the randomly generated secret number, score updates, and UI feedback.
- **Dynamic UI updates**: Changing the background color and text when the player wins or loses.

## Technologies Used

- **HTML5**: Structuring the content and elements of the game.
- **CSS3**: For styling and layout of the game interface.
- **JavaScript (ES6)**: For game logic and dynamic interaction.

## Getting Started

### Prerequisites

To run the game, you'll need:
- A modern web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/guess-my-number.git
   ```

2. Navigate to the project directory:

   ```bash
   cd guess-my-number
   ```

3. Open `index.html` in your browser:

   ```bash
   open index.html
   ```

## How to Play

1. Enter a number between 1 and 20 in the input box.
2. Click the **Check!** button to submit your guess.
3. The game will tell you if your guess is too high, too low, or correct.
4. If correct, the game will show a success message, update the high score, and change the background color.
5. If incorrect, your score will decrease by 1, and you can guess again.
6. Click the **Again!** button to restart the game with a new random number.

## Future Improvements

This project may be refactored later to improve code readability, performance, and scalability. Some potential improvements include:
- **Separation of Concerns**: Refactor the game logic into more modular functions for better code organization.
- **Game Settings**: Add difficulty settings (e.g., change the range of numbers or number of allowed attempts).
- **Additional Features**: Add animations, sounds, or a timer to enhance user engagement.
- **Code Efficiency**: Optimize DOM manipulation and state management for better performance.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as proper attribution is provided.
