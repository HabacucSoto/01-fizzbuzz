class ExplorerService {

    static filterByMission( explorers, missionToBeFiltered ){
        return explorers.filter( ({ mission }) => mission == missionToBeFiltered ) 
    }

    static getAmountOfExplorersByMission( explorers, missionToBeFiltered ){
        return explorers.filter( ({ mission }) => mission == missionToBeFiltered ).length
    }

    // getExplorersUsernamesByMission( explorers, mission ){

    // }

}

module.exports = ExplorerService