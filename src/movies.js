// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = (movies) => movies.map(function (directors){
  return directors.director;
});


//console.log(getAllDirectors);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies = (movies) => {
  let howMany = movies.filter(function (spielbergDramas) {
  return spielbergDramas.genre.includes('Drama') && spielbergDramas.director === "Steven Spielberg";
});
console.log('-------------------------------------------------------')
return howMany.length;
}

//console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
let scoresAverage = (movies) => {
  if (movies.length == 0){return 0;}
  let avg = (movies.reduce(function (total, current) {
    if (current.score != '' && current.score != undefined){return total + current.score;}
    else {return total;}
},0)/movies.length).toFixed(2);
return parseFloat(avg);
}

//console.log(scoresAverage);

// Iteration 4: Drama movies - Get the average of Drama Movies


let dramaMoviesScore = (movies) => {
let dramas = movies.filter(function (movie) {
  return movie.genre.includes('Drama')
});  
if (dramas.length === 0){return 0;}
  return parseFloat((dramas.reduce(function (total, current) {
  // if (current.genre.includes('Drama')) {
    return total + current.score;
  // } 
  // else {
  //   return total;
  // }
},0)/dramas.length).toFixed(2));
}

//console.log(dramaMoviesScore());

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*let orderByYear = movies.sort(function(a, b) {
  return parseFloat(a.year) - parseFloat(b.year);
})
console.log(orderByYear);*/
function orderByYear(array) {
  if (array.length === 0){return [];}
  return array.sort((a, b)=> {
      return a.year - b.year || a.title.localeCompare(b.title)
  })
}

//console.log(orderByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (movies) => {
    let tmpArr = [...movies].map((movie)=> movie.title);
    let arr = tmpArr.sort(function(a, b) {
    let textA = a.toUpperCase();
    let textB = b.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
 return ((arr.length<=20)? arr:arr.slice(0,20));
}
//console.log(orderAlphabetically.slice(0, 20));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let corrected = [...movies].map((movie)=> {
    if (movie.duration == "" || movie.duration == undefined){return movie;}
    let tmp = movie.duration.split(" ");
    let minutes = 0;
    for(let part of tmp){
      if (part.includes('h')){minutes += parseInt(part.replace('h','') * 60);}
      else if (part.includes('min')){minutes += parseInt(part.replace('min',''));}
    } 
    movie.duration = minutes;
    return movie;
  });
  return corrected;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(array) {
  if (array.length === 0){return null;}
  let scores = [];
  let count = [];
  for (let item of array){
    scores[item.year] = ((scores[item.year] != '' && scores[item.year] != undefined)? scores[item.year]+item.score:item.score);
    count[item.year] = ((count[item.year] != '' && count[item.year] != undefined)? count[item.year]+1:1);
  }
  let maxYear = 0;
  let maxAverage = 0;
  for(year in scores){
    if (scores[year]/count[year] > maxAverage){
      maxAverage = scores[year]/count[year];
      maxYear = year;
    }
  }
  return `The best year was ${maxYear} with an average score of ${maxAverage}`;
}

// console.log(sortedByYear);



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
