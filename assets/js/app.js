/* global fetch */
function fetchData (callback) {
  fetch('https://intro-to-programming-1b6e8.firebaseio.com/movies.json')
    .then(function (response) {
      return response.json()
    })
    .then(handleResponse)
}

function fillVideoList (idList, videos) {
  const list = document.getElementById(idList)
  for (let index = 0; index < videos.length; index++) {
    const item = document.createElement('li')
    item.addEventListener('click', movieClicked)
    item.dataset.id = videos[index].id
    item.dataset.list = idList
    const image = document.createElement('img')
    image.src = videos[index].image
    image.alt = videos[index].title
    image.classList.add('list-video--image')
    item.appendChild(image)
    list.appendChild(item)
  }
}

function handleResponse (listsVideo) {
  const recommendations = toArray('recommendations', listsVideo)
  fillVideoList('recommendations', recommendations)
  const prime = toArray('prime', listsVideo)
  fillVideoList('prime', prime)
}

function toArray (key, object) {
  const source = object[key]
  return Object.values(source)
}

fetchData(handleResponse)

function goToMovie (url) {
  window.location.href = url
}

function movieClicked (event) {
  const { id, list } = this.dataset
  const { protocol, host } = window.location
  const url = protocol + '//' + host + '/detail?movie=' + id + '&list=' + list
  goToMovie(url)
}
