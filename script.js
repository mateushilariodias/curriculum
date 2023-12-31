document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("ctaLinkOneMobile");
    var span = document.getElementsByClassName("close")[0];
    var header = document.querySelector("header");

    btn.onclick = function() {
        header.style.display = "none";
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        header.style.display = "flex";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            header.style.display = "flex";
        }
    }
});