document.addEventListener("DOMContentLoaded", function() {
    
    // --- 2. نظام المحاضرات والسكاشن ---
    window.currentMode = 'lectures';
    const grid = document.getElementById("numbersGrid");

    // تعريف الدوال على window لضمان وصول الـ HTML لها
    window.switchMode = function(mode, btn) {
        window.currentMode = mode;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        generateGrid();
    }

    window.showContent = function(num) {
        const area = document.getElementById("pdfArea");
        const placeholder = document.getElementById("placeholder");
        const title = document.getElementById("contentTitle");
        const frame = document.getElementById("pdfFrame");

        if (placeholder) placeholder.style.display = 'none';
        if (area) {
            area.classList.remove("hidden");
            area.classList.add("show-content");
            area.style.display = 'block';
        }

        const label = window.currentMode === 'lectures' ? "المحاضرة" : "السكشن";
        if (title) title.innerText = '${label} رقم ${num}';
        
        // رابط تجريبي للـ PDF
        if (frame) frame.src = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    }

    function generateGrid() {
        if (!grid) return; // تأكد أن الشبكة موجودة في الصفحة
        grid.innerHTML = "";
        for (let j = 1; j <= 8; j++) {
            const item = document.createElement("div");
            item.className = "num-item";
            item.innerText = j;
            item.onclick = function() { window.showContent(j); };
            grid.appendChild(item);
        }
    }

    // تشغيل الشبكة فور تحميل الصفحة
    generateGrid();
});
// خريطة الروابط - تأكد أن الأسماء مطابقة للملفات عندك
const fileLinks = {
    lectures: {
        1: "https://cloudpdf.io/view/Z6qSZ6W4s",
        2: "pdfs/lec2.pdf",
        3: "pdfs/lec2.pdf",
        4: "pdfs/lec2.pdf",
        5: "pdfs/lec2.pdf",
        6: "pdfs/lec2.pdf",
        7: "pdfs/lec2.pdf",
        8: "pdfs/lec2.pdf"
        // أضف الباقي بنفس الطريقة
    },
    
    sections: {
             1: "https://cloudpdf.io/view/Z6qSZ6W4s",
        2: "pdfs/lec2.pdf",
        3: "pdfs/lec2.pdf",
        4: "pdfs/lec2.pdf",
        5: "pdfs/lec2.pdf",
        6: "pdfs/lec2.pdf",
        7: "pdfs/lec2.pdf",
        8: "pdfs/lec2.pdf"
        // أضف الباقي بنفس الطريقة
    }
};

document.addEventListener("DOMContentLoaded", function() {
    window.currentMode = 'lectures';
    const grid = document.getElementById("numbersGrid");

    // دالة تغيير الوضع (محاضرات/سكاشن)
    window.switchMode = function(mode, btn) {
        window.currentMode = mode;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        if(btn) btn.classList.add('active');
        generateGrid();
    };

    // دالة عرض المحتوى المصلحة
    window.showContent = function(num) {
        const area = document.getElementById("pdfArea");
        const placeholder = document.getElementById("placeholder");
        const title = document.getElementById("contentTitle");
        const frame = document.getElementById("pdfFrame");

        if (placeholder) placeholder.style.display = 'none';
        if (area) {
            area.classList.remove("hidden");
            area.style.display = 'block';
        }

        const label = window.currentMode === 'lectures' ? "المحاضرة" : "السكشن";
        
        // استخدام Backticks لإصلاح مشكلة النص في الصورة
        title.innerText = label + " رقم " + num; 

        // جلب المسار
        const selectedFile = fileLinks[window.currentMode][num];
        if (frame && selectedFile) {
            frame.src = selectedFile;
        } else {
            console.error("الملف غير موجود في المسار المحدده");
            alert("عذراً، ملف " + label + " رقم " + num + " غير متوفر حالياً.");
        }
    };

    function generateGrid() {
        if (!grid) return;
        grid.innerHTML = "";
        for (let j = 1; j <= 8; j++) {
            const item = document.createElement("div");
            item.className = "num-item";
            item.innerText = j;
            item.onclick = function() { window.showContent(j); };
            grid.appendChild(item);
        }
    }

    generateGrid();
});