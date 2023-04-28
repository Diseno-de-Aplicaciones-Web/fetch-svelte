import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/datos/",(peticion, resposta)=>{
    resposta.json({
        datos: "Estos son os datos"
    })
})

app.listen(8000)