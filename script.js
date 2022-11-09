
 //nav text animation
document.querySelectorAll(" #nav span").forEach(function(elm){
    var clutter="";


elm.textContent.split("").forEach(function(elem){
    clutter +=`<span>${elem}</span>`
})
elm.innerHTML = clutter;

})

document.querySelectorAll(" #nav span").forEach(function(allh1){
    gsap.to(allh1.children,{
        y:-30,
        duration:1,
        stagger:.05,
        opacity:1,
        delay:2,
        ease:"Expo.easeInOut"
    })
})


//video cursor
document.addEventListener("mousemove", function(dets){
    document.querySelector("#container").style.transform = `translate(${(dets.x)*0.2}px, ${(dets.y)*0.2}px)`;

})


//circle rotate
document.querySelectorAll(".class").forEach(function(elem){
    elem.addEventListener("click",function(){
        this.style.transform = "rotateX(1440deg)";
    })
})

document.querySelectorAll(".class").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            scale:0.4
        })

    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            scale:1
        })

    })
})


///cursor code
document.addEventListener("mousemove" ,function (dets){
    document.querySelector("#cursor").style.left=`${(dets.x)}px`
    document.querySelector("#cursor").style.top=`${(dets.y)}px`
})

//for toggle circle///
document.querySelector(".toggle").addEventListener("mouseenter",function(){
    document.querySelector("#cursor").style.backgroundColor="transparent";
    document.querySelector("#cursor").style.width="50px";
    document.querySelector("#cursor").style.height="50px";
    document.querySelector("#cursor").style.border="1px solid #fff";
    

})
document.querySelector(".toggle").addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.backgroundColor="#fff";
    document.querySelector("#cursor").style.width="20px";
    document.querySelector("#cursor").style.height="20px";
    document.querySelector("#cursor").style.border="none";
    

})

///toggle
var circle=document.querySelector("#circ");
var main=document.querySelector("#scrollpage")
var flag=0;
circle.addEventListener("click",function(){
    if(flag===0){
        circle.style.left="55%"
        document.documentElement.style.setProperty("--pri", "#000")
        document.documentElement.style.setProperty("--sec", "#fff")
        document.documentElement.style.setProperty("--shw", "#cccccc")
        flag=1;
    }
    else{
        circle.style.left="4%"
        document.documentElement.style.setProperty("--pri", "#fff")
        document.documentElement.style.setProperty("--sec", "#000")
        document.documentElement.style.setProperty("--shw", "#1f1f1f")
        flag=0;
    }

})
//random images
var images = ["https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"];
setInterval(function(){
    var random = Math.floor(Math.random()*4)
    document.querySelector("#page1 #one").src=images[random];
    console.log(random);
},4000) 

var arr = ["https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1592819695396-064b9572a660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]
setTimeout(function(){
    setInterval(function(){
        document.querySelector("#page1 #two").src=arr[Math.floor(Math.random()*4)];
    },4000) 

},1000)
var arr1 = ["https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1550327149-f5aef60d38f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdyaXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]
setTimeout(function(){
    setInterval(function(){
        document.querySelector("#page1 #three").src=arr1[Math.floor(Math.random()*4)];
    },4000) 

},2000)
var arr2 = ["https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1568819297129-80fd50360f8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
setTimeout(function(){
    setInterval(function(){
        document.querySelector("#page1 #four").src=arr2[Math.floor(Math.random()*4)];
    },4000) 

},3000)

gsap.to("#circleline",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 100%", 
        end:"bottom 0%",
        scrub:2,
    },
    x:-600,
    ease: Linear,
})
gsap.to("#loder",{
    height:"0%",
    duration:2,
    ease: "Expo.easeInOut"
})
gsap.from(" #page5-1  p",{
    scrollTrigger:{
        trigger:"#page5-1  p",
        start:"top 90%",
        scale:2
       
    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2
   

})

gsap.from(" #page5-1  h2",{
    scrollTrigger:{
        trigger:"#page5-1  h2",
        start:"top 90%",
       
    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2


})



gsap.to("#page6",{
    scrollTrigger:{
        trigger:"#page6",
        start: "top 0%",
        scrub: 2,
        pin:true,
    }
})
gsap.to(".same",{
    scrollTrigger:{
        trigger:"#page6",
        start: "top 0%",
        scrub: 2,
        pin:true
    },
    y:"-100%",
    stagger:0.5
})
document.querySelectorAll("#pagefix h1").forEach(function(elem){
    gsap.from(elem,{
        rotateX:"-92deg",
        skewX:"3deg",
        skewY:"-12deg",
        duration:2,
        delay:2,
        opacity:0
    })
   
})
gsap.from("#one",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#two",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#three",{
    duration:2,
    scale:0,
    opacity:0
},"-=2")
gsap.from("#four",{
    duration:2,
    scale:0, 
    opacity:0
},"-=2")


    gsap.from("#page3 h1",{
        scrollTrigger:{
            trigger:"#page3  h1",
            start:"top 50%",
    },
    rotateX:"-92deg",
    skewX:"2deg",
    skewY:"-12deg",
    duration:1,
    opacity:0
})
gsap.to("#page4 h1:nth-child(2)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 70%",
        scrub:2,
    },
    x:200,
})
gsap.to("#page4 h1:nth-child(3)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 50%",
        scrub:2,
    },
    x:-100
})
gsap.to("#page4 h1:nth-child(4)",{
    scrollTrigger:{
        trigger:"#page4 h1",
        start:"top 50%",
        scrub:2,
    },
    x:250
})
gsap.from("#page5-2  h1",{
    scrollTrigger:{
        trigger:"#page5-2  h1",
        start:"top 100%",
    },
    rotateX:"-92deg",
    skewX:"3deg",
    skewY:"-12deg",
    duration:2,
    opacity:0,
    stagger:0.5
    
})
gsap.from("#page5-2  h2",{
    scrollTrigger:{
        trigger:"#page5-2  h2",
        start:"top 100%",
    },
    rotateX:"-92deg",
    skewX:"3deg",
    skewY:"-12deg",
    duration:2,
    opacity:0,
    stagger:0.5
    
})

gsap.to("#scroll-image #lineab1",{
    scrollTrigger:{
        trigger:"#scroll-image #lineab1",
        start:"top 100%",
        scrub:2,
    },
    left:"30%",

})
gsap.to("#scroll-image #lineab2",{
    scrollTrigger:{
        trigger:"#scroll-image #lineab2",
        start:"top 100%",
        scrub:2,
    },
    left:"70%",

})
