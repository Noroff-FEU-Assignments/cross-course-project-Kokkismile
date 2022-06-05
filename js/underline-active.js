const activePage = window.location;
const navLinks = document.querySelectorAll("nav a").forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
})