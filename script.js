/** Yiğit Emre Kalaoğlu - Portfolio */

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") document.documentElement.setAttribute("data-theme", "light");
    if (window.location.hash) history.replaceState(null, null, window.location.pathname);

    const profileCard = document.getElementById("profileCard");
    const toggleArrow = document.getElementById("toggleArrow");
    const themeToggle = document.getElementById("theme-toggle");
    const progressBar = document.getElementById("progressBar");
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksMenu = document.querySelector('.nav-links');
    const body = document.body;

    if (document.getElementById('typed') && typeof Typed !== 'undefined') {
        new Typed('#typed', {
            strings: ['Modern', 'Hızlı', 'İz Bırakan', 'Estetik'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            backDelay: 1500
        });
    }

    themeToggle?.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    });

    if (window.innerWidth > 992) {
        const magneticBtns = document.querySelectorAll(".btn-primary, .btn-secondary, .nav-btn");
        magneticBtns.forEach(btn => {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transition = "transform 0.1s ease-out";
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
            });

            btn.addEventListener("mouseleave", () => {
                btn.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
                btn.style.transform = "translate(0, 0)";
            });
        });
    }

    if (menuToggle && navLinksMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinksMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); 
            body.style.overflow = isActive ? 'hidden' : ''; 
        });

        navLinksMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');

        if (navbar) navbar.classList.toggle("scrolled", scrollY > 50);

        if (window.innerWidth > 992 && profileCard) {
            profileCard.classList.toggle("shrunk", scrollY > 200);
        }

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollY / height) * 100;
        if (progressBar) progressBar.style.width = `${scrolled}%`;

        let current = "";
        document.querySelectorAll("section").forEach(section => {
            if (scrollY >= section.offsetTop - 150) {
                current = section.id;
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => observer.observe(section));

    toggleArrow?.addEventListener("click", () => {
        profileCard?.classList.toggle("shrunk");
    });
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.1 });

document.querySelectorAll("section, .exp-item").forEach(el => observer.observe(el));

    const mainButtons = document.querySelectorAll(".btn-primary, .btn-secondary, .msg-btn");
    
    if (window.innerWidth > 992) {
        mainButtons.forEach(btn => {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transition = "transform 0.15s ease-out";
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
            });

            btn.addEventListener("mouseleave", () => {
                btn.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
                btn.style.transform = "translate(0, 0)";
            });
        });
    }


    window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
document.getElementById("backToTop").onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};