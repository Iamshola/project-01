![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Project 1: Game - Frogger

Brief
* The idea of Frogger is to guide a family of frogs across a road, and a river to their homes at the top of the screen.
* To make things more challenging there are numerous moving obstacles that the frogs must avoid to reach their destination.
* The game should be playable for one player.
* The obstacles should be auto generated.

Technologies Used
* HTML5 with HTML5 audio
*	CSS3
*	JavaScript (ES6)
*	Git
*	GitHub
*	Google Fonts
*	Font Awesome

#### Duration
7 days

#### Overview & concept of the project
The aim of the project was to consolidate our knowledge of what we have learnt over the past weeks. The project can be accessed through https://iamshola.github.io/project-01/

![Screenshot 2019-07-19 at 10 43 21](https://user-images.githubusercontent.com/43203736/61526285-0e720f00-aa12-11e9-9f68-b0c19e194119.png)


#### Approach
Before starting my project, I decided to use a grid as the basis of my game and added in any additional divs for my styling process. I believe a grid layout of 6 x 10 would be adequate to enable the various components of the game to be achieved. I wanted to make this a health focused game and have an element of health promotion hence the junk food obstacles and vegetable gems.
The gems would be randomly selected based on the 'riskArea' class and using a Math.Random function.

Within our brief, there was emphasise on auto generated objects and collision. Initially, I had no idea how I would do this so I pseudocoded and really broke my thought process down.


#### Snapshot of code
This is the approach that I decided to use in order to detect collision. Each of the obstacles would be assigned an index value which would be compared against the characters position. Once collision is detected, the characters would be placed back into the 'safe zone'.

``` js
function collision(){
  if(characterPosition === collisionCheckFirstRow ||
    characterPosition === collisionCheckSecondRow || characterPosition === collisionCheckThirdRow
    || characterPosition === collisionCheckFourthRow ||
    characterPosition === collisionCheckFifthRow||
     characterPosition === collisionCheckSixthRow){
    squares[currentIndex].classList.remove(sarah)
    currentIndex = 56
    audio.play()
    if(sarah === 'sarahWithVegetables'){
      getGoals()
    }
    sarah = 'sarah'
    return squares[currentIndex].classList.add(sarah)
  } if (vegIndex === characterPosition){
    squares[currentIndex].classList.remove(sarah)
    sarah = 'sarahWithVegetables'
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.add('sarahWithVegetables')
    squares[currentIndex].setAttribute('data-type', sarahWithVegetables)
  }
}
```

This is the method that I used to generate new versions of my character and to apply the new class to the plate ('lilypads').

``` js
function sarahOnPlate(){
  if(squares[currentIndex].classList.contains('home') && squares[currentIndex].classList.contains('sarahWithVegetables')) {
    squares[currentIndex].classList.remove('home')
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.remove('sarahWithVegetables')
    squares[currentIndex].classList.add('homeWithGem')
    squares[currentIndex].setAttribute('data-type', homeWithGem)
    gameChallenge()
    if(home === 'homeWithGem'){
      squares[currentIndex].classList.remove('sarahWithVegetables')
    }
    sarahNewPoistion()
    getGoals()
    currentIndex = 57
    sarah = 'sarah'
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.add('sarah')
  } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVegetables')) {
    squares[currentIndex].classList.remove('sarah')
    currentIndex = 59
    squares[currentIndex].classList.add('sarah')
  }
}

```

This was my method used to navigate my character around the game board

``` js
function moveMyCharacter(e) {
  squares[currentIndex].classList.remove(sarah)
  switch(e.keyCode) {
    case 37:
      if(currentIndex % width !== 0) currentIndex -= 1
      break
    case 38:
      if(currentIndex - width >= 0) currentIndex -= width
      break
    case 39:
      if(currentIndex % width < width - 1) currentIndex += 1
      break
    case 40:
      if(currentIndex + width < width * 10) currentIndex += width
      break
  }
  if(squares[currentIndex].classList.contains(sarah)) {
    squares[currentIndex].classList.remove(sarah)
  }
  squares[currentIndex].classList.add(sarah)
  characterPosition = currentIndex
  sarahOnPlate()
  if(sarah === 'sarahWithVegetables'){
    (squares[currentIndex].setAttribute('data-type', sarahWithVegetables))
  }
}

document.addEventListener('keyup', moveMyCharacter)
```
### Wins and Blockers
For my first solo project, I am quite proud of what I have managed to produce yet I know there's a lot more work required to make it the perfect game. I have a better understanding how to think like a developer and with more exposure and practice, I know it will make my code and workflow more efficient
One win which I really like was my character ability to change depending on the veg collected which I used data-type attribute.

<img width="684" alt="Screenshot 2019-07-19 at 11 04 56" src="https://user-images.githubusercontent.com/43203736/61527748-17181480-aa15-11e9-991f-cdd88aa133c9.png">

<br> </br>
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/43203736/61530367-c35cf980-aa1b-11e9-9c30-9cf744b2b92f.gif)


On reflection, I wish I had planned better my days and clearly outlined my objectives.
I had hoped to have more time to refactor my code and make it understandable to others reading it. From speaking to my peers and instructors, I feel it would have been suitable for me to have broken my functions into little function so they can be used in different places to prevent repeat code.


#### Future features
Prior to selecting this game, I knew it would be a challenge so I decided to ensure that I had a basic MVP and would go back and make any amendments required. I would have loved to have a working log function, the ability to record high score and include multiple levels.

#### What you have learned
I have learned the best ways to understand concepts is through practice. I believe I have a good understanding of the theory but will definitely need more practice to understand the best approach to complete projects in future.  I feel this week has made more comfortable but not perfect with JavaScript particularly.

### Course Curriculum
  Details of my training and links to more projects whlist at General Assembly -  12 Week Immersive.

> **Week 1-3 | Module One - Fundamentals**

  - HTML5
  - CSS3
  - Sass
  - JavaScript


> **Week 4**

  Project 1 : Frogger  | [GitHub](https://github.com/Iamshola/project-01) | [GH-Pages](https://iamshola.github.io/project-01/)

>**Week 5 | Module Two - React**

  - React.js
  - Routing
  - RESTFUL API
  - Third-party APIs

>**Week 6**

  Project 2 : CocktailBored  | [GitHub](https://github.com/Iamshola/Project3) | [GH-Pages](https://iamshola.github.io/Project-2/#/)

>**Week 7-8 | Module Three - Node and Express**

  - RESTFUL Routing
  - Node.js
  - Express
  - Token Authentication & Session Authentication
  - API Creation
  - Mocha and Chai

>**Week 9**

  Project 3 : Date-a-base | [GitHub](https://github.com/Iamshola/Project3) | [GH-Pages](https://iamshola.github.io/Project-2/#/)

>**Week 10-11 | Module Four - Python and Django**

  - Python
  - SQL
  - Django
  - Token Authentication

>**Week 12**

  Project 4 : Space | [GitHub](https://github.com/Iamshola/project-04) | [Herouku](https://date-a-base-aos.herokuapp.com/#/)


  Contact:

  Adesola Oni-Shogbonyo

  Email : s.oni-shogbonyo@hotmail.co.uk

  Portfolio | [Linkedin](https://www.linkedin.com/in/adesola-oni-shogbonyo/) | [GitHub](https://github.com/Iamshola)
