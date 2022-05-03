const ExplorerController = require( "../../../lib/controllers/ExplorerController.js" );

describe( "Unit test for class ExplorerController", () => {

    test( "1) Get explorers by mission", () => {

        const res = ExplorerController.getExplorersByMission( "node" );

        expect( res ).not.toBeUndefined();

    } );

    test( "2) Get explorers usernames by mission", () => {

        const res = ExplorerController.getExplorersUsernamesByMission( "node" );

        expect( Array.isArray( res ) ).toBe( true );

    } );

    test( "3) Get explorers amount by mission", () => {

        const res = ExplorerController.getExplorersAmountByMission( "node" );

        expect( typeof res ).toBe( "number" );

    } );

    test( "4) Get fizzbuzz validation by number", () => {

        const res = ExplorerController.getFizzBuzzValidationByNumber( 15 );

        expect( res ).toBe( "FizzBuzz" );

    } );

    test( "5) Get explorers names by mission", () => {

        const res = ExplorerController.getExplorersNamesByMission( "node" );

        expect( Array.isArray( res ) ).toBe( true );

    } );

} );