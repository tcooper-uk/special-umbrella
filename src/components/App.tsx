import * as React from "react";
import ProjectSelect from './ProjectSelect/ProjectSelect'
import CardLayout from './CardLayout/CardLayout'


export const App = () => {

    const [projectId, setProjectId] = React.useState<string>("");

    const onProjectChange = (projectId: string) => {
        // need to re-load our cards
        setProjectId(projectId);
    }
    
    return (
        <>
            <div className="container">
                <section className="project-selection">
                    <ProjectSelect onChange={onProjectChange} />
                </section>
                <CardLayout {...projectId} />
            </div>

            <div className="container" >

            </div>  
        </>
    );
}
