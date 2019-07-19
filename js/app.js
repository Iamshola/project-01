document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const collected = document.querySelector('.collected')
  const timerCompleted = document.querySelector('.timerCompleted')
  const start = document.querySelector('.start')
  const restart = document.querySelector('.restart')
  const restartPopup = document.querySelector('.popUp')
  const audio = document.createElement('audio')
  audio.src = 'audio/hitByObject.wav'
  const timer = document.querySelector('.timer')
  const score = 0

  let sarah = 'sarah'
  const width = 6
  let randomIndex = 6
  let currentIndex = 55
  let collisionCheckFirstRow = 0
  let collisionCheckSecondRow = 0
  let collisionCheckThirdRow = 0
  let collisionCheckFourthRow = 0
  let collisionCheckFifthRow = 0
  let collisionCheckSixthRow = 0
  let firstRowObstaclesIndex = 5
  let secondRowObstaclesIndex = 11
  let thirdRowObstaclesIndex = 23
  let fourthRowObstaclesIndex = 29
  let fifthRowObstacleIndex = 41
  let sixthRowObstacleIndex = 47
  let vegIndex = 1
  let vegCollected = 0
  let characterPosition = 54
  let newCharacterPosition = 55
  let timeRemaining = +timer.textContent
  let timerId = null

  // Datatypes
  let vegetable = 0
  let sarahWithVegetables = 0
  let homeWithGem = 0

  // eventListeners
  start.addEventListener('click', startGame)
  restart.addEventListener('click', restartGame)

  let firstRowID = null
  let secondRowID  = null
  let thirdRowID  = null
  let fourthRowID  = null
  let fifthRowID  = null
  let sixthRowID = null
  let collisionID = null
  let countdownID = null
  let newVegID = null

  function startGame(){
    if(start.classList.contains('checker')){

      start.classList.remove('checker')
      firstRowID = setInterval(firstRowObstacles, 1000)
      setTimeout(fifthRowObstacles, 200)
      secondRowID = setInterval(secondRowObstacles, 1000)
      thirdRowID = setInterval(thirdRowObstacles, 1000)
      fourthRowID = setInterval(fourthRowObstacles, 1000)
      fifthRowID = setInterval(fifthRowObstacles, 1000)
      sixthRowID = setInterval(sixthRowObstacles, 1000)
      collisionID = setInterval(collision, 80)
      countdownID = setInterval(countdown, 1000)
      newVegID = getGoals()
    }
    setInterval(() => {
      traffic()
      traffic()
      traffic()
      traffic()
      traffic()
      traffic()
    }, 700)
  }

  function countdown() {
    timeRemaining--
    timer.textContent = timeRemaining
    if(timeRemaining === 0) {
      clearInterval(timerId)
      gamefinished()
    }
  }
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
  // MovementOfObstacles
  function firstRowObstacles(){
    if(firstRowObstaclesIndex < 10 && firstRowObstaclesIndex > 5){
      collisionCheckFirstRow = firstRowObstaclesIndex
      squares[firstRowObstaclesIndex].classList.add('obstaclesMilkshake')
      // squares[firstRowObstaclesIndex +1].classList.add('obstaclesMilkshake')
      squares[firstRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      // squares[firstRowObstaclesIndex+1].classList.remove('obstaclesMilkshake')
      firstRowObstaclesIndex += 1
      squares[firstRowObstaclesIndex].classList.add('obstaclesMilkshake')
      // squares[firstRowObstaclesIndex+1].classList.add('obstaclesMilkshake')
    } else {
      collisionCheckFirstRow = firstRowObstaclesIndex
      squares[firstRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      firstRowObstaclesIndex = 6
      squares[firstRowObstaclesIndex].classList.add('obstaclesMilkshake')
      squares[firstRowObstaclesIndex].classList.remove('obstaclesMilkshake')
    }

  }
  function secondRowObstacles(){
    if(secondRowObstaclesIndex < 17 && secondRowObstaclesIndex > 11){
      collisionCheckSecondRow = secondRowObstaclesIndex
      squares[secondRowObstaclesIndex].classList.add('obstaclesMilkshake')
      squares[secondRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      secondRowObstaclesIndex += 1
      squares[secondRowObstaclesIndex].classList.add('obstaclesMilkshake')
    } else {
      collisionCheckSecondRow = secondRowObstaclesIndex
      squares[secondRowObstaclesIndex].classList.remove('obstaclesMilkshake')
      secondRowObstaclesIndex = 12
      squares[secondRowObstaclesIndex].classList.add('obstaclesMilkshake')
    }
  }
  function thirdRowObstacles(){
    if(thirdRowObstaclesIndex < 29 && thirdRowObstaclesIndex > 23){
      collisionCheckThirdRow = thirdRowObstaclesIndex
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')
      squares[thirdRowObstaclesIndex].classList.remove('obstaclesLollipop')
      thirdRowObstaclesIndex += 1
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')

    } else {
      collisionCheckThirdRow = thirdRowObstaclesIndex
      squares[thirdRowObstaclesIndex].classList.remove('obstaclesLollipop')
      thirdRowObstaclesIndex = 24
      squares[thirdRowObstaclesIndex].classList.add('obstaclesLollipop')
    }
    console.log('from row three' + thirdRowObstaclesIndex)
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
  function fifthRowObstacles(){
    if(fifthRowObstacleIndex < 47 && fifthRowObstacleIndex > 41){
      collisionCheckFifthRow = fifthRowObstacleIndex
      squares[fifthRowObstacleIndex].classList.add('obstaclesDonut')
      squares[fifthRowObstacleIndex].classList.remove('obstaclesDonut')
      fifthRowObstacleIndex += 1
      squares[fifthRowObstacleIndex].classList.add('obstaclesDonut')
    } else {
      collisionCheckFifthRow = fifthRowObstacleIndex
      squares[fifthRowObstacleIndex].classList.remove('obstaclesDonut')
      fifthRowObstacleIndex = 42
      squares[fifthRowObstacleIndex].classList.add('obstaclesDonut')
    }
  }
  function sixthRowObstacles(){
    if(sixthRowObstacleIndex < 53 && sixthRowObstacleIndex > 47){
      collisionCheckSixthRow = sixthRowObstacleIndex
      squares[sixthRowObstacleIndex].classList.add('obstaclesCupcake')
      squares[sixthRowObstacleIndex].classList.remove('obstaclesCupcake')
      sixthRowObstacleIndex += 1
      squares[sixthRowObstacleIndex].classList.add('obstaclesCupcake')
    } else {
      collisionCheckSixthRow = sixthRowObstacleIndex
      squares[sixthRowObstacleIndex].classList.remove('obstaclesCupcake')
      sixthRowObstacleIndex = 48
      squares[sixthRowObstacleIndex].classList.add('obstaclesCupcake')
    }
  }
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    vegIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('vegetable')
    riskArea[randomIndex].setAttribute('data-type', vegetable)
  }
  function collision(){
    if(characterPosition === collisionCheckFirstRow || characterPosition === collisionCheckSecondRow || characterPosition === collisionCheckThirdRow || characterPosition === collisionCheckFourthRow || characterPosition === collisionCheckFifthRow|| characterPosition === collisionCheckSixthRow){
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
  function sarahNewPoistion(){
    newCharacterPosition = squares[currentIndex].classList.add('sarah')
    vegetable++
    homeWithGem++
    sarahWithVegetables++
    return newCharacterPosition
  }

  function traffic(){
    firstRowObstacles()
    secondRowObstacles()
    thirdRowObstacles()
    fourthRowObstacles()
    fifthRowObstacles()
    sixthRowObstacles()
  }
  function gameChallenge(){
    vegCollected++
    collected.innerHTML = vegCollected
    if(vegCollected === 2){
      thirdRowID = setInterval(thirdRowObstacles, 800)
      fourthRowID = setInterval(fourthRowObstacles, 1000)
      fifthRowID = setInterval(fifthRowObstacles, 600)
    }
    if(vegCollected === 4){
      thirdRowID = setInterval(thirdRowObstacles, 800)
      fourthRowID = setInterval(fourthRowObstacles, 1000)
      fifthRowID = setInterval(fifthRowObstacles, 600)
    }
    if(vegCollected === 6){
      thirdRowID = setInterval(thirdRowObstacles, 800)
      fourthRowID = setInterval(fourthRowObstacles, 1000)
      fifthRowID = setInterval(fifthRowObstacles, 600)
      gamefinished()
    }
  }
  // Need these Braces
})
