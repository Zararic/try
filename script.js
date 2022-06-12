const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("h1", { autoAlpha: 1, duration: 3.5 });

tl.to(".container", { y: "110vh", opacity: 1, duration: 2.5 }, "-=3");
