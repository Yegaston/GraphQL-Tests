import express from "express";

import graphqlHTTP from  "express-graphql"

import schema from './schema'

const app = express();

// Settings

// Seteamos puerto.
app.set('port', process.env.PORT || 3100)

app.get('/', (req, res) => {
    res.json({
        message: "Work"
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,

}))

// El servidor esta escuchando
app.listen(app.get('port'), () => console.log("Server listen on port ", app.get('port')));

