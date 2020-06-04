import DefectStat from "../model/DefectStat.ts"
import statsSet from "../db/database.ts";

type defectStatList = () => Promise<DefectStat[]>;

const getDefectStats: defectStatList = async  () => {

    return (await statsSet).value().map<DefectStat>((s: any) => {
        let d: DefectStat = {
            name: s.name,
            amount: s.amount
        };
        return d;
    });
};

export default getDefectStats;