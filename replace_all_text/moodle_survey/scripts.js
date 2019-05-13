document.getElementById("235-jsn-uf-form-field").onchange = function() {
    invokeWordingChange()
}
;

function invokeWordingChange() {

    let selection = document.querySelector("#s2id_235-jsn-uf-form-field .select2-choice span").innerHTML;

    console.log("Worked!");

    if (selection == "Bachelors") {

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
    }
}
