function changeActive(newActive) {
    document.getElementsByClassName("active").item(0).classList.remove("active");
    document.getElementById(newActive).classList.add("active");
}
