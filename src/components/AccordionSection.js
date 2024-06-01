import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
function AccordionSection({ item }) {
    const [expanded, setExpanded] = useState(false);

    const icon = (<span>{expanded ? <GoChevronDown/> : <GoChevronRight />}</span>)
    const handleCollapse = () => {
        setExpanded(!expanded)
    }

    return ( 
        <div key={item.id} onClick={handleCollapse}>
            <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={handleCollapse}>
                {icon} 
                {item.label}
            </div>
            {expanded && <div className="border-b p-5">{item.content}</div>}
        </div>
    )
}

export default AccordionSection;
 