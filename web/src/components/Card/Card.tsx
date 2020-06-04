import * as React from "react"
import IDefectStat from "../../model/defectStatistic"

const Card = ({name, amount} : IDefectStat) => {

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{amount}</p>
        </div>
    );
}

export default Card;