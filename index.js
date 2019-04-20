// capture name & comment
const getName = () => {
	let name = document.getElementsByClassName('name')[0].value;
	return name;
};
const getComment = () => {
	let comment = document.getElementsByClassName('comment')[0].value;
	return comment;
}
// capture audio timestamp
const getTimeStamp = () => {
	let audio = document.getElementsByClassName('audio')[0];
	let seconds = parseInt(audio.currentTime % 60);
	let minutes = parseInt((audio.currentTime / 60) % 60);
	let audioTimeStamp = `${minutes} : ${seconds}`;
	return audioTimeStamp;
};
// bind name & comment to audio timestamp
const bindData = (e) => {
	e.preventDefault();
	name = getName();
	comment = getComment();
	audioTimeStamp = getTimeStamp();
	const data = {
		name,
		comment,
		audioTimeStamp
	};
	if (data.name == '' || data.comment == '') {
		console.log('Error: form not complete!');
		alert('must complete form!');
	} else {
		console.log('Success: ', {
			data
		});
		renderData(data);
		localStorage.setItem('tag', JSON.stringify(data));
		form.reset();
	}
};
// render data to screen
const renderData = (data) => {
	const {
		name,
		comment,
		audioTimeStamp
	} = data;
	let listItemData = document.createElement('p');
	listItemData.classList.add('listItemData');
	listItemData.innerText = `${name}: ${comment} @ ${audioTimeStamp}`;
	let listItem = document.createElement('li');
	listItem.classList.add('listItem');
	listItem.appendChild(listItemData);
	let commentList = document.createElement('ul');
	commentList.classList.add('commentList');
	commentList.appendChild(listItem);
	root.appendChild(commentList);
};
// build homepage
const HomePage = () => {
	// title + description
	const title = document.createElement('h1');
	title.classList.add('title');
	title.innerText = 'audio-tagger';
	const description = document.createElement('p');
	description.classList.add('description');
	description.innerText =
		'A custom audio feature built for the SoundTap platform. It allows users to post data that binds to time stamps. During playback, the data will appear during the time stamp it originally posted at.';
	// attribution
	const website = document.createElement('a');
	website.classList.add('attribution');
	website.innerText = 'website';
	website.setAttribute('href', 'http://xavier.fun');
	website.setAttribute('target', '_blank');
	const linkedin = document.createElement('a');
	linkedin.classList.add('attribution');
	linkedin.innerText = 'linkedin';
	linkedin.setAttribute('href', 'https://linkedin.com/in/xduncan');
	linkedin.setAttribute('target', '_blank');
	const github = document.createElement('a');
	github.classList.add('attribution');
	github.innerText = 'github';
	github.setAttribute('href', 'https://github.com/xmd404');
	github.setAttribute('target', '_blank');
	const attribution = document.createElement('footer');
	attribution.appendChild(website);
	attribution.appendChild(linkedin);
	attribution.appendChild(github);
	// audio player
	const audioSource = document.createElement('source');
	audioSource.setAttribute('src', './assets/coltrane.mp3');
	audioSource.setAttribute('type', 'audio/mp3');
	const audioPlayer = document.createElement('audio');
	audioPlayer.classList.add('audio');
	audioPlayer.setAttribute('controls', 'controls');
	audioPlayer.innerText = 'Your browser does not support HTML5 audio.';
	// comment form
	audioPlayer.appendChild(audioSource);
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
	submitButton.addEventListener('click', bindData);
	const form = document.createElement('form');
	form.id = 'form';
	form.appendChild(nameField);
	form.appendChild(commentField);
	form.appendChild(submitButton);
	// append page elements to root
	const root = document.getElementById('root');
	root.appendChild(title);
	root.appendChild(description);
	root.appendChild(attribution);
	root.appendChild(audioPlayer);
	root.appendChild(form);
};

HomePage();