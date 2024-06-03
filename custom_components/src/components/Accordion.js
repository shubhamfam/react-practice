import AccordionSection from "./AccordionSection";

function Accordion({ items }) {
    const renderedItems = items.map((item) => {
        return <AccordionSection key={item.id} item={item}/>
    })
    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;
