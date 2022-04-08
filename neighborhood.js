const randomResturant = (event) => {
    let restaurants = ['Slackwater Pizza', 'UTOG Brewery', 'Tona Sushi', 'Ogden River Brewery']
    let rec = Math.floor(Math.random() * restaurants.length)    
	alert(restaurants[rec])
}

let randomRest = document.querySelector('#randomRest')
randomRest.addEventListener('click', randomResturant)