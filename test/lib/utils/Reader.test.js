const Reader = require( '../../../lib/utils/Reader.js' )

describe( 'Unit test for the given scripts', () => {

    test( '1) test for class reader', () => {

        const explorers = Reader.readJsonFile( 'explorers.json' )

        expect( Array.isArray( explorers ) ).toBe( true )

    } )

} )
