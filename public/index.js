console.log("hiiiiii :D")


/*let slider = tns({
    container: ".album-img",
    "slideBy" : "1",
    "speed": 400,
    "nav": true,
    autoplay: true,
    controls: true,
    autoplayButtonOutput: false, 
    responsive: {
        2000: {
            items: 2000,
            gutter: 20
        },
        1600: {
            items: 7,
            gutter: 20
        },
        1024: {
            items: 5,
            gutter: 20
        },
        768: {
            items: 3, 
            gutter: 20
        },
        480: {
            items: 2,
            gutter: 20
        }
    }    
}) */


/*var addPostButton = document.getElementById('add-post-button')
addPostButton.addEventListener('click', addPostClick)

function addPostClick() { 
    console.log("inside addPostClick function")
    var addPostBackground = document.getElementById('modal-backdrop')
    addPostBackground.style.display = "inline"
    var addPostModal = document.getElementById('add-post-modal')
    addPostModal.style.display = "inline" 
    document.getElementById('post-text-input').value = ''
    document.getElementById('artist-photo-input').value = ''
    document.getElementById('artist-city-input').value = ''
}

var postAddButton = document.getElementById('modal-accept') */

/*var addArtistAccept = document.getElementById('add-artist-accept')
addArtistAccept.addEventListener('click', postAccept)
var addAlbumButton = document.getElementById('add-album-button')
addAlbumButton.addEventListener('click', addAlbumClick) 


function addAlbumClick(){
    console.log("inside add album click function")
    var addModalBackground = document.getElementById('modal-backdrop')
    addModalBackground.style.display = "inline"
    var addModal = document.getElementById('add-post-modal')
    addModal.style.display = "inline"

    document.getElementById('album-name-input').value = ''
    document.getElementById('album-cover-input').value = ''
    document.getElementById('album-year-input').value = ''
    addAlbums()
}

function addAlbums() {
    var albumName = document.getElementById('album-name-input').value
    var albumCover = document.getElementById('album-cover-input').value
    var albumYear = document.getElementById('album-year-input').value
    var trimmedName = albumName.toLowerCase().trim()

    var context = {
        album: albumName,
        trimmedName: trimmedName,
        year: albumYear,
        url: albumCover,
        tracklist: {

        }
    }

    var tracks = 2
    var addTrackButton = document.getElementById('add-track-button')
    addTrackButton.addEventListener('click', addTrack(tracks))
    addTrack(tracks)
    tracks++
}
*/

/* <div class="album-input-element">
        <label for="album-tracklist-input">Track 1</label>
        <input type="text" id="album-tracklist-input"></input>
    </div>

function addTrack(tracks){

    tracks.toString()
    console.log("inside addtrack function, tracks: ", tracks)
     var tracks = document.getElementById('tracklist')
    
     var albumInputDiv = document.createElement('div')
     albumInputDiv.classList.add('album-input-element')
     tracks.appendChild(albumInputDiv)

     var trackLabel = document.createElement('label')
     trackLabel.setAttribute('for', 'album-tracklist-input')
     albumInputDiv.appendChild(trackLabel)
     trackLabel.textContent = "Track #"

     var trackInput = document.createElement('input')
     trackInput.setAttribute("type", "text")
     trackInput.setAttribute('id', 'album-tracklist-input')
     albumInputDiv.appendChild(trackInput)

    console.log("albumInputDiv: ", albumInputDiv)

}

function postAccept() { 
    var artistName = document.getElementById('artist-name-input').value
    var artistImage = document.getElementById('artist-image-input').value
    var artistCity = document.getElementById('artist-city-input').value
    albums = addAlbums()

    if (artistName == '' || artistImage == '' || artistCity == ''){ 
        window.alert('Please fill out all fields.')
    }

    else { 
        insertNewCity(artistCity)
        insertNewArtist(artistName, artistImage, artistCity)
        addPostCancel()
    }
}

//postAddButton.addEventListener('click', postAccept)

function addPostCancel() { 
    var modalBackground = document.getElementById('modal-backdrop')
    modalBackground.style.display = 'none'
    var postModal = document.getElementById('add-post-modal')
    postModal.style.display = 'none'
}



var closeModal = document.getElementById('modal-close')
closeModal.addEventListener('click', addPostCancel)

var cancelModal = document.getElementById('modal-cancel')
cancelModal.addEventListener('click', addPostCancel)

*/

function handleText(event){ 
    var text = event.currentTarget.value 
    allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ')
}

/*
<div class="artist-post" data-name="Tyler, The Creator" data-city="Los Angeles">
                    <div class="post-content">
                        <div class="post-image-container">
                            <img src="https://th.bing.com/th/id/OIP.sq0D5En8F03vVA0ZiQOOQQHaE8?pid=ImgDet&rs=1" alt ="Tyler, The Creator">
                        </div>

                        <div class= "info-albums-container">
                            <div class="post-info-container">
                                <a href="Tyler the Creator page" class="post-title"> Tyler, The Creator</a> <a href="Los Angeles page" class ="post-city">Los Angeles</a>
                            </div>
                            <div class="album-image-container">
                                <img src= "https://th.bing.com/th/id/R.b4590357ef2d6297cc53e957613eb90f?rik=66DSAiyz0VRSkw&riu=http%3a%2f%2fdjhalfpint.com%2fwp-content%2fplugins%2frss-poster%2fcache%2f19b5e_Cover-e1623949888399.jpeg&ehk=FpM4bCY8M447uisjFIT6NwqIlvE%2bE5EJKVusbAc3WdQ%3d&risl=&pid=ImgRaw&r=0" alt="Call me if you Get Lost">
                                <img src="https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/hkcs9pgcxaubh9e9sc4c/tyler-the-creator-igor-cover" alt="Igor">
                                <img src="https://i2.wp.com/www.xxlmag.com/files/2017/07/100000x100000-999.jpg" alt="Flower Boy">
                                <img src="https://th.bing.com/th/id/OIP.Qn2x-70YRxPOX9isFYI1qwHaHa?pid=ImgDet&rs=1" alt="Cherry Bomb">
                                <img src="http://assets.rollingstone.com/assets/2013/list/20-best-hip-hop-albums-of-2013-20131217/items/tyler-the-creator-wolf-19691231/139952/_original/1035x1035-tylerthecreator-1800-1386785529.jpg" alt="Wolf">
                                <img src="https://media.pitchfork.com/photos/5929af065e6ef95969321d2c/1:1/w_600/25958048.jpg" alt="Goblin"> 
                            </div>
                        </div>
                    </div> 
                </div> 
*/ 

var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removePunctuation(string) {
    return string
        .split('')
        .filter(function(letter) {
            return punctuation.indexOf(letter) === -1
        })
        .join('')
}

function insertNewArtist(artistName, artistImage, artistCity){ 
    var posts = document.getElementById('artists')
    
    var postDiv = document.createElement('class')
    postDiv.classList.add('artist-post')
    posts.appendChild(postDiv)
    postDiv.dataset.name = artistName 
    postDiv.dataset.city = artistCity 

    var postContentDiv = document.createElement('div')
    postContentDiv.classList.add('post-content')
    postDiv.appendChild(postContentDiv)

    var postImageContainer = document.createElement('div')
    postImageContainer.classList.add('post-image-container')
    postContentDiv.appendChild(postImageContainer)

    var postImg = document.createElement('img')
    postImg.src = artistImage 
    postImg.alt = artistName 
    postImageContainer.appendChild(postImg)

    var infoAlbumsContainer = document.createElement('div')
    infoAlbumsContainer.classList.add('info-albums-container')
    postContentDiv.appendChild(infoAlbumsContainer)

    var postInfoContainer = document.createElement('div')
    postInfoContainer.classList.add('post-info-container')
    infoAlbumsContainer.appendChild(postInfoContainer)

    var artistNameText = document.createElement('a')
    artistNameText.href = '/artist/' + artistName.toLowerCase().trim()
    artistNameText.classList.add('post-title')
    artistNameText.textContent = artistName
    postInfoContainer.appendChild(artistNameText)

    var artistCityText = document.createElement('a')
    artistCityText.href = '/city' + artistCity.toLowerCase()
    artistCityText.classList.add('post-city')
    artistCityText.textContent = artistCity
    postInfoContainer.appendChild(artistCityText)

    var albumImageContainer = document.createElement('div')
    albumImageContainer.classList.add('album-image-container')
    infoAlbumsContainer.appendChild(albumImageContainer)

    console.log("Post: ", postDiv)
}


function insertNewCity (artistCity) { 

    var postCities = document.getElementsByClassName('artist-post')
    for (var i = 0; i < postCities.length; i++) { 
        console.log("postCities[",i,"].dataset.city: ", postCities[i].dataset.city, " , artistCity: ", artistCity)
        if (postCities[i].dataset.city == artistCity) { 
            return
        }
    }

    var select = document.getElementById('filter-city')

    var cityOption = document.createElement('option')
    cityOption.textContent = artistCity
    select.appendChild(cityOption)

    console.log("select: ", select)
}

var updateFilter = document.getElementById('filter-button')
updateFilter.addEventListener('click', filter)

function filter() { 
    console.log("inside filter function");
    var filterText = document.getElementById('filter-text').value
    var filterCity = document.getElementById('filter-city').value
    var posts = document.getElementsByClassName('artist-post')
    var titles = document.getElementsByClassName('post-title')

    for (var i = 0; i < posts.length; i++) { 

        if (filterText.toUpperCase() == titles[i].textContent.toUpperCase() && filterText != '' && filterCity == '') { 
            posts[i].style.display = "inline-block"
        }

        else if (filterText == '' && filterCity != '' && filterCity == posts[i].dataset.city) { 
            posts[i].style.display = "inline-block"
        }

        else if (filterText.toUpperCase() == titles[i].textContent.toUpperCase() && filterCity == posts[i].dataset.city && filterCity != '' && filterText != '') { 
            posts[i].style.display = "inline-block"
        }

        else if (filterText == '' && filterCity == ''){ 
            posts[i].style.display = "inline-block"
        }
        
        else {
            posts[i].style.display = "none"
        } 
    }
}

function textSearch() {
    var i;
    var titles = document.getElementsByClassName('post-title')
    var filterText = document.getElementById('filter-text').value
    var posts = document.getElementsByClassName('artist-post')
    for (i = 0; i < titles.length; i++) {
        txtValue = titles[i].textContent || titles[i].innerText;
            if (txtValue.toUpperCase().indexOf(filterText) > -1) {
                posts[i].style.display = "";
            } else {
                posts[i].style.display = "none";
            }
    }
}

function createAlbumPage(imageURL, year, albumTitle) { 
   
    var context = {
        album: albumTitle,
        year: year,
        url: imageURL,
    }

    var albumPage = Handlebars.templates.album_page(context)
    console.log("albumPage: ", albumPage)
    return albumPage
}

function createArtistPage(artistName, trimmedName, artistCity, artistAlbums) {
    var context = {
        name: artistName, 
        trimmedName: trimmedName,
        city: artistCity,
        albums: artistAlbums
    }

    var artistPage = Handlebars.templates.artist_page(context)
    console.log("artistPage: ", artistPage)
    return artistPage
}