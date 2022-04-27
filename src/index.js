//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let urls = [];
let breeds = []


function addImages() {
    const imgContainer = document.querySelector('#dog-image-container')
    console.log(imgContainer)
    const imgList = document.createElement('ul')
    console.log(imgList)
    imgContainer.append(imgList)
    for (url of urls) {
        //console.log(url)
        const img = document.createElement('img')
        img.src = `${url}`
        imgList.append(img)
    }
}

function addBreeds() {
    const breedContainer = document.querySelector('#dog-breeds')
    console.log(breedContainer)
    for (const breed of breeds) {
        //console.log(breed)
        const breedName = document.createElement('li')
        breedName.textContent = breed
        breedContainer.append(breedName)
        //console.log(breedName)
    }
}

function highlightDog() {
    const breedList = document.querySelector('#dog-breeds')
    breedList.addEventListener('click', (e)=>{
        console.log(e.target)
        let target = e.target
        target.style.color = "red"
    })
}

function selectBreed() {
    const ddl = document.querySelector('#breed-dropdown')
    console.log(ddl)
    ddl.addEventListener('change', (e)=> {
        const breedLetter = e.target.value
        console.log(breedLetter)
        const breedSelect = breeds.filter((breed)=> {
            return breed.startsWith(`${breedLetter}`)})
        console.log(breedSelect)
        breeds = breedSelect
            })
    }

const domLoaded = ()=> {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Loaded')
        fetch(imgUrl).then(res => res.json()).then(data => {
            urls = data.message
            console.log(urls)
            addImages()
        fetch(breedUrl).then(res => res.json()).then(data => {
            breeds = Object.keys(data.message)
            //console.log(breeds)
            addBreeds()
            highlightDog()
            selectBreed()
            })
    })
})}

domLoaded()