document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const obstacles = document.querySelector('.obstacles')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const scoreBoard = document.querySelector('.scoreBoard')
  const collected = document.querySelector('.collected')
  let score = 0

  let mole = 'mole'
  // let home = 'home'
  // let gemwithveg
  let gemIndex = 1
  let vegCollected = 0
  let randomIndex = 6
  let collisionCheck = 1
  let collisionCheckRow2 = 1
  let collisionCheckRow3 = 1
  let molePoistion = 30
  let newMolePoistion = 31
  let currentIndex = 30
  // const homeIndex = 1
  const width = 6
  let logIndex = 5
  let currentIndexRow2 = 11
  let currentIndexRow3 = 23

  // notes
  // currentIndex = any position on the grid
  // log index = any poistion on row 1 of obstacles
  // log currentIndexRow2/goobstaclesTwo = any poistion on row 2 of obstacles
  // log currentIndexRow3/goobstaclesThree = any poistion on row 3 of obstacles

  // Move moveMyCharacter starts
  function moveMyCharacter(e) {
    squares[currentIndex].classList.remove(mole)
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
    if(squares[currentIndex].classList.contains(mole)) {
      squares[currentIndex].classList.remove(mole)
    }
    squares[currentIndex].classList.add(mole)
    molePoistion = currentIndex
    moleOnPlate()
  }

  document.addEventListener('keyup', moveMyCharacter)
  // Move moveMyCharacter ends

  // goObstaclesLogs starts
  function goObstaclesLogs(){
    if(logIndex < 12 && logIndex > 5){
      squares[logIndex].classList.add('obstacles')
      squares[logIndex].classList.remove('obstacles')
      logIndex += 1
      collisionCheck = logIndex
      squares[logIndex].classList.add('obstacles')
    } else {
      squares[logIndex].classList.remove('obstacles')
      logIndex = 6
      squares[logIndex].classList.add('obstacles')
    }
  }
  setInterval(goObstaclesLogs, 500)


  //goObstaclesLog2 starts
  function goObstaclesTwo(){
    if(currentIndexRow2 < 17 && currentIndexRow2 > 11){
      squares[currentIndexRow2].classList.add('obstacles')
      squares[currentIndexRow2].classList.remove('obstacles')
      currentIndexRow2 += 1
      collisionCheckRow2 = currentIndexRow2
      squares[currentIndexRow2].classList.add('obstacles')
    } else {
      squares[currentIndexRow2].classList.remove('obstacles')
      currentIndexRow2 = 12
      squares[currentIndexRow2].classList.add('obstacles')
      // setTimeout(() => squares[currentIndexRow3-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesTwo, 500)
  //goObstaclesLog2 ends

  //goObstaclesThree starts
  function goObstaclesThree(){
    if(currentIndexRow3 < 29 && currentIndexRow3 > 23){
      squares[currentIndexRow3].classList.add('obstacles')
      squares[currentIndexRow3].classList.remove('obstacles')
      currentIndexRow3 += 1
      collisionCheckRow3 = currentIndexRow3
      squares[currentIndexRow3].classList.add('obstacles')
    } else {
      squares[currentIndexRow3].classList.remove('obstacles')
      currentIndexRow3 = 24
      squares[currentIndexRow3].classList.add('obstacles')
      // setTimeout(() => squares[currentIndexRow3-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesThree, 500)
  //goObstaclesThree ends

  // MakeGoals starts
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    gemIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('gem')
  }
  getGoals()

  function collision(){
    if(molePoistion === collisionCheck || molePoistion === collisionCheckRow2 || molePoistion === collisionCheckRow3){
      squares[currentIndex].classList.remove(mole)
      currentIndex = 30
      if(mole === 'gemwithveg'){
        getGoals()
      }
      mole = 'mole'
      return squares[currentIndex].classList.add(mole)
    } if (gemIndex === molePoistion){
      squares[currentIndex].classList.remove(mole)
      mole = 'gemwithveg'
      squares[currentIndex].classList.add('gemwithveg')
      squares[currentIndex].classList.remove('gem')
    }
  }
  setInterval(collision, 250)

  function moleOnPlate(){
    if(squares[currentIndex].classList.contains('home') && squares[currentIndex].classList.contains('gemwithveg')) {
      squares[currentIndex].classList.remove('home')
      squares[currentIndex].classList.remove('gem')
      squares[currentIndex].classList.remove('gemwithveg')
      squares[currentIndex].classList.add('homeWithGem')
      gameCompleted()
      if(home === 'homeWithGem'){
        squares[currentIndex].classList.remove('gemwithveg')
      }
      moleNewPoistion()
      getGoals()
      currentIndex = 32
      mole = 'mole'
      squares[currentIndex].classList.remove('gem')
      return squares[currentIndex].classList.add('mole')
    } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('gemwithveg')) {
      currentIndex = 35
      squares[currentIndex].classList.add('mole')
    }
  }

  function moleNewPoistion(){
    newMolePoistion = squares[currentIndex].classList.add('mole')
    return newMolePoistion
  }

  function gameCompleted(){
    vegCollected++
    collected.innerHTML = vegCollected
    if(vegCollected === 6){
      console.log('Well done, completed!')
    }
  }

  // Need these Braces
})
