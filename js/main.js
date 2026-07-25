/* =====================================================
   UDAY MAHAVIDYALAY
   MAIN JAVASCRIPT
===================================================== */



// ================= MOBILE MENU =================



const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});


}






// Close mobile menu after clicking link


const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});








// ================= STICKY NAVBAR =================



const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";


    }

    else{


        navbar.style.boxShadow="none";


    }


});






// ================= ADMISSION MODAL =================

const modal = document.querySelector(".admission-modal");

const openModalButtons =
document.querySelectorAll(".open-modal");

const closeModal =
document.querySelector(".close-modal");

openModalButtons.forEach(button=>{

button.addEventListener("click",()=>{


    const image =
    button.getAttribute("data-image");


    const modalImage =
    document.getElementById("modal-image");


    const downloadImage =
    document.getElementById("download-image");


    if(modalImage){

        modalImage.src = image;

    }


    if(downloadImage){

        downloadImage.href = image;

    }


    modal.style.display="flex";


    document.body.style.overflow="hidden";


});

});

if(closeModal){

closeModal.addEventListener("click",()=>{

    modal.style.display="none";

    document.body.style.overflow="auto";

});

}

if(modal){

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

        document.body.style.overflow="auto";

    }

});

}





// Close modal when clicking outside



if(modal){


modal.addEventListener("click",(e)=>{


    if(e.target === modal){


        modal.style.display="none";


        document.body.style.overflow="auto";


    }


});


}









// ================= FAQ ACCORDION =================



const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const button =
item.querySelector("button");


const answer =
item.querySelector(".faq-answer");



answer.style.display="none";



button.addEventListener("click",()=>{


    
    const isOpen =
    answer.style.display==="block";



    // close all


    document.querySelectorAll(".faq-answer")
    .forEach(content=>{


        content.style.display="none";


    });




    if(!isOpen){


        answer.style.display="block";


    }



});



});









// ================= SCROLL REVEAL =================



const revealElements =
document.querySelectorAll(
".section, .premium-card, .course-card, .faculty-card, .news-card, .contact-card"
);




const revealOnScroll = ()=>{


revealElements.forEach(element=>{


const elementTop =
element.getBoundingClientRect().top;



const windowHeight =
window.innerHeight;




if(elementTop < windowHeight - 100){


element.classList.add("reveal");


setTimeout(()=>{


element.classList.add("active");


},100);



}



});



};



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









// ================= SMOOTH SCROLL =================



document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}



});


});



// ================= COURSE DETAILS MODAL =================


const courseButtons = document.querySelectorAll(".course-btn");


const courseModal = document.querySelector(".course-modal");


const closeCourseModal = document.querySelector(".close-course-modal");


const courseTitle = document.getElementById("course-title");


const courseDescription = document.getElementById("course-description");


const courseHighlights = document.getElementById("course-highlights");


const courseCareer = document.getElementById("course-career");





const courseData = {


    bsc: {

        title:"B.Sc.",

        description:
        "Bachelor of Science is an undergraduate program focused on developing scientific knowledge, analytical thinking, and practical learning through various science disciplines.",


        highlights:[
            "Practical laboratory learning",
            "Strong foundation in scientific concepts",
            "Skill development through academic activities"
        ],


        career:
        "Students can explore opportunities in education, research, laboratories, government sectors, and higher studies."

    },





    "home-science": {


        title:"B.Sc. Home Science",


        description:
        "B.Sc. Home Science is a multidisciplinary program focusing on nutrition, human development, lifestyle management, and applied sciences.",


        highlights:[
            "Nutrition and health studies",
            "Practical skill development",
            "Knowledge of human development and lifestyle sciences"
        ],


        career:
        "Career opportunities include nutrition, wellness, education, community development, and professional services."

    },





    "fashion-design": {


        title:"B.A. Fashion Design",


        description:
        "B.A. Fashion Design is a creative undergraduate program designed to develop design skills, creativity, and knowledge of the fashion industry.",


        highlights:[
            "Fashion illustration and design techniques",
            "Creative innovation",
            "Industry-oriented learning"
        ],


        career:
        "Students can pursue careers in fashion design, apparel industry, styling, entrepreneurship, and creative fields."

    }


};





courseButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const course =
        courseData[button.dataset.course];



        courseTitle.innerText =
        course.title;



        courseDescription.innerText =
        course.description;



        courseHighlights.innerHTML="";



        course.highlights.forEach(item=>{


            courseHighlights.innerHTML +=

            `<li>${item}</li>`;


        });



        courseCareer.innerText =
        course.career;



        courseModal.style.display="flex";


        document.body.style.overflow="hidden";


    });


});






closeCourseModal.addEventListener("click",()=>{


    courseModal.style.display="none";


    document.body.style.overflow="auto";


});

// ================= GALLERY SLIDER =================


const galleryImages = document.querySelectorAll(".gallery-img");


const galleryModal = document.querySelector(".gallery-modal");


const galleryPreview = document.getElementById("gallery-preview");


const galleryClose = document.querySelector(".gallery-close");


const galleryNext = document.querySelector(".gallery-next");


const galleryPrev = document.querySelector(".gallery-prev");



let currentImageIndex = 0;



// Store image sources

const gallerySources = [];



galleryImages.forEach((image, index) => {


    gallerySources.push(image.src);



    image.addEventListener("click", () => {


        currentImageIndex = index;


        galleryPreview.src = gallerySources[currentImageIndex];


        galleryModal.style.display = "flex";


        document.body.style.overflow = "hidden";


    });


});






// NEXT IMAGE


galleryNext.addEventListener("click", () => {


    currentImageIndex++;



    if(currentImageIndex >= gallerySources.length){

        currentImageIndex = 0;

    }



    galleryPreview.src = gallerySources[currentImageIndex];


});







// PREVIOUS IMAGE


galleryPrev.addEventListener("click", () => {


    currentImageIndex--;



    if(currentImageIndex < 0){

        currentImageIndex = gallerySources.length - 1;

    }



    galleryPreview.src = gallerySources[currentImageIndex];


});







// CLOSE BUTTON


galleryClose.addEventListener("click", () => {


    galleryModal.style.display = "none";


    document.body.style.overflow = "auto";


});







// CLOSE BY CLICKING OUTSIDE IMAGE


galleryModal.addEventListener("click", (event) => {


    if(event.target === galleryModal){


        galleryModal.style.display = "none";


        document.body.style.overflow = "auto";


    }


});







// KEYBOARD CONTROLS


document.addEventListener("keydown", (event) => {


    if(galleryModal.style.display === "flex"){


        if(event.key === "ArrowRight"){


            galleryNext.click();


        }



        if(event.key === "ArrowLeft"){


            galleryPrev.click();


        }



        if(event.key === "Escape"){


            galleryClose.click();


        }


    }


});

// ================= GALLERY MOBILE SWIPE SUPPORT =================


let touchStartX = 0;

let touchEndX = 0;




galleryPreview.addEventListener("touchstart", (event)=>{


    touchStartX = event.changedTouches[0].screenX;


});





galleryPreview.addEventListener("touchend", (event)=>{


    touchEndX = event.changedTouches[0].screenX;



    handleSwipe();


});







function handleSwipe(){


    const swipeDistance = touchEndX - touchStartX;



    // Swipe Left = Next Image

    if(swipeDistance < -50){


        galleryNext.click();


    }



    // Swipe Right = Previous Image

    if(swipeDistance > 50){


        galleryPrev.click();


    }


}


// ================= NEWS MODAL =================


const newsButtons =
document.querySelectorAll(".news-read-more");


const newsModal =
document.querySelector(".news-modal");


const closeNewsModal =
document.querySelector(".close-news-modal");


const newsTitle =
document.getElementById("news-title");


const newsContentBox =
document.getElementById("news-content");



newsButtons.forEach(button=>{


button.addEventListener("click",(e)=>{


e.preventDefault();


newsTitle.innerText =
button.dataset.title;



if(newsContent[button.dataset.title]){


    newsContentBox.innerHTML =
    newsContent[button.dataset.title];


}
else{


    newsContentBox.innerHTML =
    button.dataset.content;


}



newsModal.style.display="flex";


document.body.style.overflow="hidden";


});


});



if(closeNewsModal){


closeNewsModal.addEventListener("click",()=>{


newsModal.style.display="none";


document.body.style.overflow="auto";


});


}
// ================= NEWS IMAGES =================


const newsContent = {


    "Student Activities": `


        <div class="news-images">


            <img 
            src="./assets/images/activities/activity1.jpeg"
            alt="Student Activity 1">


            <img 
            src="./assets/images/activities/activity2.jpeg"
            alt="Student Activity 2">


            <img 
            src="./assets/images/activities/activity3.jpeg"
            alt="Student Activity 3">


            <img 
            src="./assets/images/activities/activity4.jpeg"
            alt="Student Activity 4">


        </div>



        <p>

        Students participate in academic programs,
        cultural events, workshops, seminars, and skill
        development activities at Uday Mahavidyalay.

        </p>


    `


};