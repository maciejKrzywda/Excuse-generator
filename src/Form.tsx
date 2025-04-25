import * as React from "react";
import {useState} from "react";

interface FormData {
    name: string
    excuseType: string
    beliveabilityLevel: string
    date: string
    creativityLevel: string
    uniqueTextArea: string
    importancy: boolean
}

const Form = () => {

    const veryCreative = ["kosmici porwali mi psa", "meteoryt spadł na mój dom","zostałem porwany przez kosmitów"]
    const creative = ["proszę pana pana tam nie było","podzieliłem przez zero", "coś"]
    const littleCreative = ["byłem w innym kraju","wybuchł mi dom","byłem poza domem"]
    const standard = ["nie chciało mi się","zaspałem","zapomniałem"]
    const notCreative = ["something","something else","something completly different"]

    const [formData, setFormData] = useState<FormData>({name: "", excuseType: "", beliveabilityLevel: "",date: "",creativityLevel: "",uniqueTextArea: "",importancy: false})

    let important = ""
    let currentExcuse = ""

    if (formData.importancy == false) {
        important = "nie pilną"
    }
    else  if (formData.importancy == true) {
        important = "pilną"
    }
    else {
        important = "nie pilną"
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type==="checkbox"? checked : value }));

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random()*3)
        if (formData.beliveabilityLevel == "1" && formData.creativityLevel == "nie kreatywna") {
            currentExcuse = `Nazwa osoby proszącej:  ${formData.name}\nPanie Profesorze, niestety  ${formData.excuseType} , ponieważ, ${notCreative[randomNumber]} \npoziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}\nzdarzenie miało miejsce ( ${formData.date} )\nkreatywność:  ${formData.creativityLevel}\nDodatkowe informacje: ${formData.uniqueTextArea}\nwymówkę oznaczono jako ${important}`;
        } else if (formData.beliveabilityLevel == "2" && formData.creativityLevel == "nie przeginaj") {
            currentExcuse = `Nazwa osoby proszącej:  ${formData.name}\nPanie Profesorze, niestety  ${formData.excuseType} , ponieważ, ${standard[randomNumber]} \npoziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}\nzdarzenie miało miejsce ( ${formData.date} )\nkreatywność:  ${formData.creativityLevel}\nDodatkowe informacje: ${formData.uniqueTextArea}\nwymówkę oznaczono jako ${important}`;
        } else if (formData.beliveabilityLevel == "3" && formData.creativityLevel == "lekko kreatywna") {
            currentExcuse = `Nazwa osoby proszącej:  ${formData.name}\nPanie Profesorze, niestety  ${formData.excuseType} , ponieważ, ${littleCreative[randomNumber]} \npoziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}\nzdarzenie miało miejsce ( ${formData.date} )\nkreatywność:  ${formData.creativityLevel}\nDodatkowe informacje: ${formData.uniqueTextArea}\nwymówkę oznaczono jako ${important}`;
        } else if (formData.beliveabilityLevel == "4" && formData.creativityLevel == "odlotowa") {
            currentExcuse = `Nazwa osoby proszącej:  ${formData.name}\nPanie Profesorze, niestety  ${formData.excuseType} , ponieważ, ${creative[randomNumber]} \npoziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}\nzdarzenie miało miejsce ( ${formData.date} )\nkreatywność:  ${formData.creativityLevel}\nDodatkowe informacje: ${formData.uniqueTextArea}\nwymówkę oznaczono jako ${important}`;
        } else if (formData.beliveabilityLevel == "5" && formData.creativityLevel == "nie z tego świata") {
            currentExcuse = `Nazwa osoby proszącej:  ${formData.name}\nPanie Profesorze, niestety  ${formData.excuseType} , ponieważ, ${veryCreative[randomNumber]} \npoziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}\nzdarzenie miało miejsce ( ${formData.date} )\nkreatywność:  ${formData.creativityLevel}\nDodatkowe informacje: ${formData.uniqueTextArea}\nwymówkę oznaczono jako ${important}`;
        } else {
            alert("poziom wiarygodności i kreatywności musi być ten sam")
        }
        console.log(currentExcuse)

    };

    return(
        <form onSubmit={handleSubmit}>
            <table>

                <tbody>
                <tr>
                    <td className={"tableLeft"}> <label> Imię: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"text"} name={"name"} value={formData?.name} onChange={handleChange} required={true}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Powód wymówki: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"excuseType"} value={formData.excuseType} onChange={handleChange}>
                                <option>--Select--</option>
                                <option value={"nie dostarczyłem pracy domowej"}>nie dostarczyłem pracy domowej</option>
                                <option value={"spóźniłem się"}>spóźniłem się</option>
                                <option value={"zaspałem na lekcje"}>zaspałem na lekcje</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label>Poziom wiarygodności: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"range"} name={"beliveabilityLevel"} /*is that how it's written*/ min={1} max={5} value={formData?.beliveabilityLevel} onChange={handleChange}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Data zdarzenia: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"date"} name={"date"} value={formData?.date} onChange={handleChange} required={true}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Poziom kreatywnośi: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"creativityLevel"} value={formData.creativityLevel} onChange={handleChange}>
                                <option>--Select--</option>
                                <option value={"nie z tego świata"}>nie z tego świata</option>
                                <option value={"odlotowa"}>odlotowa</option>
                                <option value={"lekko kreatywna"}>lekko kreatywna</option>
                                <option value={"nie przeginaj"}>nie przeginaj</option>
                                <option value={"nie kreatywna"}>nie kreatywna</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Dodatkowe szczegóły: </label> </td>
                    <td className={"tableRight"}> <label> <textarea id={"uniqueTextArea"} name={"uniqueTextArea"} value={formData.uniqueTextArea} onChange={handleChange}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Pilność: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"checkbox"} name={"importancy"} /*is that how it's written 2: electric boogaloo*/ checked={formData.importancy} onChange={handleChange}/> </label> </td>
                </tr>
                <tr>
                    <td className={"tableLeft"}><button type={"submit"}>Stwórz</button></td>
                    <td className={"tableRight"}>{currentExcuse && <h3>{currentExcuse}</h3>}</td>
                </tr>
                </tbody>
            </table>
        </form>
    )
}
export default Form