import * as React from "react"
import * as dataService from "../../mocks/dataService"
import IProject from "../../model/project"

export interface ProjectSelectRequest {
    onChange(projectId: number): void
}

const ProjectSelect = (props: ProjectSelectRequest) => {

    const [projects, setProjects] = React.useState(null);

    React.useEffect(() => {
        let counter: number = 0;

        dataService.getProjects()
            .then((projects: IProject[]) => {

                setProjects(projects.map((project) => {
                    return (
                        <option key={counter++} value={project.id.toString()}>{project.name}</option>
                    );
                }));
                
            });
    }, []);

    const onProjectChange = (event: any) => {

        console.log("Changing Project...");

        let projectId = Number.parseInt(event.target.value);
        
        props.onChange(projectId);
    }

    return (
        <select onChange={onProjectChange}>
            {projects}
        </select>
    )
}

export default ProjectSelect;