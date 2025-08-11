import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import route from './routes/admin.Route.js';

const app = express();
await connectDB ();

//Middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/admin', route)


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    
})


export default app