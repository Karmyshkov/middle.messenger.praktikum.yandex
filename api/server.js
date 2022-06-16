const express = require("express")
const path = require("path")

const app = express()

const { PORT = 3000 } = process.env
const pathName = path.join(__dirname, "../dist/index.html")

app.use(express.static("./dist"))

app.get("/*", (req, res) => {
  res.sendFile(pathName)
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
