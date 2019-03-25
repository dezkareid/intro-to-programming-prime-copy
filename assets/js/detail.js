/* global window, URLSearchParams */
const url = new URLSearchParams(window.location.search)
console.log(url.get('movie'))
console.log(url.get('list'))
