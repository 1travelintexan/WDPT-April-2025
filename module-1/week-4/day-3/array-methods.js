const numArr = [1, 2, 4, 5, 6, 7, 8, 1, 2]

const arrMovies = [
  { title: "action movie", genre: "action" },
  { title: "drama movie", genre: "drama" },
  { title: "fiction movie", genre: "fiction" },
]

//if you use curly brackets {} in the arrow function, you need return
const mapWithReturn = arrMovies.map((movie) => {
  return movie
})
//if you don't use curlies {}, you can omit the return
const mapOmittingReturn = arrMovies.map((num) => num)

console.log(mapWithReturn)
console.log(mapOmittingReturn)

//MAP
//loops over arr of movies, and returns only title
const movieTitles = arrMovies.map(
  (movie) => `movie title: ${movie.title}, movie genre: ${movie.genre}`
)

console.log(movieTitles)

//FILTER
//loops over arr of movies, returns only movies with genre drama
const dramaMovies = arrMovies.filter((movie, index) => {
  if (movie.genre !== "drama") {
    return movie
  }
})

console.log("not drama movies:", dramaMovies)

//REDUCE
//loops over arr of numbers, returns the value accumulated
const totalOfNumArr = numArr.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue)
}, 0)

console.log(totalOfNumArr)

//SORT

const randomNumArr = [1, 5, 8, 2, 3, 10, 12, 9]

randomNumArr.sort((previousValue, currentValue) => {
  return previousValue - currentValue
})

console.log(randomNumArr)

// REVERSE

console.log(randomNumArr.reverse())

// SYNTAX CHEATSHEET
//arr.map(currentElement, index, array)
//arr.filter(currentElement, index, array)
//arr.forEach(currentElement, index, array)

//arr.reduce(previousValue, currentValue, index, array)
//arr.sort(previous, currentValue, index, array)
