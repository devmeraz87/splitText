gsap.registerPlugin(SplitText, ScrollTrigger);


let mySplitText = new SplitText(".split", {type: "chars"});


let chars = mySplitText.chars;


// >> Alhamdulillah
gsap.from(chars, {
    y: 100,
    stagger: 0.01,
    ease: "back.out",
    duration: 0.5,
    scrollTrigger : {
        trigger: ".split",
        start: "top center",
        // scrub: true, 
    },
    onComplete: () => {
        mySplitText.revert();
        console.log("reverted sucessfully");
    }
})
