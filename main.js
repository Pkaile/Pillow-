const target = document.querySelector('.cta');
const options ={
};
const callback = ((entries,observer) =>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
      }  
    });
});
const observer = new IntersectionObserver(callback, options);
observer.observe(target);
