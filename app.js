const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { x: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { x: "-100%", duration: 2 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#welcome", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#welcome2", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#id1", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#button1", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#button2", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#button3", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#button4", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#square", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
tl.fromTo("#logos", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
