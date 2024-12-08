gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div',{
    opacity:0,
    delay:1,
    x:20
} )

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})




gsap.utils.toArray('.title').forEach(title=>{
    gsap.from(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:65 ,
        duration:1,
        delay:.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('p').forEach(p=>{
    gsap.from(p,{
        opacity:0,
        x:150,
        skewX:30 ,
        duration:1,
        delay:.5,
        scrollTrigger:p

    })
})

gsap.utils.toArray('.star').forEach(star =>{
    gsap.from(star , {
     opacity : 0,
     rotation : 450,
     y: 100 , 
     duration : 1 , 
     delay : .8 , 
     scrollTrigger : star
    })
})
gsap.utils.toArray('button').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:button

    })
})


gsap.from('.pyramid' ,{
    opacity:0,
    scale:.5,
    duration:1,
    delay:.5
})

gsap.from('.hand',{
    scale:.2,
    opacity:0,
    skewY:30 ,
    duration:1,
    delay:.5,
    scrollTrigger:'.hand'
})




gsap.utils.toArray(".line").forEach(line =>{
      gsap.from(line , {
        opacity : 0 , 
        width : "0%" ,
        duration : 1 , 
        delay : 1 , 
        scrollTrigger : line
      })
})


gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.from(rotate,{
        opacity:0,
        rotation:350,
        scale:.2 ,
        duration:1,
        delay:1,
        scrollTrigger:rotate

    })
})


gsap.from('.card' ,{
    opacity:0,
    scale:.1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})

const menu = document.querySelector('.menu')


gsap.from(menu.children,{
    opacity:0,
    x:50,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:menu.children
    }
})