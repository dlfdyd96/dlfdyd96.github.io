const body = document.querySelector('body')

const images = [
	'https://data.whicdn.com/images/336036962/original.jpg',
	'https://rvchua.files.wordpress.com/2009/08/ponyox-large.jpg',
	'https://c4.wallpaperflare.com/wallpaper/707/91/650/kikis-delivery-service-studio-ghibli-wallpaper-preview.jpg',
	'https://c4.wallpaperflare.com/wallpaper/714/916/980/studio-ghibli-howl-s-moving-castle-anime-movies-wallpaper-preview.jpg',
]

function generateRandom(){
	const number = Math.floor(Math.random() * images.length);
	console.log(number)
	return number;
}

function paintImage(){
	const image = new Image();
	image.src = images[generateRandom()]
	image.classList.add("bgImage")
	body.prepend(image)
}

function init(){
	paintImage();
}

init();