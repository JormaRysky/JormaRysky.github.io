gsap.registerPlugin(ScrollTrigger);

gsap.from('.name', {duration:2, y: '-500%', ease: 'bounce'})
gsap.to('.name', {duration:1, delay:3, scale: '0.3', y: '-5vw', x: '-37%', ease: 'power4.out'})

gsap.from('.pieru', {duration: 0.5,opacity:0})
gsap.to('.pieru', {duration:2, delay:3, opacity:0})

gsap.to('.monster',{
     scrollTrigger:{
        trigger: '.monster',
     /*   start:'top center',
        end:'bottom center',*/

       scrub: true,

    },
    transformOrigin: "center 40%",
    rotation: 1360,
    duration: 3
});
