const clickMobile = document.getElementById('menu-icon')

function changeMenu () {
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativo');
}


clickMobile.addEventListener('click', changeMenu)


