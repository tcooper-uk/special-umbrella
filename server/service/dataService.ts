import DefectStat from "../model/DefectStat.ts"
import statsSet from "../db/database.ts";

type defectStatList = () => Promise<DefectStat[]>;

class dataService {

    getDefectStats: defectStatList = async () => {

        return statsSet.then(async (collection) => {

            return collection
                .value()
                .map<DefectStat>((s: any) => {
                    let d: DefectStat = {
                        name: s.name,
                        amount: s.amount
                    };
                    return d;
                });
        });
    };

}

export default dataService;