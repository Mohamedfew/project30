window.onload = function () {

    const initialTextLines = [
        "قسم f وقادرين على التعامل مع التحديات التكنولوجية الحديثة"
    ];

    const nextTextLines = [
        "الخريجين يكتسبون خبرات واسعة من خلال التدريب العملي والمشاريع المختلفة في المختبرات والمواقع التعليمية",
        "الخريجين قادرون على تطبيق المعرفة النظرية في مواقف عملية وحل المشكلات الهندسية بكفاءة",
        "الخريجين يمكنهم المساهمة في تطوير المشاريع التكنولوجية الحديثة والبنية التحتية للمجتمع",
        "الخريجين مؤهلون للعمل في مختلف مجالات الهندسة حسب تخصصاتهم والتحديات التي يواجهونها"
    ];

    const element = document.getElementById("text");
    const button = document.getElementById("slideBtn");
    const newTextContainer = document.getElementById("newTextContainer");
    const card2 = document.getElementById("card2");

    // كتابة النص الأول حرف حرف لكل سطر
    let lineIndex = 0;
    function typeInitialLine() {
        if (lineIndex < initialTextLines.length) {
            const line = initialTextLines[lineIndex];
            const span = document.createElement('span');
            element.appendChild(span);
            element.appendChild(document.createElement('br'));
            let charIndex = 0;

            function typeChar() {
                if (charIndex < line.length) {
                    span.textContent += line.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 25); // سرعة ثابتة بدون توقف
                } else {
                    lineIndex++;
                    setTimeout(typeInitialLine, 100);
                }
            }

            typeChar();
        }
    }

    typeInitialLine();

    // عند الضغط على الزرار، يظهر الكارد الثاني ويكتب النص الثاني حرف حرف
    button.addEventListener('click', () => {
        card2.style.display = "block"; // إظهار الكارد الثاني

        let nextLineIndex = 0;

        function typeNextLine() {
            if (nextLineIndex < nextTextLines.length) {
                const line = nextTextLines[nextLineIndex];
                const span = document.createElement('span');
                newTextContainer.appendChild(span);
                newTextContainer.appendChild(document.createElement('br'));
                let charIndex = 0;

                function typeCharNext() {
                    if (charIndex < line.length) {
                        span.textContent += line.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeCharNext, 25);
                    } else {
                        nextLineIndex++;
                        setTimeout(typeNextLine, 100);
                    }
                }

                typeCharNext();
            } else {
                button.disabled = true; // تعطيل الزر بعد انتهاء كل النصوص
            }
        }

        typeNextLine();
    });
};