var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs')


var artistsData = require('./albumData.json')
var albumData = require('./albums.json')
const { resolveSoa } = require('dns')
console.log("== artistsData: ", artistsData)

var port = process.env.PORT || 8000;
var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(express.static('public'))

app.get('/', function(req, res, next) {
    res.status(200).render('homePage')
})


app.get('/artist', function(req, res, next) {
    res.status(200).render('artist_list', {
        artists: artistsData
    })
})

var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removePunctuation(string) {
    return string
        .split('')
        .filter(function(letter) {
            return punctuation.indexOf(letter) === -1
        })
        .join('')
}

app.get('/artist/addartist', function(req, res, next) {
    res.status(200).render('addArtist')
})

app.post('/artist/addartist', function(req, res, next) {
     
    var name = req.body.name 
    var artistImg = req.body.url
    var city = req.body.city
    var trimmedName = name.toLowerCase().trim()
    console.log("name: ", name," trimmedName: ", trimmedName," artistImg: ", artistImg," city: ", city)


    artistsData[trimmedName].push({
        name: name,
        trimmedName: trimmedName,
        artistImg: artistImg, 
        city: city,
        //albums: albums
    })

    console.log("artistsData: ", artistsData)

    fs.writeFile(
        __dirname + '/albumData.json',
        JSON.stringify(artistsData, null, 2),
        function(err) {
            if (!err) {
                res.status(200).send("Artist was successfully stored")
            }
            else {
                res.status(500).send("Error storing artist")
            }
        }
    )
})

app.get('/albums', function(req, res, next) {
    res.status(200).render('album_list', {
    album: albumData
    })
})

app.get('/about', function(req, res, next) {
    res.status(200).render('about_page')
})

app.get('/artist/:name', function(req,res,next){
    var name = req.params.name.toLowerCase().trim();
    if (artistsData[name]) {
        res.status(200).render('artist_page', artistsData[name])
    }
    else {
        next()
    }
})

app.get('/artist/:name/:album', function(req, res, next){
    var name = req.params.name.toLowerCase().trim()
    var album = req.params.album.toLowerCase().trim()
    console.log("artistsData[name].city: ", artistsData[name].city)
    console.log("albumData[album]: ", albumData[album]);
    //console.log("albums[album].year: ", albumData[album].year);
    if (artistsData[name] && albumData[album]) {
        res.status(200).render('album_page', albumData[album])
    }
    else {
        next()
    }
})

app.get("*", function(req, res, next) {
    res.status(404).render('404', {
        path: req.url
    })
})

app.listen(port, function(err) {
    if (err) {
        throw err
    }
    console.log("== Server listening on port: ", port)
})

