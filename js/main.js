// ===== Hero Slider JS مخصص =====
let heroSlides = document.querySelectorAll(".slide");
let heroDots = document.querySelectorAll(".dot");
let heroTitle = document.getElementById("title");
let heroText = document.getElementById("text");

let heroIndex = 0;

let heroTitles = [
    "المعهد العالي للإداره وتكنولوجيا المعلومات بكفر الشيخ يرحب بكم",
    "تعليم هندسي وتكنولوجي بمستوى متميز",
    "بيئة تعليمية حديثة تدعم الإبداع والبحث العلمي",
    "إعداد جيل قادر على الابتكار والتطوير",
    "تخريج كوادر متميزة قادرة على المنافسة عالمياً",
    "تعليم عملي ونظري مدمج لإعداد مهندسين متميزين"
];

let heroTexts = [
    "نقدم تعليماً متميزاً لإعداد كوادر قادرة على مواكبة التطور التكنولوجي",
    "نحرص على تقديم برامج تعليمية حديثة تواكب سوق العمل",
    "ندعم الإبداع والتطوير في مختلف المجالات الهندسية والتكنولوجية",
    "هدفنا تخريج مهندسين قادرين على الابتكار",
    "نضمن للطلاب مهارات عالية لمستقبل مشرق",
    "بيئة تعليمية متكاملة تجمع المعرفة والخبرة العملية"
];

// وظيفة كتابة النص حرف حرف
function heroTypeWriter(element, text, speed, callback){
    let i = 0;
    element.innerText = "";
    let heroInterval = setInterval(() => {
        element.innerText += text.charAt(i);
        i++;
        if(i >= text.length){
            clearInterval(heroInterval);
            if(callback) callback();
        }
    }, speed);
}

// عرض شريحة محددة
function heroShowSlide(i){
    heroSlides.forEach(s => s.classList.remove("active"));
    heroDots.forEach(d => d.classList.remove("active"));
    heroSlides[i].classList.add("active");
    heroDots[i].classList.add("active");
    heroTitle.innerText = heroTitles[i];
    heroText.innerText = heroTexts[i];
    heroIndex = i;
}

// الانتقال للشريحة التالية
function heroNextSlide(){
    let i = (heroIndex + 1) % heroSlides.length;
    heroShowSlide(i);
}

// الانتقال للشريحة السابقة
function heroPrevSlide(){
    let i = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    heroShowSlide(i);
}

// أحداث أزرار التنقل
document.querySelector(".nav-left").addEventListener("click", () => {
    clearInterval(heroAutoInterval);
    heroPrevSlide();
    heroAutoInterval = setInterval(heroNextSlide, 3000);
});

document.querySelector(".nav-right").addEventListener("click", () => {
    clearInterval(heroAutoInterval);
    heroNextSlide();
    heroAutoInterval = setInterval(heroNextSlide, 3000);
});

// بدء كتابة الترحيب في أول صورة وحفظ الـinterval
// بعد كتابة النص الترحيبي
heroTypeWriter(heroTitle, heroTitles[0], 80, () => {
    setTimeout(() => {
        heroAutoInterval = setInterval(heroNextSlide, 2500); // يبدأ تبديل الصور كل 3 ثواني
    }, 250); // ينتظر ربع ثانية فقط بعد انتهاء الكتابة
});
let heroAutoInterval;


// mohdrate
let ul  = document.querySelectorAll("li");
let close= document.querySelector(".closen");
ul.forEach((li)=>{
   
    li.addEventListener(("click"),(e)=>{
     let ele = e.currentTarget.dataset.show;
     console.log(ele)
     document.querySelector(ele).style.display="block"
     close.style.display="block"
     close.addEventListener("click",()=>{
        document.querySelector(ele).style.display="none";
        close.style.display="none"
     })
   
    })
});

// section

let ulll  = document.querySelectorAll("li");
let closeone= document.querySelector(".closen-1");
ulll.forEach((li)=>{
   
    li.addEventListener(("click"),(e)=>{
        
     let ele = e.currentTarget.dataset.show;
     console.log(ele)
     document.querySelector(ele).style.display="block"
     closeone.style.display="block"
     closeone.addEventListener("click",()=>{
        document.querySelector(ele).style.display="none";
        closeone.style.display="none"
     })
   
    })
});
// section



window.onscroll = ()=>{   if(window.scrollY >= 1000){
    let click = document.querySelector(".up")
    click.style.display="block"
    
    click.onclick = ()=>{
        window.scrollTo ({
            top:0,
            behavior:"smooth"
        })}  
    }
    else{
      document.querySelector(".up").style.display="none"
    }
}



let nav =document.querySelector("nav");
let sectiontext =document.querySelector(".text");
let sectionphoto =document.querySelector(".photo");
let sectionp =document.querySelector(".text p");
let footer =document.querySelector("footer");
sectionp.style.cssText = "position: relative; left: -90%";
sectionphoto.style.cssText = "position: relative; right: -100%";
footer.style.cssText = "  height:10px;";

window.onscroll = ()=>{
       

// section
if(window.scrollY >= sectiontext.offsetTop-400){
    sectionp.style.cssText = "  animation: left-to-right 2s linear"
}
if(window.scrollY >= sectionphoto.offsetTop-300){
    sectionphoto.style.cssText = "   animation:right-to-left 2s linear " 
}
if(window.scrollY >= sectiontext.offsetTop+220){
    
    footer.style.cssText = "   animation:height-top-bottom 3s linear" 
}


  
// btn scroll to top
if(window.scrollY >= 1000){
let click = document.querySelector(".up")
click.style.display="block"

click.onclick = ()=>{
    window.scrollTo ({
        top:0,
        behavior:"smooth"
    })}  
}
else{
  document.querySelector(".up").style.display="none"
}
}
let data = [
    {img:"/img/العميد.jpg", name:"د/ رضا ابراهيم", job:"عميد المعهد "},
  {img:"/img/احمد2.jpg", name:"د/ أحمد", job:"برمجة"},
  {img:"/img/عمرو.jpg", name:"د/ عمرو الشوري", job:"شبكات"},
  {img:"/img/منال بلقاسي.jpg", name:"منال البلقاسي ", job:"قواعد بيانات"},
  {img:"/img/محمد2.jpg", name:"د/ محمد الشوادفي", job:"ذكاء اصطناعي"},
  {img:"/img/ايمن.jpg", name:"د/ ايمن ابو النضر", job:"ذكاء اصطناعي"},
  {img:"/img/عبدالحميد.jpg", name:"د/ عبدالحميد العيسوي", job:"ذكاء اصطناعي"},
  {img:"/img/غندور.jpg", name:"د/ محمد الغندور", job:"أمن معلومات"}
];

let index = 0;

let leftCard = document.getElementById("leftCard");
let centerCard = document.getElementById("centerCard");
let rightCard = document.getElementById("rightCard");

let leftImg = document.getElementById("leftImg");
let leftName = document.getElementById("leftName");
let leftJob = document.getElementById("leftJob");

let centerImg = document.getElementById("centerImg");
let centerName = document.getElementById("centerName");
let centerJob = document.getElementById("centerJob");

let rightImg = document.getElementById("rightImg");
let rightName = document.getElementById("rightName");
let rightJob = document.getElementById("rightJob");

function updateSlider(){

  let prev = (index - 1 + data.length) % data.length;
  let next = (index + 1) % data.length;

  // Fade out
  centerCard.style.opacity = 0;

  setTimeout(()=>{

    // تحديث البيانات
    centerImg.src = data[index].img;
    centerName.textContent = data[index].name;
    centerJob.textContent = data[index].job;

    leftImg.src = data[prev].img;
    leftName.textContent = data[prev].name;
    leftJob.textContent = data[prev].job;

    rightImg.src = data[next].img;
    rightName.textContent = data[next].name;
    rightJob.textContent = data[next].job;

    // Fade in
    centerCard.style.opacity = 1;

  },300);
}

// أول تشغيل
updateSlider();

// Auto slide
setInterval(()=>{
  index = (index + 1) % data.length;
  updateSlider();
},2000);


// 


let counters = document.querySelectorAll(".counter");
let boxes = document.querySelectorAll(".counter-box");
let section = document.querySelector("#Hitory");

let started = false;

window.addEventListener("scroll",function(){

let sectionTop = section.offsetTop;
let scrollPosition = window.scrollY + window.innerHeight;

if(scrollPosition >= sectionTop && !started){

boxes.forEach((box,i)=>{
setTimeout(()=>{
box.classList.add("show");
},i*900);
});

counters.forEach(counter=>{

let target = +counter.getAttribute("data-target");
let count = 0;

let update = setInterval(()=>{

count += Math.ceil(target/200);

if(count >= target){
counter.innerText = target;
clearInterval(update);
}else{
counter.innerText = count;
}

},50);

});

started = true;
}

});


// 

window.addEventListener("scroll", reveal);

function reveal(){

var reveals = document.querySelectorAll(".reveal");

for(var i = 0; i < reveals.length; i++){

var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 200;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}


window.addEventListener("scroll",function(){

let elements = document.querySelectorAll(".reveal-left");

elements.forEach(function(el){

let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 350){
el.classList.add("active");
}

});

});


setTimeout(function(){
  document.getElementById("socialzzz").classList.add("show");
}, 5000); // 10000 ملي ثانية = 10 ثواني


document.addEventListener("DOMContentLoaded", function() {
    // النص المراد كتابته
    const message = "أبنائي طلاب المعهد العالي للهندسة والتكنولوجيا كفرالشيخ ، يسعدني بإسمي وبإسم جميع العاملين بالمعهد أن أرحب بكم في معهدكم الذى يضم نخبه على أعلى مستوى من الكوادر البشرية المتمثلة في أعضاء هيئة التدريس والهيئة المعاونة وأعضاء الجهاز الإداري لتقديم الخدمات الداعمة للعملية التعليمية . نتطلع إلى تقديم تعليم هندسي متميز لابنائنا الطلاب مواكباً لأحدث المعايير المحلية والعالمية ، قادراً على مواجهة التحديات التقنية وملبياً لاحتياجات خطط التنمية وسوق العمل على الصعيدين الوطني والاقليمي .";
    
    const targetElement = document.getElementById("typewriter");
    let charIndex = 0;
    let isStarted = false;

    // دالة الكتابة حرف بحرف
    function startTyping() {
        if (charIndex < message.length) {
            targetElement.innerHTML += message.charAt(charIndex);
            charIndex++;
            setTimeout(startTyping, 25); // سرعة الكتابة (كلما قل الرقم زادت السرعة)
        }
    }

    // مراقبة السكرول (يبدأ العمل عند وصول المستخدم للقسم)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isStarted) {
                isStarted = true; // لمنع إعادة الحركة مرة أخرى
                startTyping();
            }
        });
    }, { threshold: 0.5 }); // يبدأ عند ظهور 50% من العنصر

    observer.observe(targetElement);
});

