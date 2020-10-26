// Burger Menu

let burger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation");
let title = document.querySelector(".title");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
let closeA = document.querySelector('.close-a');

if (burger) {
    burger.addEventListener("click", function() {
        overlay.classList.toggle("enabled");
        navigation.classList.toggle("visible");
        burger.classList.toggle("burger-active");
        title.classList.toggle("hidden");
        body.classList.toggle('no-scroll');
    });

    const closeBurger = (e) => {
        if (e.target == overlay || e.target == closeA) {
            overlay.classList.remove("enabled");
            navigation.classList.remove("visible");
            burger.classList.remove("burger-active");
            title.classList.remove("hidden");
            body.classList.remove('no-scroll');
        }
    };

    body.addEventListener("click", closeBurger);
}
// Popup
const sdf = () => {
    let petItems = document.querySelectorAll(".pet-item");
    let popup = document.querySelector(".popup");


    const petDesc = [{
            name: "Jennifer",
            img: "assets/pets-jennifer.png",
            type: "Dog",
            breed: "Labrador",
            description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            age: "2 months",
            inoculations: ["none"],
            diseases: ["none"],
            parasites: ["none"],
        },
        {
            name: "Sophia",
            img: "assets/pets-katrine.png",
            type: "Dog",
            breed: "Shih tzu",
            description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            age: "1 month",
            inoculations: ["parvovirus"],
            diseases: ["none"],
            parasites: ["none"],
        },
        {
            name: "Woody",
            img: "assets/pets-woody.png",
            type: "Dog",
            breed: "Golden Retriever",
            description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            age: "3 years 6 months",
            inoculations: ["adenovirus", "distemper"],
            diseases: ["right back leg mobility reduced"],
            parasites: ["none"],
        },
        {
            name: "Scarlett",
            img: "assets/pets-scarlet.png",
            type: "Dog",
            breed: "Jack Russell Terrier",
            description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            age: "3 months",
            inoculations: ["parainfluenza"],
            diseases: ["none"],
            parasites: ["none"],
        },
        {
            name: "Katrine",
            img: "assets/pets-katrine (2).png",
            type: "Cat",
            breed: "British Shorthair",
            description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            age: "6 months",
            inoculations: ["panleukopenia"],
            diseases: ["none"],
            parasites: ["none"],
        },
        {
            name: "Timmy",
            img: "assets/pets-timmy.png",
            type: "Cat",
            breed: "British Shorthair",
            description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            age: "2 years 3 months",
            inoculations: ["calicivirus", "viral rhinotracheitis"],
            diseases: ["kidney stones"],
            parasites: ["none"],
        },
        {
            name: "Freddie",
            img: "assets/pets-katrine (1).png",
            type: "Cat",
            breed: "British Shorthair",
            description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            age: "2 months",
            inoculations: ["rabies"],
            diseases: ["none"],
            parasites: ["none"],
        },
        {
            name: "Charly",
            img: "assets/pets-charly.png",
            type: "Dog",
            breed: "Jack Russell Terrier",
            description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            age: "8 years",
            inoculations: ["bordetella bronchiseptica", "leptospirosis"],
            diseases: ["deafness", "blindness"],
            parasites: ["lice", "fleas"],
        },
    ];

    for (let i = 0; i < petDesc.length; i++) {
        for (let petItem of petItems) {
            petItem.addEventListener("click", function() {
                popup.classList.add("popup-visible");
                overlay.classList.add("enabled");
                body.classList.add('no-scroll');
                console.log('asd')
                if (petItem.querySelector("p").textContent == petDesc[i].name) {
                    popup.querySelector("h2").innerHTML = petDesc[i].name;
                    popup.querySelector(
                        "h3"
                    ).innerHTML = `${petDesc[i].type} - ${petDesc[i].breed}`;
                    popup.querySelector("p").innerHTML = `${petDesc[i].description}`;
                    popup.querySelector(
                        ".age"
                    ).innerHTML = `<b>Age:</b> ${petDesc[i].age}`;
                    popup.querySelector(
                        ".inoculations"
                    ).innerHTML = `<b>Inoculations:</b> ${petDesc[i].inoculations.join(
            ", "
          )}`;
                    popup.querySelector(
                        ".diseases"
                    ).innerHTML = `<b>Diseases:</b> ${petDesc[i].diseases.join(", ")}`;
                    popup.querySelector(
                        ".parasites"
                    ).innerHTML = `<b>Parasites:</b> ${petDesc[i].parasites.join(", ")}`;
                    popup.querySelector("img").setAttribute("src", `${petDesc[i].img}`);
                }
            });
        }
    }

    body.addEventListener(
        "click",
        (closePopup = (e) => {
            if (e.target == overlay || e.target === document.querySelector('.close-button')) {
                overlay.classList.remove("enabled");
                popup.classList.remove("popup-visible");
                body.classList.remove('no-scroll');
            }
        })
    );


overlay.addEventListener('mouseover', function() {
    document.querySelector('.close-button').style.background = '#fddcc4'
})

overlay.addEventListener('mouseout', function() {
    document.querySelector('.close-button').style.background = 'none'
})

document.querySelector('.close-button').addEventListener('mouseover', function() {
    document.querySelector('.close-button').style.background = '#fddcc4'
})

document.querySelector('.close-button').addEventListener('mouseout', function() {
    document.querySelector('.close-button').style.background = 'none'
})

    setTimeout(sdf, 1000)
}

sdf()


// Pagination

let counter = document.querySelector('.count-button');
let nextPage = document.querySelector('#next');
let prevPage = document.querySelector('#prev');
let lastPage = document.querySelector('#last-page');
let firstPage = document.querySelector('#first-page');
let position = 0;

const paginate = () => {

    if (+counter.innerHTML == 1) {
        firstPage.setAttribute("disabled", "disabled");
        prevPage.setAttribute("disabled", "disabled");
    }



    document.querySelector('.slider').addEventListener('click', function() {
        if (+counter.innerHTML == 1) {
            firstPage.setAttribute("disabled", "disabled");
            prevPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML > 1) {
            firstPage.removeAttribute("disabled", "disabled");
            prevPage.removeAttribute("disabled", "disabled");
        }

        if (+counter.innerHTML == 6) {
            lastPage.setAttribute("disabled", "disabled");
            nextPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML < 6) {
            lastPage.removeAttribute("disabled", "disabled");
            nextPage.removeAttribute("disabled", "disabled");
        }
    })


    document.querySelector('#next').addEventListener("click", function() {
        if (+counter.innerHTML < 6) {
            position -= 932;
            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) + 1;
        }


    })

    document.querySelector('#prev').addEventListener("click", function() {
        if (+counter.innerHTML > 1) {
            position += 932;

            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) - 1;
        }


    })

    lastPage.addEventListener('click', function() {
        position = -4660;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 6;


    })

    firstPage.addEventListener('click', function() {
        position = 0;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 1;


    })



}

const paginateSmall = () => {
    if (+counter.innerHTML == 1) {
        firstPage.setAttribute("disabled", "disabled");
        prevPage.setAttribute("disabled", "disabled");
    }



    document.querySelector('.slider').addEventListener('click', function() {
        if (+counter.innerHTML == 1) {
            firstPage.setAttribute("disabled", "disabled");
            prevPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML > 1) {
            firstPage.removeAttribute("disabled", "disabled");
            prevPage.removeAttribute("disabled", "disabled");
        }

        if (+counter.innerHTML == 8) {
            lastPage.setAttribute("disabled", "disabled");
            nextPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML < 8) {
            lastPage.removeAttribute("disabled", "disabled");
            nextPage.removeAttribute("disabled", "disabled");
        }
    })


    document.querySelector('#next').addEventListener("click", function() {
        if (+counter.innerHTML < 8) {
            position -= 1398;
            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) + 1;
        }


    })

    document.querySelector('#prev').addEventListener("click", function() {
        if (+counter.innerHTML > 1) {
            position += 1398;

            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) - 1;
        }


    })

    lastPage.addEventListener('click', function() {
        position = -9786;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 8;


    })

    firstPage.addEventListener('click', function() {
        position = 0;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 1;


    })


}


const paginateMobile = () => {
    if (+counter.innerHTML == 1) {
        firstPage.setAttribute("disabled", "disabled");
        prevPage.setAttribute("disabled", "disabled");
    }



    document.querySelector('.slider').addEventListener('click', function() {
        if (+counter.innerHTML == 1) {
            firstPage.setAttribute("disabled", "disabled");
            prevPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML > 1) {
            firstPage.removeAttribute("disabled", "disabled");
            prevPage.removeAttribute("disabled", "disabled");
        }

        if (+counter.innerHTML == 16) {
            lastPage.setAttribute("disabled", "disabled");
            nextPage.setAttribute("disabled", "disabled");
        } else if (+counter.innerHTML < 16) {
            lastPage.removeAttribute("disabled", "disabled");
            nextPage.removeAttribute("disabled", "disabled");
        }
    })


    document.querySelector('#next').addEventListener("click", function() {
        if (+counter.innerHTML < 16) {
            position -= 1398;
            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) + 1;
        }


    })

    document.querySelector('#prev').addEventListener("click", function() {
        if (+counter.innerHTML > 1) {
            position += 1398;

            document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`;
            counter.innerHTML = Number(counter.innerHTML) - 1;
        }


    })

    lastPage.addEventListener('click', function() {
        position = -20970;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 16;


    })

    firstPage.addEventListener('click', function() {
        position = 0;
        document.querySelector('.pet-slider').style.transform = `translateY(${position}px)`
        counter.innerHTML = 1;


    })

    
}


if (window.matchMedia('(min-width: 1280px)').matches) {
paginate()
}

if (window.matchMedia('(max-width: 767px)').matches) {
    paginateMobile()
    } else if (window.matchMedia('(max-width: 1279px)').matches) {

    paginateSmall()
    
    }



window.addEventListener('resize', function() {
    document.location.reload()

})