const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo("h1", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.5 });

tl.to(".container", { y: "80%", opacity: 1, duration: 2 });
