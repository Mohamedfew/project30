//  إنشاء الحساب 
let registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
      Swal.fire({
        title: 'تنبيه!',
        text: 'من فضلك املأ جميع الحقول المطلوبة',
        icon: 'info',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.some(u => u.email === email);
    if (exists) {
      Swal.fire({
        title: 'خطأ!',
        text: 'هذا البريد الإلكتروني مسجّل بالفعل ❌',
        icon: 'error',
        confirmButtonText: 'رجوع'
      });
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
      title: 'تم التسجيل!',
      text: 'تم إنشاء الحساب بنجاح ✅',
      icon: 'success',
      confirmButtonText: 'موافق'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "index.html";
      }
    });
  });
}



//  تسجيل الدخول المدمج (أدمن + مستخدمين)
let loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // جلب القيم من الحقول
    let emailOrUsername = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // --- 1. فحص الدخول كأدمن (admin / 123) ---
    if (emailOrUsername === "admin" && password === "123") {
      Swal.fire({
        title: 'مرحباً أيها المدير! 🛡️',
        text: 'تم تسجيل دخول المسؤول بنجاح ✅',
        icon: 'success',
        confirmButtonText: 'الدخول للوحة التحكم'
      }).then((result) => {
        if (result.isConfirmed) {
          // التوجيه للينك الجديد الذي طلبته
          window.location.href = "dashbo.html"; 
        }
      });
      return; // التوقف هنا لمنع فحص المستخدمين العاديين
    }

    // --- 2. فحص المستخدمين العاديين من الـ Local Storage ---
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === emailOrUsername && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      Swal.fire({
        title: `مرحباً بك من جديد يا ${user.name} 👋`,
        text: 'تم تسجيل الدخول بنجاح ✅',
        icon: 'success',
        confirmButtonText: 'متابعة'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "home.html";
        }
      });
    } else {
      Swal.fire({
        title: 'خطأ!',
        text: 'بيانات الدخول غير صحيحة (تأكد من اسم المستخدم وكلمة المرور) ❌',
        icon: 'error',
        confirmButtonText: 'حاول مرة أخرى'
      });
    }
  });
}

// كود إظهار وإخفاء كلمة المرور
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    // تغيير شكل الأيقونة حسب الحالة
    this.textContent = type === "password" ? "🙈" : "👁️";
  });
}