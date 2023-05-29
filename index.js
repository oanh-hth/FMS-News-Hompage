const toggleBtn =  document.querySelectorAll('.navbar-toggler')
const navbar = document.getElementById('navbarNav')

toggleBtn.forEach(btn => btn.addEventListener("click", handleToggle))

function handleToggle() {
    navbar.classList.toggle('active')
}

