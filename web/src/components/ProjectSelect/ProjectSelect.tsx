import * as React from "react"
import * as dataService from "../../mocks/dataServiceMock"
import IProject from "../../model/project"

const DEFAULT_PROJECT_KEY = 'default-project';

export interface ProjectSelectRequest {
    onChange(projectId: string): void
}

const ProjectSelect = (props: ProjectSelectRequest) => {

    const [projects, setProjects] = React.useState(null);
    const projSelect = React.useRef(null);

    React.useEffect(() => {
        let counter: number = 0;

        if (projects == null) {

            dataService.getProjects()
                .then((projects: IProject[]) => {

                    setProjects(projects.map((project) => {
                        return (
                            <option key={counter++} value={project.id.toString()} selected={project.id === selectedProjectId}>{project.name}</option>
                        );
                    }));

                    let selectedProjectId = setDefaultProject(projects);
                    
                });     
        } else {
            setDefaultProject(projects);
        }
        
    }, []);

    const setDefaultProject = (projects: IProject[]) => {

        let defaultProject = window.localStorage.getItem(DEFAULT_PROJECT_KEY);

        if(defaultProject !== null) {
        
            if(projects.some((p: IProject) => p.id === defaultProject)) {
                props.onChange(defaultProject);
            }
        }

        return defaultProject;
    }

    const onProjectChange = (event: any) => {

        window.localStorage.setItem(DEFAULT_PROJECT_KEY, projSelect.current.value);        

        console.log(projSelect.current.value);
        
        props.onChange(projSelect.current.value);
    }

    return (
        <select ref={projSelect} onChange={onProjectChange}>
            {projects}
        </select>
    )
}

export default ProjectSelect;