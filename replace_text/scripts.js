
// Search through all HTML nodes
let all = document.getElementsByTagName("*");

// Loop through the results
for (let i = 1; i < all.length; i++) {
    // Add the node to an array
    var str = all[i].innerHTML;
    // replace text
    var res = str.replace("webinar", "hello");
    // output the replaced results to all nodes
    all[i].innerHTML = res;
}

