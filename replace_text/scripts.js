
var all = document.getElementsByTagName("*");

for (let i = 1; i < all.length; i++) {
    var str = all[i].innerHTML;
    var res = str.replace("webinar", "hello");
    all[i].innerHTML = res;
}

