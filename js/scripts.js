function getCurTime() {
    var audio = document.getElementById("myAudio");
    var text = '<li>text</li>';

    var name = document.getElementById("myName").value;
    var comment = document.getElementById("myComment").value;
    var timeStamp = audio.currentTime;

    var postedComment = name + ":" + " " + comment + " " + "@" + " " + timeStamp;

    var addPostedComment = 
    document.getElementById("comments").innerHTML = postedComment;

    

}