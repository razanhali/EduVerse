/* =====================================
   EduVerse JavaScript
===================================== */


// ================= Loader =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }

});





// ================= Mobile Menu =================


const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navbar.classList.contains("active")) {

                icon.classList.replace("fa-bars", "fa-xmark");

            } else {

                icon.classList.replace("fa-xmark", "fa-bars");

            }

        }

    });

    // Close menu when clicking link
    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        });

    });

}







// ================= Dark Mode =================


const darkBtn = document.getElementById("darkMode");


if(darkBtn){


    darkBtn.addEventListener("click",()=>{


        document.body.classList.toggle("dark");


        const icon = darkBtn.querySelector("i");


        if(document.body.classList.contains("dark")){


            icon.classList.replace(
                "fa-moon",
                "fa-sun"
            );


            localStorage.setItem(
                "theme",
                "dark"
            );


        }else{


            icon.classList.replace(
                "fa-sun",
                "fa-moon"
            );


            localStorage.setItem(
                "theme",
                "light"
            );

        }


    });



}





// Save Dark Mode


if(localStorage.getItem("theme")==="dark"){


    document.body.classList.add("dark");


    if(darkBtn){

        darkBtn.querySelector("i")
        .classList.replace(
            "fa-moon",
            "fa-sun"
        );

    }


}









// ================= Scroll Top Button =================


const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}






// ================= Counter Animation =================


const counters =
document.querySelectorAll(".counter");


let started = false;



function startCounter(){


    if(started) return;


    counters.forEach(counter=>{


        let target =
        Number(counter.dataset.target);


        let count=0;


        let speed =
        target / 100;



        let update = ()=>{


            count += speed;



            if(count < target){


                counter.innerText =
                Math.floor(count).toLocaleString();


                requestAnimationFrame(update);



            }else{


                counter.innerText =
                target.toLocaleString()+"+";


            }



        };


        update();



    });



    started=true;


}



window.addEventListener("scroll",()=>{


    const stats =
    document.querySelector(".stats");


    if(stats){


        let position =
        stats.getBoundingClientRect().top;


        if(position < window.innerHeight -100){


            startCounter();


        }


    }


});









// ================= Course Search & Filter =================



const searchInput =
document.getElementById("searchInput");


const categoryFilter =
document.getElementById("categoryFilter");


const levelFilter =
document.getElementById("levelFilter");



const courses =
document.querySelectorAll(".course-card");




function filterCourses(){


    let searchValue =
    searchInput.value.toLowerCase();


    let category =
    categoryFilter.value;


    let level =
    levelFilter.value;



    courses.forEach(course=>{


        let title =
        course.querySelector("h3")
        .innerText
        .toLowerCase();



        let courseCategory =
        course.dataset.category;



        let courseLevel =
        course.dataset.level;



        let matchSearch =
        title.includes(searchValue);



        let matchCategory =
        category==="all" ||
        courseCategory.includes(category);



        let matchLevel =
        level==="all" ||
        courseLevel===level;




        if(
            matchSearch &&
            matchCategory &&
            matchLevel
        ){


            course.style.display="block";


        }else{


            course.style.display="none";


        }



    });



}



if(searchInput){


    searchInput.addEventListener(
        "input",
        filterCourses
    );


}



if(categoryFilter){


    categoryFilter.addEventListener(
        "change",
        filterCourses
    );


}



if(levelFilter){


    levelFilter.addEventListener(
        "change",
        filterCourses
    );


}









// ================= Favorite Courses =================



const favorites =
document.querySelectorAll(".favorite");



favorites.forEach(button=>{


    button.addEventListener("click",()=>{


        button.classList.toggle("active");


        const icon =
        button.querySelector("i");



        if(button.classList.contains("active")){


            icon.classList.replace(
                "fa-regular",
                "fa-solid"
            );



            showToast(
                "Course added to favorites ❤️"
            );


        }else{


            icon.classList.replace(
                "fa-solid",
                "fa-regular"
            );


        }


    });



});









// ================= FAQ Accordion =================


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


    const btn =
    item.querySelector(".faq-question");



    btn.addEventListener("click",()=>{


        faqItems.forEach(other=>{


            if(other !== item){


                other.classList.remove(
                    "active"
                );


            }


        });



        item.classList.toggle("active");



    });



});









// ================= Newsletter =================



// ================= Newsletter Subscription =================

const newsletter = document.getElementById("newsletterForm");

if (newsletter) {

    newsletter.addEventListener("submit", (e) => {

        e.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {

            showToast("Successfully subscribed 🎉");

            newsletter.reset();

        } else {

            showToast("Please enter a valid email address");

        }

    });

}



// ================= Enroll Buttons =================



const enrollButtons =
document.querySelectorAll(
".enroll-btn"
);



enrollButtons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        showToast(
        "Successfully enrolled 🎓"
        );


    });



});









// ================= Toast Function =================


function showToast(message){


    let toast =
    document.querySelector(".toast");



    if(!toast){


        toast =
        document.createElement("div");


        toast.className="toast";


        document.body.appendChild(toast);


    }



    toast.innerText =
    message;



    toast.classList.add(
        "show"
    );



    setTimeout(()=>{


        toast.classList.remove(
            "show"
        );


    },2500);



}









// ================= Scroll Animation =================



const hiddenElements =
document.querySelectorAll(
".category-card,.course-card,.feature-card,.instructor-card,.review-card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},
{
    threshold:0.15
}
);



hiddenElements.forEach(el=>{


    el.classList.add(
        "hidden"
    );


    observer.observe(el);


});








// ================= Active Navbar =================


const sections =
document.querySelectorAll(
"section"
);



const navLinks =
document.querySelectorAll(
"nav a"
);



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


    const top =
    section.offsetTop - 150;


    if(scrollY >= top){

        current =
        section.getAttribute("id");

    }


});



navLinks.forEach(link=>{


    link.classList.remove(
        "active"
    );


    if(
        link.getAttribute("href")
        === "#"+current
    ){

        link.classList.add(
            "active"
        );

    }


});


});