<script>
function listFunction() {
    var object = document.getElementById("list");
    document.getElementById("text").innerHTML =
    object.options[object.selectedIndex].text;
}

function delFunction() {
    document.getElementById("text").innerHTML = "";
}
</script>
