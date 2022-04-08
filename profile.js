const favColorMessage = (event) => {
	alert('My favorite color is Burnt Orange')
}

let favColor = document.querySelector('#color')
favColor.addEventListener('click', favColorMessage)

const favPlaceMessage = (event) => {
	alert('My favorite place is El Chalten, Argentina')
}

let favPlace = document.querySelector('#place')
favPlace.addEventListener('click', favPlaceMessage)

const favRitualMessage = (event) => {
	alert('My favorite ritual is the time spent with a partner getting physically and mentally ready at the bottom of a long all-day climbing route.')
}

let favRitual = document.querySelector('#ritual')
favRitual.addEventListener('click', favRitualMessage)