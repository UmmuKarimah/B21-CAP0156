const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const mongoose = require('mongoose');

const DB_INIT = () => {
    mongoose.connect("mongodb+srv://sersanadmin:sersan1234admin@newsersanharun.fzu9o.mongodb.net/capstone?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(
        setTimeout(function() {
            console.log('Database is connected')
        }, 12000)
    ).catch((err) => { console.log(err) });
}

const init = async() => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: "0.0.0.0"
    });
    DB_INIT();
    server.route(routes);
    await server.start();
    console.log('Server running on %s', server.info.uri);
}
init();