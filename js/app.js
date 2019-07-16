document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const scoreBoard = document.querySelector('.scoreBoard')
  const collected = document.querySelector('.collected')
  const lostLives = document.querySelector('lostLives')
  const start = document.querySelector('.start')
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
  let collisionCheckRow3 = 1
  let sarahPosition = 30
  let newSarahPosition = 31
  let currentIndex = 30
  let logIndex = 5
  let currentIndexRow2 = 11
  let currentIndexRow3 = 23


  // datatype 1 - radish
  // datatype 2 - Tomato
  // datatype 3 - Corn
  // datatype 4 - pumpkin
  // datatype 5 - broccoli
  // datatype 6 - mushroom


  // things to be looped through
  // sarah
  // vegetable


  // notes
  // currentIndex = any position on the grid
  // log index = any poistion on row 1 of obstacles
  // log currentIndexRow2/goobstaclesTwo = any poistion on row 2 of obstacles
  // log currentIndexRow3/goobstaclesThree = any poistion on row 3 of obstacles

  let dataType = [1,2,3,4,5,6]

  function startGame(){
    setInterval(goObstaclesLogs, 800)
    setInterval(goObstaclesTwo, 900)
    setInterval(goObstaclesThree, 1000)
    setInterval(collision, 100)
    getGoals()

  }

  start.addEventListener('click', startGame)

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

  // goObstaclesLogs starts
  function goObstaclesLogs(){
    if(logIndex < 11 && logIndex >= 5){
      squares[logIndex].classList.add('obstaclesLollipop')
      squares[logIndex].classList.remove('obstaclesLollipop')
      logIndex += 1
      collisionCheck = logIndex

      squares[logIndex].classList.add('obstaclesLollipop')
    } else {
      squares[logIndex].classList.remove('obstaclesLollipop')
      logIndex = 6
      squares[logIndex].classList.add('obstaclesLollipop')
    }
  }


  //goObstaclesTwostarts
  function goObstaclesTwo(){
    if(currentIndexRow2 < 17 && currentIndexRow2 > 11){
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 += 1
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
    } else {
      squares[currentIndexRow2].classList.remove('obstaclesMilkshake')
      currentIndexRow2 = 12
      squares[currentIndexRow2].classList.add('obstaclesMilkshake')
    }
  }

  //goObstaclesTwoends

  //goObstaclesThree starts
  function goObstaclesThree(){
    if(currentIndexRow3 < 29 && currentIndexRow3 > 23){
      squares[currentIndexRow3].classList.add('obstaclesDonut')
      squares[currentIndexRow3].classList.remove('obstaclesDonut')
      currentIndexRow3 += 1
      collisionCheckRow3 = currentIndexRow3
      console.log(currentIndexRow3, 'row3')
      squares[currentIndexRow3].classList.add('obstaclesDonut')
    } else {
      squares[currentIndexRow3].classList.remove('obstaclesDonut')
      currentIndexRow3 = 24
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
  }


  function collision(){
    if(sarahPosition === collisionCheck || sarahPosition === collisionCheckRow2 || sarahPosition === collisionCheckRow3){
      squares[currentIndex].classList.remove(sarah)
      currentIndex = 30
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
      currentIndex = 32
      sarah = 'sarah'
      squares[currentIndex].classList.remove('vegetable')
      return squares[currentIndex].classList.add('sarah')
    } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVeg')) {
      currentIndex = 35
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
      alert('Well Done')
    }
  }

  // Need these Braces
})
