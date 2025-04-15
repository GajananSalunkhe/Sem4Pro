import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

//initialize the express
const app = express()
//connect to databse
await connectDB()
// middleware
app.use(cors());
//routes
app.get('/', (req,res) => res.send("API is working"))
app.post('/clerk', express.json(), clerkWebhooks)

//port

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server runnung on PORT ${PORT}`)
})