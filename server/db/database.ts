import DefectStat from "../model/DefectStat.ts"
import { CasualDB } from "https://deno.land/x/casualdb@0.1.0/mod.ts";

interface StatsSchema {
    results: Array<DefectStat>;
}

const db = new CasualDB<StatsSchema>();

await db.connect("./db/defect-stats.json", {
    bailIfNotPresent: true,
});

const statsSet = db.get<StatsSchema['results']>('results');

export default statsSet;