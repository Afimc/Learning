// const express = require('express')
// const axios = require('axios')
// const app = express()
// const port = 3000
// const cityResults =[]
// console.log(cityResults)

// app.get('/getCities', (req, res) => {
//   res.send(cityResults)
// })

// app.post('/Country', async(req, res) => {
//     const input =req.query.country
//     const result=await axios.get("https://countriesnow.space/api/v0.1/countries")
//     const filteredResult= result.data.data.find(obj => {
//             return obj.country === input
//    })

//    cityResults.push(filteredResult.cities)
//    res.send(filteredResult.cities)
// //   .then((response) => {
// //      const result = response.data.data.filter(obj => {
// //         return obj.country === input
// //       })
// //       res.send(result[0].cities)
// //  })

// //   .catch((err) => console.log(err));

//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// -||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||






const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const resolutions = []
const sizeOf = require("image-size")


app.get('/getResolutions', (req, res) => {
  res.send(resolutions)
})

app.post('/UplokadIMG', async (req, res) => {
  const geTurl = req.query.url
  const response = await axios.get(geTurl, { responseType: 'arraybuffer' })
  const buffer = Buffer.from(response.data, "utf-8")
  const size = sizeOf(buffer)
  const width = size.width
  const height = size.height
  res.send('Resolution of Image is ' + height + ' X ' + width)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})