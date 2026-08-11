// Example progress value (replace this with your actual progress)
let progress = 75;

if (progress >= 25) {
    document.getElementById("badge1").classList.remove("locked");
    document.getElementById("badge1").classList.add("unlocked");
}

if (progress >= 50) {
    document.getElementById("badge2").classList.remove("locked");
    document.getElementById("badge2").classList.add("unlocked");
}

if (progress >= 75) {
    document.getElementById("badge3").classList.remove("locked");
    document.getElementById("badge3").classList.add("unlocked");
}

if (progress >= 100) {
    document.getElementById("badge4").classList.remove("locked");
    document.getElementById("badge4").classList.add("unlocked");
}