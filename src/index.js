
import { Router } from "./router.js";


const router = new Router();

router.add("/", "./pages/home.html")
router.add("/about", "./pages/about.html")
router.add("/projects", "./pages/projects.html")
router.add("/contact", "./pages/contact.html")
router.add(404,"./pages/404.html")


router.handle();

window.onpopstate = () => router.handle()
window.route = () => router.route()


AOS.init();

const btnMenu = document.getElementById('btnMenu');


btnMenu.addEventListener('click' , () => {
    

    document.querySelector('.hamburguer').classList.toggle('is-active');
    document.querySelector('.mobile-nav').classList.toggle('is-active');


})

const mobLinks = document.querySelectorAll('a')


mobLinks.forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelector('.hamburguer').classList.remove('is-active');
        document.querySelector('.mobile-nav').classList.remove('is-active');
    })
})



