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
  const score = 0
  // const lives  =  document.querySelector('lives')

  let sarah = 'sarah'
  const width = 6
  let vegIndex = 1
  let vegCollected = 0
  let livesBoard = 5
  let randomIndex = 6
  let collisionCheck = 1
  let collisionCheckRow2 = 1
  let collisionCheckRow3 = 0
  let sarahPosition = 48
  let newSarahPosition = 48
  let currentIndex = 49
  let logIndex = 24
  let currentIndexRow2 = 36
  let currentIndexRow3 = 42

  // datatype 1 - radish, datatype 2 - Tomato, datatype 3 - Corn
  // datatype 4 - pumpkin, datatype 5 - broccoli, datatype 6 - mushroom

  // let dataType = [1,2,3,4,5,6]

  function startGame(){
    setInterval(goObstaclesLogs, 800)
    setInterval(goObstaclesTwo, 900)
    setInterval(goObstaclesThree, 1000)
    setInterval(collision, 100)
    getGoals()
  }

  function restartGame(){
    clearInterval(goObstaclesLogs, 0)
    clearInterval(goObstaclesTwo, 0)
    clearInterval(goObstaclesThree, 0)
    clearInterval(collision, 0)
  }

  start.addEventListener('click', startGame)
  restart.addEventListener('click', restartGame)

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

  document.addEventListener('keyup', moveMyCharacter)
  // Move moveMyCharacter ends
  
  // function goObstaclesLogs(){
  //   if(logIndex < 29 && logIndex > 23){
  //     collisionCheck = logIndex
  //     squares[logIndex].classList.add('obstaclesLollipop')
  //     squares[logIndex].classList.remove('obstaclesLollipop')
  //     logIndex += 1
  //     squares[logIndex].classList.add('obstaclesLollipop')
  //   } else {
  //     collisionCheck = logIndex
  //     squares[logIndex].classList.remove('obstaclesLollipop')
  //     logIndex = 24
  //     squares[logIndex].classList.add('obstaclesLollipop')
  //   }
  // }

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
    if(currentIndexRow2 < 41 && currentIndexRow2 > 35){
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 += 1
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
    } else {
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 = 36
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
  //goObstaclesThree ends

  // MakeGoals starts
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    vegIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('vegetable')
    // console.log(riskArea[randomIndex].classList)

  }


  function collision(){
    if(sarahPosition === collisionCheck || sarahPosition === collisionCheckRow2 || sarahPosition === collisionCheckRow3){
      squares[currentIndex].classList.remove(sarah)
      currentIndex = 49
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
      level1Completed()
      if(home === 'homeWithGem'){
        squares[currentIndex].classList.remove('sarahWithVeg')
      }
      sarahNewPoistion()
      getGoals()
      currentIndex = 48
      sarah = 'sarah'
      squares[currentIndex].classList.remove('vegetable')
      return squares[currentIndex].classList.add('sarah')
    } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVeg')) {
      currentIndex = 50
      squares[currentIndex].classList.add('sarah')
      // squares[currentIndex].classList.setAttribute('homeWithGem',[2])

    }
  }

  function sarahNewPoistion(){
    newSarahPosition = squares[currentIndex].classList.add('sarah')
    return newSarahPosition
  }

  function level1Completed(){
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
