const FizzBuzz = require( "../../../lib/services/FizzBuzzService.js" );

describe( "Unit test for class FizzBuzz", () => {

    test( "1) fizzbuzz", () => {

        const explorer = { name: "Explorer1", score: 15 };

        expect( FizzBuzz.applyValidationInExplorer( explorer ) ).not.toBeUndefined();

    } );

} );