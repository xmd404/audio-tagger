function getCurTime() {
    var audio = document.getElementById("myAudio");
    var comment = document.getElementById("myComment").value;

    alert("Your comment:" + " " + "'" + comment + "'" + " " + "was tagged at" + " " + audio.currentTime);
}