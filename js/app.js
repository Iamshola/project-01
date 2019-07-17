document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const scoreBoard = document.querySelector('.scoreBoard')
  const collected = document.querySelector('.collected')
  const lostLives = document.querySelector('lostLives')
  const start = document.querySelector('.start')
  const restart = document.querySelector('.restart')
  let audio = document.querySelector('audio')
  const timer = document.querySelector('.timer')
  const score = 0
  // const lives  =  document.querySelector('lives')

  let sarah = 'sarah'
  const width = 6
  let vegIndex = 1
  let vegCollected = 0
  // let livesBoard = 5
  let randomIndex = 6
  let collisionCheckCrossiants = 0
  let collisionCheck = 0
  let collisionCheckRow2 = 0
  let collisionCheckRow3 = 0
  let collisionCheckRow4 = 0
  let sarahPosition = 54
  let newSarahPosition = 55
  let currentIndex = 55
  let gologCrossiantsIndex = 5
  let logIndex = 23
  let currentIndexRow2 = 36
  let currentIndexRow3 = 48
  let currentIndexRow4 = 47
  let typeofVeg = 0

  // eventListeners
  start.addEventListener('click', startGame)
  restart.addEventListener('click', restartGame)
  document.addEventListener('keyup', moveMyCharacter)
  // datatype 1 - radish, datatype 2 - Tomato, datatype 3 - Corn
  // datatype 4 - pumpkin, datatype 5 - broccoli, datatype 6 - mushroom

  let dataType = [1,2,3,4,5,6]

  function startGame(){
    setInterval(gologCrossiants, 800)
    setInterval(goObstaclesLogs, 800)
    setInterval(goObstaclesTwo, 900)
    setInterval(goObstaclesThree, 1000)
    setInterval(goObstaclesFour, 950)
    setInterval(collision, 100)
    setInterval(countdown, 1000)
    getGoals()
  }

  function restartGame(){
    clearInterval(gologCrossiants, 1000)
    clearInterval(goObstaclesLogs, 0)
    clearInterval(goObstaclesTwo, 0)
    clearInterval(goObstaclesThree, 0)
    clearInterval(collision, 0)
  }

  let currentTime = +timer.textContent
  const timerId = 0

  function countdown() {
    currentTime--
    timer.textContent = currentTime
    if(currentTime === 0) {
      clearInterval(timerId)
    }
  }
  // const timerId = setInterval(countdown, 1000)


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
    sarahPosition = currentIndex
    sarahOnPlate()
  }
  // Move moveMyCharacter ends


  function gologCrossiants(){
    if(gologCrossiantsIndex < 11 && gologCrossiantsIndex > 5){
      collisionCheckCrossiants = gologCrossiantsIndex
      squares[gologCrossiantsIndex].classList.remove('logCrossiants')
      gologCrossiantsIndex += 1
      squares[gologCrossiantsIndex+1].classList.add('logCrossiants')
      gologCrossiantsIndex += 1
      squares[gologCrossiantsIndex+1].classList.remove('logCrossiants')
      squares[gologCrossiantsIndex].classList.add('logCrossiants')
      console.log(gologCrossiantsIndex + 'help')
    } else {
      collisionCheckCrossiants = gologCrossiantsIndex
      squares[gologCrossiantsIndex].classList.remove('logCrossiants')
      gologCrossiantsIndex = 6
      squares[gologCrossiantsIndex].classList.add('logCrossiants')
    }
  }

  // goObstaclesLogs starts
  function goObstaclesLogs(){
    if(logIndex < 29 && logIndex > 23){
      collisionCheck = logIndex
      squares[logIndex].classList.add('obstaclesLollipop')
      squares[logIndex].classList.remove('obstaclesLollipop')
      logIndex += 1
      squares[logIndex].classList.add('obstaclesLollipop')
    } else {
      collisionCheck = logIndex
      squares[logIndex].classList.remove('obstaclesLollipop')
      logIndex = 24
      squares[logIndex].classList.add('obstaclesLollipop')
    }
  }


  //goObstaclesTwostarts
  function goObstaclesTwo(){
    if(currentIndexRow2 < 35 && currentIndexRow2 > 29){
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 += 1
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
    } else {
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 = 30
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
    }
  }
  //goObstaclesTwoends

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
      squares[currentIndexRow4].classList.add('obstaclesDonut')
      squares[currentIndexRow4].classList.remove('obstaclesDonut')
      currentIndexRow4 += 1
      squares[currentIndexRow4].classList.add('obstaclesDonut')
    } else {
      collisionCheckRow3 = currentIndexRow4
      squares[currentIndexRow4].classList.remove('obstaclesDonut')
      currentIndexRow4 = 48
      squares[currentIndexRow4].classList.add('obstaclesDonut')
    }
  }
  //goObstaclesThree ends

  // MakeGoals starts
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    vegIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('vegetable')
    // console.log(riskArea[randomIndex].classList)
    riskArea[randomIndex].setAttribute('data-type', typeofVeg)

  }

  function collision(){
    if(sarahPosition === collisionCheckCrossiants || sarahPosition === collisionCheck || sarahPosition === collisionCheckRow2 || sarahPosition === collisionCheckRow3|| sarahPosition === collisionCheckRow4){
      squares[currentIndex].classList.remove(sarah)
      currentIndex = 56
      if(sarah === 'sarahWithVeg'){
        getGoals()
      }
      sarah = 'sarah'
      return squares[currentIndex].classList.add(sarah)
    } if (vegIndex === sarahPosition){
      squares[currentIndex].classList.remove(sarah)
      sarah = 'sarahWithVeg'
      squares[currentIndex].classList.add('sarahWithVeg')
      squares[currentIndex].classList.remove('vegetable')
    }
  }

  // function hitByObjectAudio() {
  //   audio.src = 'audio/hitByObject.wav'
  //   audio.play()
  // }

  function sarahOnPlate(){
    if(squares[currentIndex].classList.contains('home') && squares[currentIndex].classList.contains('sarahWithVeg')) {
      squares[currentIndex].classList.remove('home')
      squares[currentIndex].classList.remove('vegetable')
      squares[currentIndex].classList.remove('sarahWithVeg')
      squares[currentIndex].classList.add('homeWithGem')
      gameCompleted()
      if(home === 'homeWithGem'){
        squares[currentIndex].classList.remove('sarahWithVeg')
      }
      sarahNewPoistion()
      getGoals()
      currentIndex = 57
      sarah = 'sarah'
      squares[currentIndex].classList.remove('vegetable')
      // typeofVeg ++
      return squares[currentIndex].classList.add('sarah')
    } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVeg')) {
      currentIndex = 59
      squares[currentIndex].classList.add('sarah')
      // squares[currentIndex].classList.setAttribute('homeWithGem',[2])

    }
  }

  function sarahNewPoistion(){
    newSarahPosition = squares[currentIndex].classList.add('sarah')
    return newSarahPosition
  }

  function gameCompleted(){
    vegCollected++
    collected.innerHTML = vegCollected
    if(vegCollected === 2){
      setInterval(goObstaclesLogs, 600)
      setInterval(goObstaclesTwo, 800)
      setInterval(goObstaclesThree, 1000)
    }
    if(vegCollected === 6){
      alert('End Game')
    }
  }

  // Need these Braces
})
