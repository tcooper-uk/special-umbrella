/**
 * A bunch of mocked responses from the back end.
 * anticipating the back end doing the work of authenticating to bug tracker
 * and requesting the projects / defects recorded.
 */

import IProject from "../model/project"
import IDefect from "../model/defect"
import IDefectStat from "../model/defectStatistic"

import * as data from "./project.json";
import * as defect from "./defects.json"
import * as defectStats from "./defect-stats.json"


export const getDefectsForProject = async (projectId: string) => {
    
    console.log("PROJECT ID: " + projectId.toString());

    let defects = defect.results
    .map((d: any) => {
        return {
            projectId: d.ProjectId,
            name: d.Name
        }
    });

    return new Promise<IDefect[]>((resolve) => {
        resolve(defects);
    })
}

export const getProjects = async () => {

    let results = data.results.map((r: any) => {
        return {
            name: r.name,
            id: r.id
        };
    });

    return new Promise<IProject[]>((resolve) => {
        resolve(results);
    });
}

export const getDefectStatsForProject = async (projectId: string) => {
    console.log("Stats");
    
    let results = defectStats.results.map((d: any) => {
        return {
            name: d.name,
            amount: d.amount
        }
    });

    return new Promise<IDefectStat[]>((resolve) => {
        resolve(results);
    });
}

