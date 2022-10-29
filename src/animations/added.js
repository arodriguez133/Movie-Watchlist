import { gsap } from "gsap";

const tl = gsap.timeline();
const buttons = gsap.utils.toArray(".add-watchlist-btn");
const container = gsap.utils.toArray(".movie-container");
const addedDiv = gsap.utils.toArray(".added");

export function added() {
    console.clear();
    buttons.forEach((btn, index) => {
        tl.to(addedDiv[index], { autoAlpha: 1, duration: 0 });
    });
};