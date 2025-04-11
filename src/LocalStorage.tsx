import * as React from "react";


const LocalStorage: React.FC = () => {
    const  [newText, setNewText] = React.useState<string>("Init value");
    const [itemList, setItemList] = React.useState<Array<string>>(()=>{
        const savedItems = localStorage.getItem("myItems");
        return savedItems ? JSON.parse(savedItems) : [];
    })

    function handleNewText(e: React.ChangeEvent<HTMLInputElement>) {
        setNewText(e.currentTarget.value)
    }

    function addNewItem() {
        const updatedList: Array<string> = [...itemList, newText]
        setItemList((updatedList));
        localStorage.setItem("myItems", JSON.stringify(updatedList));
        setNewText("");
    }

    function clearLocalStorage() {
        localStorage.removeItem("myItems");
        setItemList([]);
        alert("Wyczyściłeś localStorage");
        const daneZPrompta = prompt("No to co")
        alert(`Dane z prompta - wpisałeś ${daneZPrompta}`);
    }

    function editItem(index: number) {
        const newItemValue = prompt (`You want to change ${itemList[index]}.\nEnter new value`)
        if(newItemValue !== null && newItemValue.trim() !== "") {
            const updatedList = [...itemList];
            updatedList[index] = newItemValue;
            setItemList(updatedList);
            localStorage.setItem("myItems", JSON.stringify(updatedList));
        }
    }

    return(
        <>

            <button onClick={addNewItem} style={{margin: "10px", color: "lightgreen"}} type={"submit"}>
                Dodaj do localstorage
            </button>

            <button onClick={clearLocalStorage} style={{color: "red", marginLeft: "10px"}}>
                Wyczyść localstorage (klucz myItems)
            </button>

            <ul style={{listStyleType: "none", textAlign: "left"}}>
                {
                    itemList.map((item, index) =>
                    { return <li key={item}
                                 onClick={() => editItem(index)} > {item} </li>
                    })
                }
            </ul>
        </>
    )
}

export default LocalStorage