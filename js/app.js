document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const obstacles = document.querySelector('.obstacles')
  const riskArea = document.querySelectorAll('.riskArea')
  const home = document.querySelectorAll('home')
  const score = document.querySelector('score')

  let mole = 'mole'
  let gemIndex = 1
  let randomIndex = 6
  let collisionCheck = 1
  let collisionCheckRow2 = 1
  let collisionCheckRow3 = 1
  let molePoistion = 30
  let currentIndex = 30
  let homeIndex = 1
  const width = 6
  let logIndex = 6
  let currentIndexRow2 = 12
  let currentIndexRow3 = 24

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
    if(logIndex === 12){
      logIndex = 6
    } else if (logIndex >= 6){
      squares[logIndex].classList.add('obstacles')
      collisionCheck = logIndex
      logIndex++
      setTimeout(() => squares[logIndex-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesLogs, 1000)
  // goObstaclesLogs ends

  //goObstaclesLog2 starts
  function goObstaclesTwo(){
    if(currentIndexRow2 === 18){
      currentIndexRow2 = 12
    } else if (currentIndexRow2 >= 12){
      squares[currentIndexRow2].classList.add('obstacles')
      collisionCheckRow2 = currentIndexRow2
      currentIndexRow2++
      setTimeout(() => squares[currentIndexRow2-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesTwo, 1000)
  //goObstaclesLog2 ends

  //goObstaclesThree starts
  function goObstaclesThree(){
    if(currentIndexRow3 === 30){
      currentIndexRow3 = 24
    } else if (currentIndexRow3 >= 24){
      squares[currentIndexRow3].classList.add('obstacles')
      collisionCheckRow3 = currentIndexRow3
      currentIndexRow3++
      setTimeout(() => squares[currentIndexRow3-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesThree, 1000)
  //goObstaclesTwo ends

  // MakeGoals starts
  function getGoals(){
    randomIndex = Math.floor(Math.random() * riskArea.length)
    const randomriskArea = riskArea[randomIndex]
    gemIndex = +(randomriskArea.innerHTML)
    riskArea[randomIndex].classList.add('gem')
    if(squares[currentIndex].classList.contains('gem')) {
      // squares[currentIndex].classList.remove(mole)
    }
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
    if(squares[currentIndex].classList.contains('home')) {
      squares[currentIndex].classList.remove('home')
      squares[currentIndex].classList.add('homeWithGem')
      console.log('there')
    }
    moleNewPoistion()

  }

  function moleNewPoistion(){







  }

  // Need these Braces
})
