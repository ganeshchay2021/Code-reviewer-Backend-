import dns from 'node:dns/promises';
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import app from "./src/app.js";
import config from "./src/config/config.js";

app.listen(config.port, ()=>{
    console.log("The server is runnning on port 3000");
});



