// import { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP);

// const container = useRef(null)

// useGSAP(
//     ()=> {

//         var tl = gsap.timeline(() => {

//         tl.from("#landingpage", {
//             opacity:0
//         })

//         tl.from("#landingpage", {
//             transform: "scaleX(0.7) scaleY(0) translateY(80%) ",
//             borderRadius: "100px",
//             duration:2,
//             ease: "expo.out"
            
//         })

//         tl.from("#nav", {
//             opacity: 0
//         }), container})
   
        
//     }
    


    
// )

// const landingpage = () => {

//     const comp = useRef(null)

//     useLayoutEffect(()=> {
//          let ctx = gsap.context(() => {
//             const t1 = gsap.timeline()
//          }, comp)
//     })
// }
