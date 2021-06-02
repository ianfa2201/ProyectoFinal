var inicialL = 1;
var inicialD = 1;
document.querySelector("#like").addEventListener("click", function() {
    document.getElementById("likes").innerHTML = inicialL++;
 });

document.querySelector("#dislike").addEventListener("click", function() {
   document.getElementById("dislikes").innerHTML = inicialD++;
});

