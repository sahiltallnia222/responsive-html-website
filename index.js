// creating portfolio tabbed component
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const project_ = document.querySelectorAll(".project");
const heroSection = document.querySelector(".section-hero");
const numList=document.querySelector('.num-list');
const footer = document.querySelector(".footer");
const scrollElement = document.createElement("div");
const jsMedia=()=>{
  // in if condition it means at least widthSize.matches
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteration: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteration: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
const widthSize=window.matchMedia("(max-width:780px)")
jsMedia(widthSize)
widthSize.addEventListener('change',jsMedia)
//   scroll to top button
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="chevron-up-outline"></ion-icon>`;
footer.after(scrollElement);
scrollElement.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});
// animate number
// const counterNumber = document.querySelectorAll(".counter-number");
// const speed = 200;
// counterNumber.forEach((curElem) => {
//   const updateNumber = () => {
//     const targetNumber = parseInt(curElem.dataset.number);
//     const initialNum = parseInt(curElem.innerText);
//     const incrementNumber = Math.trunc(targetNumber / speed);
//     if (initialNum < targetNumber) {
//       curElem.innerText = initialNum + incrementNumber;
//       setTimeout(updateNumber, 10);
//     }
//   };
//   updateNumber();
// });

// menu responsive
const mobileNavBtn = document.querySelector(".mobile-navbar-btn");
const mobileIcon = document.querySelectorAll(".mobile-nav-icon");
const header = document.querySelector(".header");
mobileNavBtn.addEventListener("click", (e) => {
  const iconCliked = e.target;
  mobileIcon.forEach((curElem) => {
    curElem.classList.remove("notVisible");
  });
  iconCliked.classList.add("notVisible");
  header.classList.toggle("active");
});
// root:null means work with respect to the viewport
// threshold:0 means work when the perticular section will go out of the viewport
// given call back is used when we have to handle multiple entries
// (entries)=>{
    // const ent=entries[0];
// }
const observer=new IntersectionObserver((entries) => {
    const ent=entries[0]
    !ent.isIntersecting?
    document.body.classList.add('sticky'):document.body.classList.remove('sticky')
}, { root: null, threshold: 0 });
observer.observe(heroSection);
const obs=new IntersectionObserver((entries,observer)=>{
   const [ent]=entries
    if(!ent.isIntersecting) return;
    const counterNumber = document.querySelectorAll(".counter-number");
const speed = 200;
counterNumber.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber / speed);
    if (initialNum < targetNumber) {
      curElem.innerText = initialNum + incrementNumber;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();

});
observer.unobserve(numList)
},{
    root:null,
    threshold:0
})
obs.observe(numList)

// lazy loading
const imgRef=document.querySelector('img[data-src]')
const imgObserver=new IntersectionObserver((entries)=>{
  const [ent]=entries
  if(!ent.isIntersecting) return
  ent.target.src=imgRef.dataset.src;
},{root:null,threshold:0})
imgObserver.observe(imgRef)

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });
  p_btn_clicked.classList.add("p-btn-active");
  const btn_number = p_btn_clicked.dataset.btnNum;
  const project_active = document.querySelectorAll(`.p-btn-${btn_number}`);
  project_.forEach((curElem) => curElem.classList.add("p-img-not-active"));
  project_active.forEach((curElem) =>
    curElem.classList.remove("p-img-not-active")
  );
});