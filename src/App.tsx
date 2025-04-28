import { useState } from "react";
import Form from "./Form";
import DisplayExcuse from "./DisplayExcuse";

function App() {
    const [currentExcuse, setCurrentExcuse] = useState<string>("");

    return (
        <>
            <Form setCurrentExcuse={setCurrentExcuse} />
            <DisplayExcuse currentExcuse={currentExcuse} />
        </>
    );
}

export default App;
