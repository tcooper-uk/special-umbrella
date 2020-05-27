import * as React from "react";
import ProjectSelect from './ProjectSelect/ProjectSelect'
import CardLayout from './CardLayout/CardLayout'


export const App = () => {

    const [projectId, setProjectId] = React.useState<number>(null);

    const onProjectChange = (projectId: number) => {
        // need to re-load our cards
        console.log("PROJECT: " + projectId.toString());
        setProjectId(projectId);
    }
    
    return (
        <div className="container">
            <section className="project-selection">
                <ProjectSelect onChange={onProjectChange} />
            </section>

            <CardLayout {...projectId} />
        </div>
    );
}
