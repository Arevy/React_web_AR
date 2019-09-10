const express = require('express');
const cors = require('cors');
const app = express();
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.PORT || 5000);

app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});