import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const gift=useContext(AssetContext);
    return (
        <div>
            <h2>Brother</h2>
            {
                gift
            }
        </div>
    );
};

export default Brother;