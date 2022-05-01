const ExplorerController = require( "./controllers/ExplorerController.js" );
const express = require( "express" );
const app = express()
app.use( express.json() );
const port = 3000;

app.get( "/", ( req, res ) => {

    res.json({ msg: "Welcome to FizzBuzz API!" });

} );

app.get( "/v1/explorers/:mission", (req, res) => {

    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission( mission );

    res.json( explorersInMission );

} );

app.listen( port, () => console.log( `server: ${ port }` ) );