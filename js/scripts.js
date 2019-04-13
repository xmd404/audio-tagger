/ build homepage
const HomePage = () => {
  const root = document.getElementById('root');
}
// get name & comment values
const getNameComment = () => {
    let name = document.getElementsByClassName('name')[0].value;
    let comment = document.getElementsByClassName('comment')[0].value;
    return [name, comment];
};
// get audio time stamp
const getTimeStamp = () => {
    let audio = document.getElementsByClassName("audio")[0];
    let seconds = parseInt(audio.currentTime % 60);
    let minutes = parseInt((audio.currentTime / 60) % 60);
    let audioTimeStamp = minutes + ':' + seconds;
    return audioTimeStamp;
};
// bind data to audio time stamp
const bindData = () => {
    [name, comment] = getNameComment();
    audioTimeStamp = getTimeStamp();
    console.log(name, comment, audioTimeStamp);
    // create <p> element
    // get element by listItemData class name
    // init listItemData text
    let listItemData = document.createElement('p');
    listItemData.classList.add('listItemData');
    listItemData.innerText = `${name}: ${comment} @ ${audioTimeStamp}`;
    // create <li> element
    // get element by listItem class name
    // append listItemData to listItem
    let listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.appendChild(listItemData);
    // get element by comments id name
    // append listItem to commentList
    let commentList = document.getElementById('comments');
    commentList.appendChild(listItem);
};
