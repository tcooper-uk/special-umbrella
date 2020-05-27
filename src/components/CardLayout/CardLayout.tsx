import * as React from "react"

import Card from "../Card/Card"

import * as dataService from "../../mocks/dataService"
import IDefect from "../../model/defect"


interface CardLayoutProperties {
    projectId: number
}

const CardLayout = (projectId: number) => {
    
    const [defects, setDefects] = React.useState<IDefect[]>([]);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        dataService
            .getDefectsForProject(projectId)
            .then((defects: IDefect[]) => {
                setDefects(defects);
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