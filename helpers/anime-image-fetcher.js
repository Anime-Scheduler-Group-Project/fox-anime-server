const axios = require('axios');

const baseUrl = 'https://trace.moe/api/search?url='
const image_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5XotCEH9ArqQ5LFWNbl022awdyGAh0NI2A&usqp=CAU'

const imageAnime = (image_URL) => axios({
  method: 'get',
  url: `${baseUrl}${image_URL}`
    
})  
  .then(response=>{
    console.log(response.data);
    data = parseData(response.data)
    return data
  })
  .catch(err=>{
    console.log(err)
  })
  
function parseData(data) {  
  
  return data.docs.map(el => {
    return {
      anime: el.anime,
      episode:el.episode
    }
  })
}

module.exports = {imageAnime}