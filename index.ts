import "./tracer";
import { createLogger, format, transports } from "winston"
import express from "express";
import crypto from "crypto";


const app = express();

app.use(express.json());

const logger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.File({ 
       filename: '/home/gomescpereira/monitorar/DataDog/node/logs/logz.log',
    }),
  ],
});
 

app.post("/users", (request, response) => {

    logger.info("Request correto");

    const { token } = request.headers;

    const { name, instagram } = request.body;

    //if(!token) {
        logger.error("invalid-token")

     // return response.status(401).end();
    //} 
    console.log(token);
    console.log(instagram)

   
    if(!name || !instagram) {
        logger.error("invalid-parameters")
        return response.status(500).json({ error: "Invalid parameters" });
    }

    const user = {
      id: crypto.randomBytes(16).toString("hex"),
      name: name,
      username: instagram
    };
   
    return response.json(user);
});


app.listen(4001, () => console.log('Executando na PORT 4001'));
