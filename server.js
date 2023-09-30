const http = require("http");
const mongodb = require('mongodb');

const connectData = 'mongodb+srv://andy:DO2X0jYmpEjiSBBZ@cluster.clfkuth.mongodb.net/Reja';

mongodb.connect(connectData, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log('Error on connection MongoDB');
    } else {
        console.log('Successfully connected to MongoDB');
        module.exports = client
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        
        server.listen(PORT, () => {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});

