import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
    const handleClick = () => {};
    
    return (
        <div>
            <div>
                <Button className="mb-5" secondary rounded outline onClick={handleClick}>
                    <GoBell />Click here!
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoCloud/>Buy now
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase/>See Deal
                </Button>
            </div>
            <div>
                <Button secondary>Hide ads</Button>
            </div>
            <div>
                <Button primary rounded>Something</Button>
            </div>
        </div>
    )
}

export default ButtonPage;
