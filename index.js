// build homepage
const HomePage = () => {
    const root = document.getElementById('root');
}
// get name & comment values
const getNameComment = (name, comment) => {
    name = document.getElementsByClassName('name')[0].value;
    comment = document.getElementsByClassName('comment')[0].value;
    return [name, comment];
}
// get audio time stamp
const getTimeStamp = (audio, seconds, minutes, audioTimeStamp) => {
    audio = document.getElementsByClassName("audio")[0];
    seconds = parseInt(audio.currentTime % 60);
    minutes = parseInt((audio.currentTime / 60) % 60);
    audioTimeStamp = minutes + ':' + seconds;
    return audioTimeStamp;
}
// bind data to audio time stamp
const bindData = () => {
    [name, comment] = getNameComment();
    audioTimeStamp = getTimeStamp();
    let data = {name, comment, audioTimeStamp};
    if (data.name == '' || data.comment == '') {
        alert('must complete form!');
        return;
    } else {
        console.log(data);
        return data;
    }
}
// render data to screen
const renderData = (data) => {
    const { name, comment, audioTimeStamp } = data;
    let listItemData = document.createElement('p');
    listItemData.classList.add('listItemData');
    listItemData.innerText = `${name}: ${comment} @ ${audioTimeStamp}`;
    let listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.appendChild(listItemData);
    let commentList = document.createElement('ul');
    commentList.classList.add('commentList');
    commentList.appendChild(listItem);
}