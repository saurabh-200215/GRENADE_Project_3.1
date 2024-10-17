function mouseFellow(){
    document.addEventListener('mousemove', function(e) {
        const image = document.querySelector('.fimg');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
    
        image.style.transform = `translate(${x}px, ${y}px) translate(-50%, -60%)`;
    });
}
mouseFellow()
//inlarge mouse move

// 

gsap.from("nav a", {
    y: -500,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    ease: "power4.inOut"
});
gsap.from("nav .logo", {
    y: -500,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
    ease: "power4.inOut"
});
gsap.from(".fimg", {
    x: -500,
    duration: 2,
    ease: "power4.out",
    opacity: 0,
    delay: 2,
})
gsap.from(".text ,.pagination", {
    x: 500,
    duration: 2,
    ease: "power4.out",
    delay: 2,
    opacity: 0
})
gsap.from(".GRENADE", {
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 3,
    stagger: 0.5
})
gsap.from("aside", {
    y: 20,
    duration: 1,
    opacity: 0,
    delay: 3,
    stagger: 0.5
})
gsap.from("#cursor", {
    // y: 20,
    duration: 1,
    opacity: 0,
    delay: 3,
    stagger: 0.5
})

// var loader = document.getElementById("preloader");
// window.addEventListener("load",function(){
//     loader.style.display= "none";
// })
//tilt js
// $('.container').tilt({
//     maxTilt: 1,
//     maxGlare: .5
// })
// $('.container').tilt({
//     maxTilt: 2,
//     maxGlare: .5
// })
// $('.container').tilt({
    // maxTilt: 10,
    // scale: 1.05,
    // speed: 800,
    // glare: true,
    // maxGlare: 0.3
//     maxTilt: 2,
//     maxGlare: .5
// });

// img.style.mix-blend-mode = "difference";



//inlarge mouse move
function imgglow(){
    var fullpage =document.querySelector(".fullpage")
    // var main =document.querySelector(".container")
    var cursor = document.querySelector("#cursor")
    var imageDiv = document.querySelector(".fimg")

    fullpage.addEventListener("mousemove", function(dets){
    // main.addEventListener("mousemove", function(dets){
        cursor.classList.add('grow');
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:0.4,
            opacity: 1,   
        })
    })

    imageDiv.addEventListener("mouseenter",function(dets){
        // cursor.innerHTML = "View More",
        // cursor.classList.add('grow');
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:0.4,
            scale:4,
            // backgroundColor: "#ffffff8c",
        })
    })
    imageDiv.addEventListener("mouseleave",function(dets){
        // cursor.innerHTML = ""
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:0.4,
            scale:1,
            // backgroundColor: "#ffffff",
        })
    })


}
imgglow()
// 
