function updateParkInformation(){
    document.getElementById("parkName").textContent = "Yellowstone National Park";
    document.querySelector("#parkType").textContent = "National Park";
    document.querySelector("#parkStates").innerHTML = "ID, WY, MT";
    document.getElementById("heroImage").src = "/public/images/yellowstone.jpg";
}

updateParkInformation();