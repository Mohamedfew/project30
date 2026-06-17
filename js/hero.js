// دالة التحكم في ظهور العناصر عند التمرير
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100; // متى يبدأ العنصر بالظهور

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

// تشغيل الدالة عند السكرول وعند تحميل الصفحة
window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

// كود زر العودة للأعلى (لو موجود في الصفحة)
let upBtn = document.querySelector(".up");
if (upBtn) {
    window.onscroll = () => {
        if (window.scrollY >= 600) {
            upBtn.style.display = "block";
        } else {
            upBtn.style.display = "none";
        }
    };
    upBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}