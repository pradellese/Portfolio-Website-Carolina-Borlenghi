console.log('Hi! Welcome to my portfolio!')

function menuToggle () {
  const navClassName = document.querySelector('.nav-toggle').className
  if (navClassName === 'nav-toggle') {
    document.querySelector('.nav-toggle').className = 'nav-toggle responsive'
  } else {
    document.querySelector('.nav-toggle').className = 'nav-toggle'
  }
}