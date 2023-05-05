const newCatBtn = document.getElementById('new-cat-btn');
const catImage = document.getElementById('cat-image');

function displayRandomCat() {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			const imageUrl = data[0].url;
			catImage.innerHTML = `<img src="${imageUrl}" alt="Cat Image">`;
		});
}

newCatBtn.addEventListener('click', displayRandomCat);

displayRandomCat();
