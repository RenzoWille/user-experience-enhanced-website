// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { response } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

const loggedInUserID = 3

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')



//ROUTES

app.get('/', async function (request, response) {
  const artworkURL = 'https://fdnd-agency.directus.app/items/fabrique_art_objects'
  const artworkFetch = await fetch(artworkURL)

  const artworkJSON = await artworkFetch.json()

  response.render('index.liquid', { artworkData: artworkJSON.data })
})

app.get('/details/:id', async function (request, response) {
  // console.log("GET detail pagina met een id "+request.params.id)

  // Const  de links naar de verschillende data
  // Hier moet je en fetch doen die de data van het artwork ophaalt
  // Plus uit een andere tabel halen of het artwork een like heeft!

  const artworkURL = `https://fdnd-agency.directus.app/items/fabrique_art_objects?filter[id][_eq]=${request.params.id}&fields=*,fabrique_users_fabrique_art_objects.*`;
  const artworkFetch = await fetch(artworkURL)
  const artworkJSON = await artworkFetch.json()

  const likedArtworks = `https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects?filter={"fabrique_users_id":3}`
  const likedArtworksFetch = await fetch(likedArtworks)
  const likedArtworksJSON = await likedArtworksFetch.json()

  // console.log(artworkJSON.data)

  response.render('details.liquid', {
    artworkData: artworkJSON.data,
    likedArtworks: likedArtworksJSON.data
  })
})

app.get('/art', async function (req, res) {
  const artworkURL = 'https://fdnd-agency.directus.app/items/fabrique_art_objects'

  const artworkFetch = await fetch(artworkURL)

  const artworkJSON = await artworkFetch.json()

  response.render('art.liquid', { artworkData: artworkJSON.data })
})

// POST
// Deze post is voor het liken van een artwork
app.post('/like-artwork/:id', async function (request, response) {
  // console.log("we hebben een post " + request.params.id)

  // Hier wil je een fetch naar Directus waarmee je een like oplsaat die hoort bij eeen artwork
  // Const artworkURL = `https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects?filter=%7B%22fabrique_users_id%22:1%7D`
  // Const artworkLikes = `https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects?filter={"fabrique_users_id":1,"fabrique_art_objects_id":[id][_eq]=${request.params.id}`
  const postLikeUrl = `https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects?filter={"fabrique_users_id":1,"fabrique_art_objects_id":[id][_eq]=${request.params.id}`
//   console.log("postLikeUrl " + postLikeUrl)

  // Post naar database
  await fetch(postLikeUrl,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //"fabrique_users_id": 1,
      //"fabrique_art_objects_id": 33,
      // Naam in database: id van de user
      fabrique_users_id: 3,
      // Naam in database: id van item die je wilt toevoegen
      fabrique_art_objects_id: request.params.id
    }),
  })
//   console.log("POST is gedaan  ")

  response.redirect(303, '/details/'+request.params.id)
})

// DELETE function to unlike

app.post('/unlike-artwork/:id', async function (request, response) {
  const postLikeUrl = (`https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects_unliked?filter={"fabrique_users_id":1,"fabrique_art_objects_id":[id][_eq]=${request.params.id}`)
    console.log("postlikeURL" + postLikeUrl)
  
  const postlikeUrlJSON = await postLikeUrl.json()
  
  const postLikeUrlID = postLikeUrl.data[0].id
  
  await fetch(postLikeUrl, {
    method: 'DELETE'
  });

  response.redirect(303, '/details/'+request.params.id)
})


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
})
