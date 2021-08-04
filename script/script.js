let sliders = document.querySelectorAll(".projects-item");
let btnsSlider = document.querySelectorAll(".projects-slider__btn");
let countSlides = sliders.length;
let initPos = 15;
let moveCount = 255;
let moveSlides;
// Slider 
sliders.forEach(item => {
   item.style.left = initPos + "px";
   initPos += moveCount;
})
btnsSlider.forEach(btn => {
   btn.addEventListener("click", (e) => {
      for (let i = 0; i < sliders.length; i++) {
         moveSlides = parseInt(window.getComputedStyle(sliders[i]).getPropertyValue("left"));
         switch (e.target.dataset.dir) {
            case "right":
               moveSlides -= moveCount;
               if (moveSlides < 0) {
                  moveSlides = 780;
               }
               break;
            case "left":
               moveSlides += moveCount;
               if (moveSlides > moveCount * 4) {
                  moveSlides = 15;
               }
               break;
         }
         sliders[i].style.left = moveSlides + "px";
      }
   })
})
//burger
let menu = document.querySelector(".header-top__burger");
let openMenu = document.querySelector(".header-top__burger-btn");
let closeMenu = document.querySelector(".header-top__burger-close");
openMenu.onclick = () => {
   menu.classList.add("burger-active")
}
closeMenu.onclick = () => {
   menu.classList.remove("burger-active")

}