import * as React from "react";

interface DisplayExcuseProps {
    currentExcuse: string;
}

const DisplayExcuse: React.FC<DisplayExcuseProps> = ({ currentExcuse }) => {
    return (
        <div id={"table2electricBoogaloo"} >
            <h2>Wymówka:</h2>
            <div style={{ whiteSpace: "pre-line" }}>
                {currentExcuse}
            </div>
        </div>
    );
};

export default DisplayExcuse;
