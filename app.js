let peliculas = require("./peliculas")

console.log(`Top peliculas favoritas(no estan ordenadas)`)
console.log(`------------------------------`)
for (let i = 0; i < peliculas.length; i++) {
    console.log({
        id: peliculas[i].id,
        rating: peliculas[i].rating,
        awards: peliculas[i].awards,
        length: peliculas[i].length,
        price: peliculas[i].price,
        genre: peliculas[i].genre
    });
    console.log("------------------------------")
}