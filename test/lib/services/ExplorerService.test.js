const Reader = require( '../../../lib/utils/Reader.js' )
const explorers = Reader.readJsonFile( 'explorers.json' )
const ExplorerService = require( '../../../lib/services/ExplorerService.js' )

describe( 'Unit test for class ExplorerService', () => {

    test( '1) Filter by mission', () => {

        expect( ExplorerService.filterByMission( explorers, 'node' ) ).not.toBeUndefined()

    } )

} )