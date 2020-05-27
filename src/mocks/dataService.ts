/**
 * A bunch of mocked responses from the back end.
 * anticipating the back end doing the work of authenticating to bug tracker
 * and requesting the projects / defects recorded.
 */

import IProject from "../model/project"
import IDefect from "../model/defect"
import * as data from "./project.json";
import * as defect from "./defects.json"


export const getDefectsForProject = (projectId: number) => {
    
    let defects = defect.results.map((d: any) => {
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
