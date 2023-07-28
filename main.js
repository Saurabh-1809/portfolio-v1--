gsap.registerPlugin(ScrollTrigger);

gsap.from(".timeline", {
    duration: 1,
    opacity: 0,
    // x: "-70",
    ease: "circ",
  });
gsap.from(".name", {
    duration: 2,
    opacity: 0,
    x: "-100",
    ease: "expo",
  });
gsap.from(".txt-xhane", {
    duration: 2,
    opacity: 0,
    x: "100",
    ease: "expo",
  });
gsap.from(".hello-tx", {
    duration: 2,
    opacity: 0,
    y: "-70",
    ease: "expo",
  });
gsap.from(".st-p", {
    duration: 2,
    opacity: 0,
    y: "-70",
    ease: "expo",
  });
gsap.from(".social-media", {
   
    duration: 2,
    opacity: 0,
    y: "-20",
    ease: "expo",
    delay: 2,
});
gsap.from(".bt", {
   
    duration: 2,
    opacity: 0,
    delay:1,
    x: "50",
    ease: "expo",
    // delay: 2,
});
gsap.from("#about .abt-code ", {

    duration: 1,
    // stagger:1,
    opacity: 0,
    // delay:2,
    y: "90",
    ease: "expo",
    scrollTrigger:{
       trigger:"#about",
       scroller:"body",
       start:"top 55%",
       end:"top 45%",
       
      //  markers:true,
       

    }
    // delay: 2,
});
gsap.from(".portfolio .card-featured-pro",{
  x:300,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".portfolio",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    // markers:true
  }
})
gsap.from(".card-other-pro",{
  y:90,
  opacity:0,
  duration:1,
  // stagger:1,
  scrollTrigger:{
    trigger:".card-other-pro",
    scroller:"body",
    start:"top 90%",
    end:"top 85%",
    // markers:true
  }
})