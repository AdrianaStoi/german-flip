
# German-Flip: Memory Card Game with German Vocabulary

German-Flip is a memory card game that aims to help players learn German vocabulary while playing. The goal is to exercise memory and concentration.

The game is intended for people of all ages, aiming to provide both educational and entertaining purposes.

The game goal is to match pairs of cards containing German words. The challenge is remembering the positions of the cards as they are turned face down if they don’t match.

Alongside trying to match the pairs, the players’ German vocabulary grows, and it becomes easier to recall words and their meanings.

Visit live page [here](https://adrianastoi.github.io/german-flip/)

![Responsive](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/i_am_responsive.png)

## External user’s goal

* To improve memory skills in a fun way while learning new German vocabulary.

## Site owner's goal

* To provide users with an entertaining and interactive game that also helps them learn new German vocabulary.

## User Stories

* As a user, I would like to know the rules of the game.
* As a user, I would like to see the number of moves displayed on the game board page.
* As a user, I would like to see the time . left for completing the game.
* As a user, I would like to be able to reset the game.

## Features

### Existing Features

### Heading

* The Game Rules page includes a heading at the top containing the logo image and the game title.  The logo image also serves as the front design of the flip cards.
* This heading is used on both pages, the Game rules page, and the Game page.

![Heading logo image and game name](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/logo_game_name_heading.png)

* On the Game Rules page, the user can find the game description and the Game rules:

#### About Game

![About Game](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/about_game_section.png)

#### Game rules

   ![Game rules](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/game_rules_section.png)

#### Go to Game button

* At the bottom of the page under the Game rule, the user can find the “Go to Game” button.

    ![Image Go to Game button](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/go_to_game_button.png)

### Game Board page

#### Time count section

* In this section, the user can find the timer which will start counting once he has clicked on the first card.

   ![time counter before click](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/time_counter.png)   ![time counter after click](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/time_counter_active.png)

#### Move count section

* Underneath the time counter, there is the Moves count. The Moves counter increases after each turn. One turn is counted when the user clicks on two cards.

   ![move counter before click](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/moves_counter.png)   ![move counter after click](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/moves_counter_active.png)

#### Game Board section  

* There are 16 cards which contain 8 pairs of images. Before starting the game, they are all turned back. The front image is the logo image.
* The flip cards are themed around Breakfast food vocabulary.

   ![Image Game board with logo image](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/board_game_unflipped.png)

* Each card contains an image of the food item, the corresponding German word for that item, and its associated noun article. Specific colors are associated to the noun genders (feminine - “die”, masculine - “der”, neuter - “das”) to help users in memorizing and easily remembering the gender of the noun.

   ![Image Game board with flipped cards that include image food items](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/flipped_cards.png)

* Once two cards are matched, they freeze.

   ![Two flipped cards](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/two_flipped_cards.png)

* When all 8 pairs are matched the users are prompted with a popup window with the message “You won with x moves in time x!
* Under the message, there is the button “Ok!” which directs the user back to the game board page.

![Win message image](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/win_message.png)

#### Reset Game Button section  

* Under the gaming board, the user can find the "Reset Game" button.

   ![Image Reset Game button](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/reset_game_button.png)

* When the user clicks on the "Reset Game" button, he is prompted with a message:” Do you want to start a new game?”, and two options "Ok" or "Cancel"
* When user clicks on “Ok.” The page is reloaded, and the game board is reset. Cards are shuffled, they are turned back, the time and moves counters are reset to 0.
* When the user clicks on “Cancel”, he returns to the game page, and the game board will remain unchanged. This option is useful for users who accidentally click on the “Reset Game” button.

   ![Image Reset game pop-up message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/reset_game_popup_message.png)

## Future Features

* Create Game Rules button on the board game page to allow users to display game rules and avoid going back to the previous page.
* Add countdown timer and moves to game to make it more challenging for the player.
* Different complexity level game in terms of number of available cards and vocabulary.

## Typography and color scheme

### Color Scheme

* There where three colors used :
  * Color used for background #678cec
  * Color used for text content: #272323
  * Color used for the background of the game  rules section, buttons and the border to the flip cards : #f4bc4f

### Fonts

Regarding fonts, I used Google fonts Yeseva One for the heading and buttons, and Josefin Sans for the paragraphs.
  Sans Serif was used as alternative font.

## Technology

* I used Balsamiq Wireframes to create the wireframes for game layout. The wireframe can be found [here - German-Flip: Memory Card Game with German Vocabulary](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/german_flip_memory_card_game_with_german_vocabulary.pdf)
* I used the editor Codeanywhere for coding. Skillset used for the project were HTML, CSS and JavaScript.
* The site was deployed to Github Pages, and deployment history was tracked and maintained through Git commit messages.
