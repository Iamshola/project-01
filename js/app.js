document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const obstacles = document.querySelector('.obstacles')


  // Move moveMyCharacter
  let currentIndex = 30
  const width = 6

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

  // function moveObstacles(){
  //
  // }


  // Need Braces

})
