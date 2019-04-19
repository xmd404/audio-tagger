// get name & comment values
const getNameComment = () => {
	let name = document.getElementsByClassName('name')[0].value;
	let comment = document.getElementsByClassName('comment')[0].value;
	return [ name, comment ];
};
// get audio time stamp
const getTimeStamp = () => {
	let audio = document.getElementsByClassName('audio')[0];
	let seconds = parseInt(audio.currentTime % 60);
	let minutes = parseInt((audio.currentTime / 60) % 60);
	let audioTimeStamp = `${minutes} : ${seconds}`;
	return audioTimeStamp;
};
// bind data to audio time stamp
const bindData = () => {
	[ name, comment ] = getNameComment();
	audioTimeStamp = getTimeStamp();
	let data = { name, comment, audioTimeStamp };
	if (data.name == '' || data.comment == '') {
		alert('must complete form!');
		return;
	} else {
		console.log(data);
		return data;
	}
};
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
};
// build homepage
const HomePage = () => {
	const title = document.createElement('h1');
	title.classList.add('title');
	title.innerText = 'audio-tagger';
	const description = document.createElement('p');
	description.classList.add('description');
	description.innerText =
		'A custom audio feature built for the SoundTap platform. It allows users to post data that binds to time stamps. During playback, the data will appear during the time stamp it originally posted at.';
	const audioSource = document.createElement('source');
	audioSource.setAttribute('src', './assets/coltrane.mp3');
	audioSource.setAttribute('type', 'audio/mp3');
	const audio = document.createElement('audio');
	audio.classList.add('audio');
	audio.setAttribute('controls', 'controls');
	audio.appendChild(audioSource);
	const nameField = document.createElement('input');
	nameField.classList.add('name');
	nameField.setAttribute('type', 'text');
	nameField.setAttribute('placeholder', 'Name');
	nameField.setAttribute('required', 'required');
	const commentField = document.createElement('input');
	commentField.classList.add('comment');
	commentField.setAttribute('type', 'text');
	commentField.setAttribute('placeholder', 'Comment');
	commentField.setAttribute('required', 'required');
	const submitButton = document.createElement('input');
	submitButton.setAttribute('type', 'submit');
	submitButton.setAttribute('value', 'Submit');
	submitButton.addEventListener('click', bindData());
	// submitButton.onclick = bindData();
	// apend form elements to form
	const form = document.createElement('form');
	form.appendChild(nameField);
	form.appendChild(commentField);
	form.appendChild(submitButton);
	// append page elements to root
	const root = document.getElementById('root');
	root.appendChild(title);
	root.appendChild(description);
	root.appendChild(audio);
	root.appendChild(form);
};

HomePage();