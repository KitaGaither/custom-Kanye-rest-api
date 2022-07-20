import axios from "axios";
import express from "express";
import cors from "cors";


// I now have an express app/server that can receive https requests and send back httpe
const app = express();
const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);
})

app.use(cors());


const URL = "https://api.kanye.rest/";

// GET /kanye_quotes

//SERVERNAME.METHODNAME(PATHNAME, CALLBACK FUNCTION)
app.get("http://localhost:8000/kanye_quotes", 
() => {
    console.log("middleware hit")
    .next();

},

async (req, res, next) => {
    
    try {
        const response = await axios.get(URL)
        res.send(response.data)
    } catch (error) {
        console.log(error);
    }
});



