const Reader = require( "../../../lib/utils/Reader.js" );
const explorers = Reader.readJsonFile( "explorers.json" );
const ExplorerService = require( "../../../lib/services/ExplorerService.js" );

describe( "Unit test for class ExplorerService", () => {
    
    test( "1) Filter by mission", () => {
        
        const res = ExplorerService.filterByMission( explorers, "node" );

        expect( res ).not.toBeUndefined();

    } );

    test( "2) Amount of explorers by mission", () => {

        const res = ExplorerService.getAmountOfExplorersByMission( explorers, "node" );
        
        expect( typeof res ).toBe( "number" );

    } ); 

    test( "3) Explorers usernames by mission", () => {

        const res = ExplorerService.getExplorersUsernamesByMission( explorers, "node" );
        
        expect( Array.isArray( res ) ).toBe( true );

    } );

    test( "3) Explorers names by mission", () => {

        const res = ExplorerService.getExplorersNamesByMission( explorers, "node" );
        
        expect( Array.isArray( res ) ).toBe( true );

    } );

} );