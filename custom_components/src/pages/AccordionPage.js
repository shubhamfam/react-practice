import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 'afaf5235235',
            label: 'Can I use react on a project',
            content: 'You can use react on any project you want.'
        },
        {
            id: 'kgjg23r23',
            label: 'Can I use electron on a project',
            content: 'You can use electron on any project you want.'
        },
        {
            id: 'oioewtw335',
            label: 'Can I use react and electron together on a project',
            content: 'You can use react and electron together on any project you want.'
        }
    ]
    
    return <Accordion items={items} />;
}

export default AccordionPage;
