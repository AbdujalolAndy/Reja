const http = require("http");
const mongodb = require('mongodb');
const colors = require('colors/safe')

const connectData = 'mongodb+srv://andy:bav52w6vfTXIq5Cy@cluster0.4ahexgk.mongodb.net/Reja';


mongodb.connect(connectData, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log(colors.blue('Error on connection MongoDB'));
    } else {
        console.log(colors.green('Successfully connected to MongoDB'));
        module.exports = client
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        
        server.listen(PORT, () => {
            console.log(colors.rainbow(`The server is running successfully on port: ${PORT},`,), colors.red(`http://localhost:${PORT}`));
        });
    }
});

