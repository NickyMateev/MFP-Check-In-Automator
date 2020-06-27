const urlParams = new URLSearchParams(window.location.search);
const weight = urlParams.get('weight');

if (weight != null && weight != "") {
    weightInput = document.getElementById("weight_display_value")
    weightInput.value = weight
    
    saveButton = document.getElementsByClassName("button")[0]
    saveButton.click()
}
