const fs = require('fs')

class Reader {

    static readJsonFile( jsonPath ){
        const rawdata = fs.readFileSync( jsonPath )
        const explorers = JSON.parse( rawdata )
        
        return explorers
    }

}

module.exports = Reader