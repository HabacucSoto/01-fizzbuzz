class ExplorerService {

    static filterByMission( explorers, missionToBeFiltered ){

        return explorers.filter( ({ mission }) => mission == missionToBeFiltered ); 

    }

    static getAmountOfExplorersByMission( explorers, missionToBeFiltered ){

        return explorers.filter( ({ mission }) => mission == missionToBeFiltered ).length;
        
    }

    static getExplorersUsernamesByMission( explorers, missionToBeFiltered ){

        const filtered = explorers.filter( ({ mission }) => mission == missionToBeFiltered );

        return filtered.map( ({ githubUsername }) => githubUsername );

    }

}

module.exports = ExplorerService;