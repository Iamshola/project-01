document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const obstacles = document.querySelector('.obstacles')

  // Move moveMyCharacter starts
  let currentIndex = 30
  const width = 6
  //
  function moveMyCharacter(e) {
    squares[currentIndex].classList.remove('mole')

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

    if(squares[currentIndex].classList.contains('mole')) {
      squares[currentIndex].classList.remove('mole')
    }
    squares[currentIndex].classList.add('mole')
  }

  document.addEventListener('keyup', moveMyCharacter)
  // Move moveMyCharacter ends

  // goObstaclesLogs starts
  // let currentIndex1 = 6
  // function goObstaclesLogs(){
  //   if(currentIndex1 === 12){
  //     squares[currentIndex1 - width].classList.add('obstacles')
  //     currentIndex1 = 6
  //   } else if (currentIndex1 >= 6){
  //     squares[currentIndex1].classList.add('obstacles')
  //     currentIndex1++
  //     setTimeout(() => squares[currentIndex1-1].classList.remove('obstacles'), 750)
  //   }
  // }
  // setInterval(goObstaclesLogs, 500)
  // goObstaclesLogs ends

  //goObstaclesLog2 starts
  // let currentIndex2 = 12
  // function goObstaclesLog2(){
  //   if(currentIndex2 === 18){
  //     squares[currentIndex2 - width].classList.add('obstacles')
  //     currentIndex2 = 12
  //   } else if (currentIndex2 >= 12){
  //     squares[currentIndex2].classList.add('obstacles')
  //     currentIndex2++
  //     setTimeout(() => squares[currentIndex2-1].classList.remove('obstacles'), 750)
  //   }
  // }
  // setInterval(goObstaclesLog2, 1000)
  //goObstaclesLog2 ends

  //goObstaclesThree starts
  // let currentIndex3 = 12
  // function goObstaclesThree(){
  //   if(currentIndex3 === 18){
  //     squares[currentIndex3 - width].classList.add('obstacles')
  //     currentIndex3 = 12
  //   } else if (currentIndex3 >= 12){
  //     squares[currentIndex3].classList.add('obstacles')
  //     currentIndex3++
  //     setTimeout(() => squares[currentIndex3-1].classList.remove('obstacles'), 750)
  //   }
  // }
  // setInterval(goObstaclesThree, 1000)
  //goObstaclesTwo ends












  // Need these Braces
})
