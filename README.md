
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
* As a user, I would like to easily navigate to the game page.
* As a user, I would like to view the time of completion for the game.
* As a user, I would like to see the number of moves displayed on the game board page.
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
* Under the message, there is the button “Ok” which directs the user back to the game board page.

![Win message image](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/win_message.png)

#### Reset Game Button section  

* Under the gaming board, the user can find the "Reset Game" button.

   ![Image Reset Game button](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/reset_game_button.png)

* When the user clicks on the "Reset Game" button, he is prompted with a message:” Do you want to start a new game?”, and two options "Confirm" or "Cancel"
* When user clicks on “Confirm” The page is reloaded, and the game board is reset. Cards are shuffled, they are turned back, the time and moves counters are reset to 0.
* When the user clicks on “Cancel”, he returns to the game page, and the game board will remain unchanged. This option is useful for users who accidentally click on the “Reset Game” button.

   ![Image Reset game pop-up message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagesreadme/reset_game_popup_message.png)

## Future Features

* Create Game Rules button on the board game page to allow users to display game rules and avoid going back to the previous page.
* Add countdown timer and moves to game to make it more challenging for the player.
* Different complexity level game in terms of number of available cards and vocabulary.

## Typography and color scheme

### Color Scheme

* There were three colors used :
  * Color used for background #678cec
  * Color used for text content: #272323
  * Color used for the background of the game rules section, buttons and the the flip cards border : #f4bc4f

### Fonts

* Regarding fonts, I used Google fonts Yeseva One for the heading and buttons, and Josefin Sans for the paragraphs.
* Sans Serif was used as alternative font.

## Technology

* I used Balsamiq Wireframes to create the wireframes for game layout. The wireframe can be found [here - German-Flip: Memory Card Game with German Vocabulary](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/german_flip_memory_card_game_with_german_vocabulary.pdf)
* I used the editor Codeanywhere for coding. Skillset used for the project were HTML, CSS and JavaScript.
* The site was deployed to Github Pages, and deployment history was tracked and maintained through Git commit messages.

## Testing

### Testing Responsiveness

* Chrome DevTools was used for testing responsiveness on desktop, tablets, and smartphones.

* The page layout, images, game board, reset button and win message popup are all displayed correctly, as expected. The testing on various devices has ensured that the game functions properly and provides the desired user experience.

* I tested on iPad Mini (768x1027) and Samsung Galaxy A51/71 (412x914).

### ipad Mini

* The website displays a consistent layout when accessed on an Ipad Mini with a screen resolution of 768x1027, as detailed below:

#### Game Rules page

![Game Rules page screenshot](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_rules_page_ipad_mini.png)

#### Game Board page

![Game Board unflipped cards](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_ipad_mini.png)

##### Game Board flipped cards

![Game Board flipped cards](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_active_ipad_mini.png) ![Board Game all cards flipped](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_flippedcards_ipad_mini.png)

##### Game Board win message

![Game Board win message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_win_message_ipad_mini.png)

##### Game Board reset message

![Game Board reset message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/reset_game_ipad_mini.png)

### Samsung Galaxy A51/71

* I also tested the game on a Samsung Galaxy A51/71 with a screen resolution of 412x914, and the game rules, board game, win message are displayed correctly, as shown below:

#### Game Rules page

![Game Rules page screenshot](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_rules_page_samsung_galaxy_a.png)

#### Game Board page

![Game Board unflipped cards](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_samsung_galaxy_a.png)

##### Game Board flipped cards

![Game Board flipped cards](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_active_samsung_galaxy_a.png) ![Game Board all cards flipped](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_flippedcards_samsung_galaxy_a.png)

##### Game Board win message

![Game Board win message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/game_board_win_message_samsung_galaxy_a.png)

##### Game Board reset message

![Game Board reset message](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/reset_game_message_samsung_galaxy_a.png)

### Responsiveness on devices

| Responsiveness                           | Desktop >1200px | Desktop 1024px | Devices >= 700 iPad Air/Mini, Surface Pro 7 | Devices <699 iPhone SE/ XR/12 Pro/X, Pixel, Samsung Galaxy S8+/ A51/71/Fold |
| ---------------------------------------- | --------------- | -------------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| Links and buttons work                               | Yes             | Yes            | Yes                                         | Yes                                                                         |
| Flip cards work                              | Yes             | Yes            | Yes                                         | Yes                                                                         |
| Images, Layout and Content displayed as expected | Yes             | Yes            | Yes                                         | Yes                                                                         |

## Browser Compatibility

* I tested the site on different browsers Google Chrome, Edge and Mozilla.
  
* The layout, the features as buttons, game board, time count, move count are displayed correctly and are all working as expected. The game features are functioning as indended and flip cards are displayed properly.  

| Browser       | Layout rendered as expected | Features and buttons work as expected | Images on flip cards as expected |
| ------------- | --------------------------- | -------------------- | ------------------ |
| Google Chrome | Yes                         | Yes                  | Yes                |
| Edge          | Yes                         | Yes                  | Yes                |
| Mozilla       | Yes                         | Yes                  | Yes                |

## Lighthouse

* I tested performance, accessibility, best practice, and SEO using Lighthouse accessed via DevTools and here are the results:

![Lighthouse screenshot](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/lighthouse_report_german_flip.png)

## Code Validation

### HTML Validator

* Run index.html through [W3C](https://validator.w3.org/nu/#l44c33) and received an error indicating that"button" element cannot appear as descendant of the "a" element.

  ![W3c index.html screenshot error](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/html_validator_error_index.png)

* added a "div" tag for the "a" element and fixed the error, refer to [commit 73fa3bf](https://github.com/AdrianaStoi/german-flip/commit/73fa3bf258255495e332cd3973d6304abd2d8727)

* No errors or warnings in [W3C](https://validator.w3.org/nu/#l44c33) validator for gameboard.html file.

### CSS Validator

* The style.css file successfully passed through the [Jigsaw](https://jigsaw.w3.org/css-validator/validator) official validator without any errors being detected.

### JavaScript Validator

* No errors were found for script.js when pasing through the official [Jshin](https://jshint.com/) validator.

## Manual Testing

|     Feature       |        Expectation          |        Action        |       Outcome      |
| ----------------- | --------------------------- | -------------------- | ------------------ |
| Go to Game button | When hovering over it, the button background should become white with an orange border. When clicked it should lead to the Game Board page.                          | Hover over and click                  | When hovering over, the button background becomes white with an orange border. When clicked it leads to Game Board page. |
| Time counter  | The default time should be set to 0. Once the user clicks on the first card, the timer should start counting. The timer should stop once all 8 pairs are matched. | Start timer once the user clicks on first flip card. Stop when all pairs are matched.| When clicking on the first flip card, the timer starts. Once all the 8 pairs are matched the timer stops. |
| Moves count       | The default ‘Moves count’ should be set to 0. Once the user clicks on two cards, the moves count should be increased by 1.Final moves count should be displayed in a pop-up window. | Start moves count once the user clicks on two flip cards. Final moves count displayed in a popup window.| When clicking on two cards the moves count is increased by 1. The final moves count is displayed in a pop-up window. |
| Game board shuffled cards       | Upon reloading the window, the cards should be shuffled ensuring a randomized layout for each game session. Also, when the reset button is clicked, and reset action is confirmed, the window should reload, and the cards should be shuffled. | Reload page | When reloading the window, the cards are randomized. When the reset button is clicked, and reset action is confirmed, the window reloads, and the cards are shuffled. |
| Flip cards       | When clicked, the card should be flipped over.| Click  | When clicking, the card is flipped. |
| Two unmatched cards | When clicking on two cards and they are not of the same card, the cards should flip back. | Click                  | When clicking on two cards that are not two of the same cards, they flip back. |
| Two matched cards/all cards matched | When clicking on two cards and they match, they should not flip back. The matched cards should remain visible until the end of the game. | Click       | When clicking on two cards and they match, they are not flipped back. The matched cards remain visible until the end of the game.|
| Reset Game button  | When hovering over it, the button background should become white with an orange border. When clicked it should display a pop-up window with the message: “Do you want to start a new game?” and two buttons “Confirm” and “Cancel”.  | Hover over and click | When hovering over, the button background becomes white with an orange border. When clicked it displays a pop-up window with the message: “Do you want to start a new game?” and two buttons “Confirm” and “Cancel”. |
| Confirm button in reset pop-up window | When clicked over the reset action should be confirmed and it should reload the window. A new game should be initiated: time count and moves count should be 0, cards should be flipped back and display the logo image, and they should be shuffled.| Click                  | When clicked over the reset action is confirmed and it reloads the window. A new game is initiated: time count and moves count are 0, cards are flipped back displaying the logo image, and they are shuffled. |
| Cancel button in reset pop-up window | Upon clicking, the user should be brought back to the board game without any modifications to the ongoing game. The game should remain unchanged, and the user should be able to continue playing from where they left off. | Click  | Upon clicking, the user is brought back to the board game without any modifications to the ongoing game. The game remains unchanged, and the user can continue playing from where they left off.                  |
| Win pop-up window    | When the game is completed, and all 8 pairs are successfully matched, a pop-up window should appear displaying the message “You won with x moves in time x!” along with an “Ok” button. Upon clicking the” Ok” button, the user should be taken back to the board game without any changes to the game state. | Pop-up window should appear only when all 8 pairs are matched | When the game is completed, and all 8 pairs are successfully matched, the pop-up window appears displaying the message “You won with x moves in time x!” along with an “Ok” button. Upon clicking the” Ok” button, the user is taken back to the board game without any changes to the game state. |

## User Story Testing

|                User Story                            |                                            Testing                                                         |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|As a user, I would like to know the rules of the game.| <ul><li>The game rules can be found on the main page. First section on the page gives a short description of the game and underneath this section, you can find the game rules.</li></ul>|
| As a user I would like to easily navigate to the game page. | <ul><li> You can find a “Go to Game” button beneath the game rules section. This button redirects to the game board page. </li></ul>|
| As a user, I would like to view the time of completion for the game. | <ul><li> On the game board page, following the heading, you can find the time counter positioned on the right side.</li><li> The time begins when you click on the first card.</li><li>When all pairs are matched, the time count stops, and a popup window will appear displaying the final time.</li>|
| As a user, I would like to see the number of moves displayed on the game board page.| <ul><li> On the game board page, under the time count section, you can find on the right side the moves counter.</li><li>The moves counter will start being counted when you click on the first two cards.</li><li>When all pairs are matched, the moves count stops. As you match all the pairs, the move count will stop, and a popup window will appear displaying the final move count.</li></ul>|
| As a user, I would like to be able to reset the game. | <ul><li>You can start a new game by clicking on the “Reset Game” button.</li><li>When the button is clicked, there is a popup window displayed with the message “Do you want to start a new game?” and the options to either confirm or cancel the action.</ul></li>

## Fixed Bugs

### Layout game board

* To arrange the game board into four columns, I used “display: grid” property. To ensure correct alignment of columns and rows, I used Google DevTool to experiment with appropriate values for the grid-template-columns and grid-template-rows properties.

![Layout game board not aligned](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/unfixed_layout_board_game.png)

* For better responsiveness, especially when implementing media queries, I used the “repeat()” function and gave the values  4 and “auto”.  This approach allowed a more adaptable layout across different screen sizes than when using fixed units like “px”, “%”, “fr” for columns sizes.

![Layout game board](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/fix_game_board.png)

### Fixed Bugs - Media queries

#### iPhone SE

* When opening the board game page on iPhone SE, the board game section was occupying the entire space, leaving no room for anything else on the page. 

![Flip cards size unfixed](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/bug_responsiveness_flip_cards_iphone_se.png)

* To address this issue, I adjusted the width and height of the flip cards to rectify the layout and ensure that there is sufficient space available. 

![Flip cards size fixed](https://github.com/AdrianaStoi/german-flip/blob/main/documentation/imagestesting/fix_responsiveness_flip_cards_iphone_se.png)

## Deployment

### Codeanywhere

* I used Codenywhere to create and run the project. Here are the steps to create the workspace and run the project:
  * Log in to Codeanywhere using GitHub account: https://app.codeanywhere.com/
  * On the Dashboard, click on “New Workspace” which can be found under “Workspaces” section.
  * Copy and paste the Repository URL created in GitHub (by using the Code Institute template) into the designated field.
  * Click on Create.
  * New Workspace is created in Codeanywhere.
  * To run and view the project written in Codeanywhere, click on “Terminal” in the upper bar, then select “New Terminal”.
  * The New terminal will open at the bottom part of the page. To run the application, type “python3 -m http.server” in the terminal.
  * A button “Open Preview or Open Browser” will appear in the right-hand corner.
  * To open it in Browser, click on Open Browser.
  * Application/project will run in a new Tab within the browser.

### GitHub

* I maintained the commit history through Git commit messages and successfully deployed the site to GitHub pages. Here are the steps to deploy the site on Github:
  * Go to the GitHub repository, navigate to the Settings tab
  * Click on “Pages” available in the left-hand side
  * Under the “Branch” section, click on “none” and select “main”, then click on “Save”
  * Once the main branch is chosen, after a few minutes the website is live and the link to access it is displayed at the top of the page

* Visit the site live at: https://adrianastoi.github.io/german-flip/

## Credits

* Font Pairing suggestion were taken from Page Cloud - [Best Font pairings](https://www.pagecloud.com/blog/best-google-fonts-pairings)
* Fonts were taken from [Google Fonts](https://fonts.google.com/?query=josefin)
* Grid creation values for creating the game board were taken from [CSS-tricks site](https://css-tricks.com/almanac/properties/g/grid-auto-columns/) specifically code for the use of "repeat()" function with values 4 and "auto" for grid-templates-columns and grid-templates-row.
* I created the flip card function and implemented card matching and unmatching by following the tutorial of [Marina Ferreira here](https://marina-ferreira.github.io/tutorials/js/memory-game/). The tutorial served as a foundation and I adapted and customized it accordingly.
* For the start timer function I used as source and inspiration [Moira Hartigan - Alien Memory Game](https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/) which was changed and customized.

## Media

* Images for the flip cards were sourced for educational purposes from [Pinterest here](https://www.pinterest.de/pin/2181499813355508/)
* Image front flip card was sourced for educational purposes from [Stock Adobe site here](https://stock.adobe.com/de/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&filters%5Bfree_collection%5D=0&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&serie_id=242121808&search_page=1&search_type=see-more&get_facets=0&asset_id=242036288)
* The image with message “Great Job” displayed in the win pop-up window was taken for education purposes from [Shutterstock site here](https://www.shutterstock.com/image-vector/word-great-job-on-comic-cloud-1955405428)

## Acknowledgements

* My Mentor Rohit Sharma for continuous helpful feedback.