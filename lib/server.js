const ExplorerController = require( "./controllers/ExplorerController.js" );
const express = require( "express" );
const app = express()
app.use( express.json() );
const port = 3000;

app.get( "/", ( req, res ) => {

    res.json({ msg: "Welcome to FizzBuzz API!" });

} );

app.get( "/v1/explorers/:mission", ( req, res ) => {

    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission( mission );

    res.json( explorersInMission );

} );

app.get( "/v1/explorers/amount/:mission", ( req, res ) => {

    const mission = req.params.mission;
    const explorersAmount = ExplorerController.getExplorersAmountByMission( mission );

    res.json( { mission, quantity: explorersAmount } );

} );

app.get( "/v1/explorers/usernames/:mission", ( req, res ) => {

    const mission = req.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission( mission );

    res.json( { mission, usernames } );

} );

app.listen( port, () => console.log( `server: ${ port }` ) );