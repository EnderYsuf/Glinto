const errors = {
    400: [
        "Bad Request – Did you mash the form too hard?",
        "Bad Request – These spuds are confused by what you sent.",
        "Bad Request – That didn’t taste right. Try seasoning your request better."
    ],
    401: [
        "Unauthorized – Only official potato lovers allowed.",
        "Unauthorized – No entry without your secret potato handshake.",
        "Unauthorized – This patch of potatoes is off-limits to strangers."
    ],
    403: [
        "Forbidden – This field is private. No tubers beyond this point.",
        "Forbidden – Our potatoes said ‘no visitors today’.",
        "Forbidden – You shall not mash!"
    ],
    404: [
        "Not Found – This page was baked, then eaten.",
        "Not Found – Lost in the potato field.",
        "Not Found – Sorry, no spuds here!"
    ],
    500: [
        "Internal Server Error – The potato peeler jammed.",
        "Internal Server Error – We dropped the mashed code.",
        "Internal Server Error – It’s a total fry-up back here."
    ],
    503: [
        "Service Unavailable – Our potato servers are on a snack break.",
        "Service Unavailable – We're harvesting fresh content. Please wait.",
        "Service Unavailable – The oven’s off. Come back later."
    ],
    "DNS_ERROR": [
        "DNS Error – The address you're digging for has no tubers.",
        "DNS Error – We couldn’t find that potato patch.",
        "DNS Error – The potato map is missing."
    ],
    "NETWORK_ERROR": [
        "Network Error – Someone pulled the potato internet plug.",
        "Network Error – Your connection’s more flaky than a potato chip.",
        "Network Error – This sprout can’t grow without a signal."
    ],
    "SCRIPT_ERROR": [
        "Script Error – The recipe glitched. We might have overcooked the code.",
        "Script Error – Something went fry-sideways.",
        "Script Error – A rogue spud messed up the script."
    ],
    "SSL_ERROR": [
        "SSL Error – This spud forgot its security badge.",
        "SSL Error – Encrypted like a potato under a couch cushion.",
        "SSL Error – Potato protocol problems. Try replanting."
    ],
    "BROWSER_BLOCK": [
        "Blocked – Your browser rejected our potato dreams.",
        "Blocked – No fries for you! Browser said no.",
        "Blocked – A browser guard potato stopped your request."
    ],
    "COOKIE_ERROR": [
        "Cookie Error – Without cookies, we’re just raw tubers.",
        "Cookie Error – Potatoes need cookies too. Enable them!",
        "Cookie Error – This recipe won’t bake without cookies."
    ],
    "STORAGE_ERROR": [
        "Storage Error – Too many taters! Clear some space.",
        "Storage Error – This potato cellar is full.",
        "Storage Error – Your browser pantry is overflowing."
    ],
    "PERMISSION_ERROR": [
        "Permission Denied – You’re not allowed in this potato patch.",
        "Permission Denied – Access to the golden fry is restricted.",
        "Permission Denied – You need a spud-pass to continue."
    ]
};

const error_names = [400, 401, 403, 404, 500, 503, "DNS_ERROR", "NETWORK_ERROR", "SCRIPT_ERROR", "SSL_ERROR", "BROWSER_BLOCK", "COOKIE_ERROR", "STORAGE_ERROR", "PERMISSION_ERROR"];

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateError() {
    var index = randomValue(0, error_names.length-1);
    error_name = error_names[index];
    return { code: error_name, desc: errors[error_name][randomValue(0,2)] };
}



document.addEventListener("DOMContentLoaded", function () {
    let trackedScroll = false; // To track scrolling intent once
    let { code, desc } = generateError();
    // Function to show the error window
    function showErrorWindow() {
        document.getElementById("error_bg").style.display = "block";
        document.getElementById("error_window").classList.add("show");
        document.getElementById("error").innerHTML = code;
        document.getElementById("error_desc").innerHTML = desc;
    }

    // Detect if the user wants to scroll (wheel or touch)
    function detectScrollIntent() {
        if (!trackedScroll) {
            showErrorWindow();
            trackedScroll = true;
        }
    }
    document.addEventListener("wheel", detectScrollIntent, { once: true });
    document.addEventListener("touchmove", detectScrollIntent, { once: true });

    // Detect clicks and hyperlink interactions
    document.addEventListener("click", function (event) {
        let target = event.target.closest("a");
        if (target) {
            showErrorWindow();
        } else {
            showErrorWindow();
        }
    });

    // Detect if the user hovers over a hyperlink before clicking
    document.addEventListener("mouseover", function (event) {
        let target = event.target.closest("a");
        if (target) {
            showErrorWindow();
        }
    });
});