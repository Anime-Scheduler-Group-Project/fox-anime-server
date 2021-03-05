# Fox Anime App Server
Fox Anime app is an application to shceduled your time to watch anime. this app has: 
  * list of anime 
  * converter image

  ## List of available endpoints:
​
  * `POST /register`
  * `POST /login`
  * `GET /anime`
  * `POST /imageAnime`
  * `POST /holidays`

  ## List of 3rd API 
  * https://trace.moe/api/search
  * https://jikan.docs.apiary.io/#introduction/http-response
  * https://calendarific.com/api/v2/holidays

# POST /register
Request:

- data:
```json
{
  "email": "string",
  "password": "string",
  "name": "string",
}
```
Response:
- status: 201
- body:
```json
{
  "email": "string"
}
```
error: 
- status: 400
- body: 
```json
{
  "message": "Email already exist" ,
}
```
```json
{
  "message": "Name cannot be empty" ,
}
```
```json
{
  "message": "Email cannot be empty" ,
}
```
```json
{
  "message": "Password cannot be empty" ,
}
```
```json
{
  "message": "Password must be higher than 6 character" ,
}
```
- status: 500
- body:
```json
{
  "message": "Internal server error",
}
```

### POST /login
Request:
- data:
```json
{
  "email": "string",
  "password": "string"
}
```
Response:
- status: 200
- body:
```json
{
  "access_token": "jwt string"
}
```
error: 
- status: 400
- body: 
```json
{
  "message": "Invalid email or password", 
},
{
  "message": "Email or password cannot be empty", 
}
```
- status: 500
- body:
```json
{
  "message": "Internal server error",
}
```

### GET /anime
description: 
  get all user list of anime
Request:
- headers: access_token (string)
Response:
- status: 200
- body:
```json
{
  "anime": [
    {
        "mal_id": 40028,
        "url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
        "title": "Shingeki no Kyojin: The Final Season",
        "image_url": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
        "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps. \r\n\r\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\r\n\r\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\r\n\r\n[Written by MAL Rewrite]",
        "score": 9.16,
        "episodes": 16,
        "index": 0
    },
    {
        "mal_id": 39486,
        "url": "https://myanimelist.net/anime/39486/Gintama__The_Final",
        "title": "Gintama: The Final",
        "image_url": "https://cdn.myanimelist.net/images/anime/1027/109706.jpg",
        "synopsis": "New Gintama movie.",
        "score": 8.84,
        "episodes": 1,
        "index": 1
    }
}
```

### POST /imageAnime
description: 
  giving description photo by copying the url photo
Request:
- headers: access_token (string)
- body: 
```json

  {
    "url": "image_url"
  }
```
Response:
- status: 200
- body:
```json
[
  {
    "name": "one piece"
  },
  {
    "name": "naruto"
  }
]

```
Error:
- status: 500
- body:
```json
{
  "message": "Internal server error",
}
```
- status: 400
- body:
```json
{
  "message": "Authentication error",
}
```

### POST /holidays
description: 
  help user to count episode per day
Request:
- headers: access_token (string)
- body:
```json
{
  "episodes": "integer",
  "episodePerday": "integer"
}
```
Response:
- status: 200
- body:
```json
{
  "data": [
    {
      "name": "Sunday",
      "country": "Indonesia",
      "date": "2021-03-07"
    },
    {
      "name": "Maha Shivaratri",
      "country": "Indonesia",
      "date": "2021-03-11"
    },
    {
      "name": "Cuti Bersama",
      "country": "Indonesia",
      "date": "2021-03-12"
    }
  ]
}
```
Error:
- status: 500
- body:
```json
{
  "message": "Internal server error",
}
```
- status: 400
- body:
```json
{
  "message": "Number must be greater than 0",
}
```
- status: 400
- body:
```json
{
  "message": "Authentication error",
}
```