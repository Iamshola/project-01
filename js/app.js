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
  let collisionCheck1 = 1
  let collisionCheck2 = 1
  let molePoistion = 30
  let currentIndex = 30
  let homeIndex = 1
  const width = 6
  let logIndex = 6
  let currentIndex2 = 12
  let currentIndex3 = 24
  // const stop = false


  // const stop = false
  // if on click run functionn essentially

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
  function goObstaclesLog2(){
    if(currentIndex2 === 18){
      currentIndex2 = 12
    } else if (currentIndex2 >= 12){
      squares[currentIndex2].classList.add('obstacles')
      collisionCheck1 = currentIndex2
      currentIndex2++
      setTimeout(() => squares[currentIndex2-1].classList.remove('obstacles'), 750)
    }
  }
  setInterval(goObstaclesLog2, 1000)
  //goObstaclesLog2 ends

  //goObstaclesThree starts
  function goObstaclesThree(){
    if(currentIndex3 === 30){
      currentIndex3 = 24
    } else if (currentIndex3 >= 24){
      squares[currentIndex3].classList.add('obstacles')
      collisionCheck2 = currentIndex3
      currentIndex3++
      setTimeout(() => squares[currentIndex3-1].classList.remove('obstacles'), 750)
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
    // squares[currentIndex].classList.add(mole)

  }
  getGoals()

  function collision(){
    if(molePoistion === collisionCheck || molePoistion === collisionCheck1 || molePoistion === collisionCheck2){
      squares[currentIndex].classList.remove(mole)
      currentIndex = 30
      if(mole === 'gemwithveg'){
        // squares[gemIndex].classList.remove('gem')
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

  // function moleOnPlate(){
  //   homeIndex = 3
  //   console.log(homeIndex)
  //   if(molePoistion === homeIndex){
  //     squares[homeIndex].classList.remove('home')
  //     squares[homeIndex].classList.add('homeWithGem')
  //   }
  //   reset()
  // }
  // moleOnPlate()




  // Need these Braces
})
