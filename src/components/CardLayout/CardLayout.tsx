import * as React from "react"

import Card from "../Card/Card"

import * as dataService from "../../mocks/dataServiceMock"
import IDefectStat from "../../model/defectStatistic"


const CardLayout = (projectId: string) => {
    
    const [defects, setDefects] = React.useState<IDefectStat[]>([]);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        dataService
            .getDefectStatsForProject(projectId)
            .then((stats: IDefectStat[]) => {
                setDefects(stats);
                renderCards();
            });
    }, [projectId]);

    const renderCards = () => {

        let tmp: any[] = [];
        let counter: number = 0;

        defects.forEach((defect) => {
            tmp.push(<Card key={counter++} {...defect} />);
        });

        setCards(tmp);
    }

    return (
        <section className="card-container">
            {cards}
        </section>
    );
}

export default CardLayout;