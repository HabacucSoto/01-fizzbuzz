const ExplorerService = require( "../services/ExplorerService.js" );
// const FizzBuzzService = require( "../services/FizzBuzzService.js" );
const Reader = require( "../utils/Reader.js" );
const explorers = Reader.readJsonFile( "explorers.json" );

class ExplorerController {

    static getExplorersByMission( mission ){

        return ExplorerService.filterByMission( explorers, mission );

    }

    static getExplorersUsernamesByMission( mission ){

        return ExplorerService.getExplorersUsernamesByMission( explorers, mission );

    }

    static getExplorersAmountByMission( mission ){

        return ExplorerService.getAmountOfExplorersByMission( explorers, mission );

    }

}

module.exports = ExplorerController;