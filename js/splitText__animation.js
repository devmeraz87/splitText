gsap.registerPlugin(SplitText, ScrollTrigger);


window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  
    const pageContainer = document.querySelector("._container");
    pageContainer.setAttribute("data-scroll-container", "");
  
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      inertia: 0.8,
      smooth: true,
      getDirection: true,
      mobile: {
        smooth: true
      },
      tablet: {
          smooth: true
      }
    });
    
    scroller.on("scroll", function (t) {
      document.documentElement.setAttribute("data-direction", t.direction);
    });
    
    scroller.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length ?
        scroller.scrollTo(value, 0, 0) :
        scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight };
  
      },
  
     pinType: pageContainer.style.transform ? "transform" : "fixed" });



     let mySplitText = new SplitText(".split", {type: "chars"});


let chars = mySplitText.chars;


// >> Alhamdulillah
gsap.from(chars, {
    y: 100,
    stagger: 0.01,
    ease: "back.out",
    opacity: 0,
    duration: 0.5,
    scrollTrigger : {
        scroller: "[data-scroll-container",
        trigger: ".split",
        start: "top center",
        // scrub: true, 
    },
    onComplete: () => {
        mySplitText.revert();
        console.log("reverted sucessfully");
    }
})

  
});



