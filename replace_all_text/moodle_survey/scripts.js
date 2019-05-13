document.getElementById("235-jsn-uf-form-field").onchange = function() {
    invokeWordingChange()
}
;

function invokeWordingChange() {
    let selection = document.querySelector("#s2id_235-jsn-uf-form-field .select2-choice span").innerHTML;

    webinarToTutorial()
    tutorialToWebinar()

    function webinarToTutorial() {

        if (selection == "Bachelors" || selection == "Masters") {
            console.log("Worked!");
            // Search through all HTML nodes
            let webinars = document.querySelectorAll(".controls p, .control-label");

            // Loop through the results
            for (let i = 1; i < webinars.length; i++) {
                // Add the node to an array
                var str = webinars[i].innerHTML;
                // replace text
                var res = str.replace("webinar", "tutorial");
                // output the replaced results to all nodes
                webinars[i].innerHTML = res;
            }
        }
    }

    function tutorialToWebinar() {

        if (selection == "Graduate Certificate" || selection == "Advanced Diploma" || selection == "Diploma") {
            console.log("Worked!");
            // Search through all HTML nodes
            let webinars = document.querySelectorAll(".controls p, .control-label");

            // Loop through the results
            for (let i = 1; i < webinars.length; i++) {
                // Add the node to an array
                var str = webinars[i].innerHTML;
                // replace text
                var res = str.replace("tutorial", "webinar");
                // output the replaced results to all nodes
                webinars[i].innerHTML = res;
            }
        }
    }

}
