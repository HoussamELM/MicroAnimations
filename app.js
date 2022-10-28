const tl = gsap.timeline({defaults : { duration : 0.35, ease: "Power2.easeOut"}})

const home = document.querySelector(".home");
const notifications = document.querySelector(".notificaions");
const messages = document.querySelector(".messages");



gsap.set(".feather", {scale :0 , transformOrigin: "center"});

home.addEventListener("click", () => {
gsap.fromTo(
   ".home-svg",
     {scale: 1},
     {scale: 0.9, yoyo: true, repeat: 1})
gsap.fromTo(
   ".feather",
     {y: -5, scale: 0, opacity: 1},
     {y:20, scale: 1.5, duration: 1, stagger: 0.5, opacity: 0},
);
gsap.fromTo(
   ".right-feather",
     {x:0},
     {x:5}
);
gsap.fromTo(
   ".left-feather",
     {x:0},
     {x:-5}
);
gsap.fromTo(
   ".roof",
     {y:0},
     {y: -2, yoyo: true, repeat:1, stagger: 0.5},
);
})

gsap.set(".bell", {transformOrigin: "top center"});
gsap.set(".wave", {opacity: 0});

notifications.addEventListener("click", () => {
    gsap.fromTo(
       ".bell",
         {rotation: -5},
         {rotation: 0, duration: 2, ease: "elastic.out(1.5, 0.2)"}
    );
    gsap.fromTo(
       ".wave",
         {y: 0, scale :1, opacity: 0},
         {y: -2 , scale : 1.1, opacity: 1, yoyo: true, repeat : 1, duration: 0.25}, "<"
    );
    gsap.fromTo(
       ".ringer",
         {y: 0, scale: 1},
         {y: 2, scale: 1.1, yoyo: true, repeat : 1, duration: 0.25}, "<"
    );

})

gsap.set(".flap", {transformOrigin: "top"});

messages.addEventListener("click", () => {

    
    tl.fromTo(".messages-svg", {scale: 1}, {scale: 0.9});
    console.log("sdsdfsdfsd");
    tl.fromTo(
       ".flap",
         {scale: 1},
         {scale: -1}, 
         "<50%"
    );
    tl.fromTo(".messages-svg", {scale: 0.9}, {scale: 1}, "<50%")
    tl.fromTo(
        ".note",
        { y: 0, opacity: 1 },
        { y: -20, opacity: 0, duration: 0.50 }
      );
    tl.to(
        ".flap",
          {scale: 1}, "<50%"
     );
})
