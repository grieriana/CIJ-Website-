gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline({  //timeline for chain animations

scrollTrigger:{
trigger:".hero",
start:"top top",

end:"+=3000",
scrub:1,
pin:true,
markers:false

}

});


/* Parallax background */

tl.to(

".background",

{

y:-250,
scale:1.1,
duration:3

},

0

);


/* movement for Left phone*/

tl.to(

".left-phone",

{

x:-200,
opacity:1,
rotation:0,
duration:3

},

0.5

);



/* movement for Right phone */

tl.to(

".right-phone",

{

x:200,
opacity:1,
rotation:0,
duration:3

},

0.5

);


/* To make main phone disapear*/

tl.to(

".main-phone",

{

opacity:0,
scale:0.6,
y:100,
duration:2

},

1

);




