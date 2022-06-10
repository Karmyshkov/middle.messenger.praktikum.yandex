const express = require("express")

const app = express()

const { PORT = 3000 } = process.env

console.log(PORT)

app.use(express.static(__dirname + "/dist"))

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})

app.listen(PORT, () => console.log(`Server has been started on ${PORT}...`))
