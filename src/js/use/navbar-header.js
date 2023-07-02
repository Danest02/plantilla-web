const

$hamburguer = document.getElementById("hamburguer"),
$hamburgerDivCenter = document.querySelector(".hamburguer__div-center")

$hamburguer.addEventListener("click", () => {
    $hamburgerDivCenter.classList.toggle("hamburguer--simple")
    document.getElementById("navbar__content").classList.toggle("navbar-content--active")
    document.querySelector("main").classList.toggle("filter-blur")

})
