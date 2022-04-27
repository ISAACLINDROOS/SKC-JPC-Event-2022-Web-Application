function myFunction() {
    var x = document.getElementById("food_navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}