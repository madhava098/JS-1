function switchOff(){
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor="#919089"
    document.getElementById("offSwitch").style.backgroundColor="#f00c27"

}
function switchOn(){
    document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched ON";
    document.getElementById("onSwitch").style.backgroundColor="#22c569"
    document.getElementById("offSwitch").style.backgroundColor="#919089";
}