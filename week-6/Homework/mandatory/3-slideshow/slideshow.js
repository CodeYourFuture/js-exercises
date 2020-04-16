// Write your code here
var arr = [];
arr[0] = "https://sqphja.dm.files.1drv.com/y4mkhcpNjTL2IMIOIhCp0aj9wBzqWmYemU2oxmLFbEEjeRfQQARKjdwYmYtkyum7_5ynWvJWbm0MVtFKLJ0DZCquRE0rSjv-4aU60JWdanDSdvf1WGRn3fSBLRGX6_SIcVQlDwy7GYnpKXRl7gYYIk0fc09jsRPs04panHcZ_rARaYndZtM4LGB14PUYcAFssUQlbPWeFPuILkSZISUFFnKvA?width=5228&height=3485&cropmode=none";
arr[1] = "https://sqpooa.dm.files.1drv.com/y4m3k36HJuIhV7zd9YS3Bi-H7bNzTYdw7Gt3IXceM9oA7r808FBzKiuaYnJ8PJ1dXGE4Bf7c8nRP5fe1eI7mc0g3Pnd_jY0BOTcx6DBxBFpRQ9TZvzbFKlgMKtJJ_yiYZMi1COj_CySK45pdpbjR1J_U4G8ydoI97I-KmRrLOCALhrpg-owKb2gkhfwzn8PQnqQm74Ze-0uhDw5PxSzMFgbzg?width=3787&height=5050&cropmode=none"
arr[2] = "https://sqniaq.dm.files.1drv.com/y4mv0ywXCYISaRIUGkicSDUY17FJM2v6cdag81q9jxcSiEOGo2eh441uD_YVkEvIHsNj0GD6_zax-zhJE7uAP7ydKYtrv15gcpVPJfVVaCZ8zEkgv6irozY7mFqR8V_kvuicDKDlOMkDspv4tBjLcp3e4ds5h7T68OuSjrmgZoAnozCy2dh1EGc19v8_IKBa5hcF8tUlj-t4YUYcj1hUnbwAQ?width=5304&height=7952&cropmode=none"

setInterval(() => {

    if (i < arr.length - 1) {
        i++;

    } else {
        i = 0
    }
    document.getElementById("images").src = arr[i];
}, 2000);


// function sliderShow() {
//     document.getElementById("images").src = arr[i];
//     if (i < arr.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout("sliderShow()", 1000);
// }
// window.onload = sliderShow;
// sliderShow();