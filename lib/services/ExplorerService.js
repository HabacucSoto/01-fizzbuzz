class ExplorerService {

    static filterByMission( explorers, missionToBeFiltered ){
        return explorers.filter( ({ mission }) => mission == missionToBeFiltered ) 
    }

    // static getAmountOfExplorersByMission( explorers, mission ){

    // }

    // getExplorersUsernamesByMission( explorers, mission ){

    // }

}

module.exports = ExplorerService