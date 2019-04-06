import express from "express";

import graphqlHTTP from  "express-graphql"

import schema from './schema'

import { connect } from './db'

const app = express();

connect();
// Settings

// Seteamos puerto.
app.set('port', process.env.PORT || 8080)

app.get('/', (req, res) => {
    res.json({
        message: "Work"
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

// El servidor esta escuchando
app.listen(app.get('port'), () => console.log("Server listen on port ", app.get('port')));

