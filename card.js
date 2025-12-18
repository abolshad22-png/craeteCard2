

function Seton(e) {
    e.preventDefault(); // جلوگیری از رفرش صفحه

    // اینجا مقدارهای جدید رو می‌گیریم (بعد از وارد کردن کاربر)
    const name1 = document.getElementById("name").value;
    const num = document.getElementById("num").value; // بهتره به عنوان string نگه داری
    const cvv = document.getElementById("cvv").value;
    const date = document.getElementById("time").value;

    // نمایش مقدارها در جای درست
    document.getElementById("dateplace").innerHTML = date;
    document.getElementById("numplace").innerHTML = num; // اصلاح غلط املایی
    document.getElementById("nameplace").innerHTML = name1;

    // اگه می‌خوای cvv رو نشون بدی (بهتره پشت کارت باشه، اما فعلاً طبق کدت)
    document.getElementById("cvvval").innerHTML = cvv;
}

document.getElementById("form").addEventListener("submit", Seton);

function Back(e) {
    e.preventDefault();

    document.getElementById("frontcard").classList.toggle("add")
}

document.getElementById("rotbtn").addEventListener("click" , Back)