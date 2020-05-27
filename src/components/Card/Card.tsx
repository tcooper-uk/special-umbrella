import * as React from "react"
import IDefect from "../../model/defect"

const Card = ({name, projectId} : IDefect) => {

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{projectId.toString()}</p>
        </div>
    );
}

export default Card;