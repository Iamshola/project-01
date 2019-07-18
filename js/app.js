document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const scoreBoard = document.querySelector('.scoreBoard')
  const collected = document.querySelector('.collected')
  const timerCompleted = document.querySelector('.timerCompleted')
  const lostLives = document.querySelector('lostLives')
  const start = document.querySelector('.start')
  const restart = document.querySelector('.restart')
  let audio = document.querySelector('audio')
  const timer = document.querySelector('.timer')
  const gameOver = document.querySelector('#gameOver')
  const finished = document.querySelector('.finished')
  const score = 0
  // const lives  =  document.querySelector('lives')

  let sarah = 'sarah'
  const width = 6
  let randomIndex = 6
  let collisionCheckFirstRow = 0
  let firstRowObstaclesIndex = 0
  let secondRowObstaclesIndex = 5
  let collisionCheckSecondRow = 0
  let thirdRowObstaclesIndex = 23
  let collisionCheckThirdRow = 0

  let fourthRowObstaclesIndex = 36
  let collisionCheckFourthRow = 0


  let vegIndex = 1
  let vegCollected = 0
  // let livesBoard = 5
  let collisionCheckCrossiants1 = 0
  let collisionCheckRow3 = 0
  let collisionCheckRow4 = 0
  let characterPosition = 54
  let newCharacterPosition = 55
  let currentIndex = 55

  let currentIndexRow3 = 48
  let currentIndexRow4 = 47
  let vegetable = 0
  let sarahWithVegetables = 0
  let homeWithGem = 0

  // eventListeners
  start.addEventListener('click', startGame)
  // restart.addEventListener('click', restartGame)
  document.addEventListener('keyup', moveMyCharacter)

  // datatype 1 - radish, datatype 2 - Tomato, datatype 3 - Corn
  // datatype 4 - pumpkin, datatype 5 - broccoli, datatype 6 - mushroom

  // let dataType = [1,2,3,4,5,6]

  function startGame(){
    setInterval(firstRowObstacles, 700)
    setInterval(secondRowObstacles, 1000)

    setInterval(thirdRowObstacles, 700)
    setInterval(fourthRowObstacles, 1000)
    setInterval(goObstaclesThree, 1000)
    setInterval(goObstaclesFour, 1000)
    setInterval(collision, 100)
    setInterval(countdown, 1000)
    getGoals()
  }

  // Timer Function
  let timeRemaining = +timer.textContent
  let timerId = null
  function countdown() {
    timeRemaining--
    timer.textContent = timeRemaining
    if(timeRemaining === 0) {
      clearInterval(timerId)
      gamefinished()
      // function endGame()
    }
  }

  // Move moveMyCharacter starts
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
        if(currentIndex + width < width * width) currentIndex += width
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
  // Move moveMyCharacter end

  // MovementOfObstacles
  function firstRowObstacles(){
    if(firstRowObstaclesIndex < 11 && firstRowObstaclesIndex > 5){
      collisionCheckFirstRow = firstRowObstaclesIndex
      squares[firstRowObstaclesIndex].classList.add('logCrossiants')
      squares[firstRowObstaclesIndex].classList.remove('logCrossiants')
      firstRowObstaclesIndex += 1
      squares[firstRowObstaclesIndex].classList.add('logCrossiants')
    } else {
      collisionCheckFirstRow = firstRowObstaclesIndex
      squares[firstRowObstaclesIndex].classList.remove('logCrossiants')
      firstRowObstaclesIndex = 6
      squares[firstRowObstaclesIndex].classList.add('logCrossiants')

    }
  }
  function secondRowObstacles(){
    if(secondRowObstaclesIndex < 17 && secondRowObstaclesIndex > 11){
      collisionCheckSecondRow = secondRowObstaclesIndex
      squares[secondRowObstaclesIndex].classList.add('logCrossiants')
      squares[secondRowObstaclesIndex].classList.remove('logCrossiants')
      secondRowObstaclesIndex += 1
      squares[secondRowObstaclesIndex].classList.add('logCrossiants')
    } else {
      collisionCheckSecondRow = secondRowObstaclesIndex
      squares[secondRowObstaclesIndex].classList.remove('logCrossiants')
      secondRowObstaclesIndex = 12
      squares[secondRowObstaclesIndex].classList.add('logCrossiants')

    }
  }
  function thirdRowObstacles(){
    if(thirdRowObstaclesIndex < 29 && thirdRowObstaclesIndex > 23){
      collisionCheckThirdRow = thirdRowObstaclesIndex
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')
      squares[thirdRowObstaclesIndex].classList.remove('obstaclesLollipop')
      thirdRowObstaclesIndex += 1
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')
    }  else {
      collisionCheckThirdRow = thirdRowObstaclesIndex
      squares[thirdRowObstaclesIndex].classList.remove('obstaclesLollipop')
      thirdRowObstaclesIndex = 24
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')
    }
  }
  function fourthRowObstacles(){
    if(fourthRowObstaclesIndex < 35 && fourthRowObstaclesIndex > 29){
      collisionCheckFourthRow = fourthRowObstaclesIndex
      squares[fourthRowObstaclesIndex].classList.add('obstaclesMilkshake')
      squares[fourthRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      fourthRowObstaclesIndex += 1
      squares[fourthRowObstaclesIndex].classList.add('obstaclesMilkshake')
    } else {
      collisionCheckFourthRow = fourthRowObstaclesIndex
      squares[fourthRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      fourthRowObstaclesIndex = 30
      squares[fourthRowObstaclesIndex].classList.add('obstaclesMilkshake')
    }
  }


  //goObstaclesThree starts
  function goObstaclesThree(){
    if(currentIndexRow3 < 47 && currentIndexRow3 > 41){
      collisionCheckRow3 = currentIndexRow3
      squares[currentIndexRow3].classList.add('obstaclesDonut')
      squares[currentIndexRow3].classList.remove('obstaclesDonut')
      currentIndexRow3 += 1
      squares[currentIndexRow3].classList.add('obstaclesDonut')
    } else {
      collisionCheckRow3 = currentIndexRow3
      squares[currentIndexRow3].classList.remove('obstaclesDonut')
      currentIndexRow3 = 42
      squares[currentIndexRow3].classList.add('obstaclesDonut')
    }
  }

  function goObstaclesFour(){
    if(currentIndexRow4 < 53 && currentIndexRow4 > 47){
      collisionCheckRow4 = currentIndexRow4
      squares[currentIndexRow4].classList.add('obstaclesCupcake')
      squares[currentIndexRow4].classList.remove('obstaclesCupcake')
      currentIndexRow4 += 1
      squares[currentIndexRow4].classList.add('obstaclesCupcake')
    } else {
      collisionCheckRow3 = currentIndexRow4
      squares[currentIndexRow4].classList.remove('obstaclesCupcake')
      currentIndexRow4 = 48
      squares[currentIndexRow4].classList.add('obstaclesCupcake')
    }
  }
  //goObstaclesThree ends

  // MakeGoals starts
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    vegIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('vegetable')
    riskArea[randomIndex].setAttribute('data-type', vegetable)
  }

  function collision(){
    if(characterPosition === collisionCheckFirstRow || characterPosition === collisionCheckSecondRow || characterPosition === collisionCheckThirdRow || characterPosition === collisionCheckFourthRow || characterPosition === collisionCheckRow3|| characterPosition === collisionCheckRow4){
      squares[currentIndex].classList.remove(sarah)
      currentIndex = 56
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

      return squares[currentIndex].setAttribute('data-type', sarahWithVegetables)
    }
  }

  function sarahOnPlate(){
    if(squares[currentIndex].classList.contains('home') && squares[currentIndex].classList.contains('sarahWithVegetables')) {
      squares[currentIndex].classList.remove('home')
      squares[currentIndex].classList.remove('vegetable')
      squares[currentIndex].classList.remove('sarahWithVegetables')
      squares[currentIndex].classList.add('homeWithGem')
      squares[currentIndex].setAttribute('data-type', homeWithGem)
      gameCompleted()
      if(home === 'homeWithGem'){
        squares[currentIndex].classList.remove('sarahWithVegetables')
      }
      sarahNewPoistion()
      getGoals()
      currentIndex = 57
      sarah = 'sarah'
      squares[currentIndex].classList.remove('vegetable')
      return squares[currentIndex].classList.add('sarah')
    } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVegetables')) {
      currentIndex = 59
      squares[currentIndex].classList.add('sarah')
    }

  }

  function sarahNewPoistion(){
    newCharacterPosition = squares[currentIndex].classList.add('sarah')
    vegetable++
    homeWithGem++
    sarahWithVegetables++
    return newCharacterPosition
  }
  function gameCompleted(){
    vegCollected++
    collected.innerHTML = vegCollected
    if(vegCollected === 2){
      // setInterval(thirdRowObstacles, 1000)
      // setInterval(fourthRowObstacles, 1000)
      // setInterval(goObstaclesThree, 1000)
    }
    if(vegCollected === 4){
      // setInterval(thirdRowObstacles, 1000)
      // setInterval(fourthRowObstacles, 1000)
      // setInterval(goObstaclesThree, 1000)
    }
  }

  function gamefinished(){
    clearInterval(firstRowObstacles)
    clearInterval(thirdRowObstacles)
    clearInterval(fourthRowObstacles)
    clearInterval(goObstaclesThree)
    clearInterval(goObstaclesFour)
    clearInterval(collision)
    clearInterval(countdown)
  }
  // let finalTime = +timerCompleted.HTML
  // function endGame(){
  //   finalTime = 120 - timeRemaining
  //   timerCompleted.textContent = finalTime
  //   finished.classList.add('show')
  // }


  // function hitByObjectAudio() {
  //   audio.src = 'audio/hitByObject.wav'
  //   audio.play()
  // }

  // Need these Braces
})
