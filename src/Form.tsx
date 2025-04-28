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
interface FormProps {
    setCurrentExcuse: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({ setCurrentExcuse }) => {

    const veryCreative = ["kosmici porwali mi psa", "meteoryt spadł na mój dom","zostałem porwany przez kosmitów","kiedy wybierałem się swoim samochodem do szkoły złapałem gumę, a więc badzo miły pan pomógł mi w naprawei opony, kiedy to on nagle porwał mnie i wywiózł na Białoruś"]
    const creative = ["proszę pana pana tam nie było","podzieliłem przez zero", "spadłem ze schodów", "dzień wcześniej moja mama posprzątała mi w pokoju i całą noc nie mogłem znaleźć moich notatek"]
    const littleCreative = ["byłem w innym kraju","wybuchł mi dom","byłem poza domem", "moja babcia spadła ze schodów"]
    const standard = ["nie chciało mi się","zaspałem","zapomniałem", "*milczy*"]
    const notCreative = ["something","something else","something completly different", ":3"]

    const [formData, setFormData] = useState<FormData>({name: "", excuseType: "", beliveabilityLevel: "",date: "",creativityLevel: "",uniqueTextArea: "",importancy: false})

    let important = ""
    // const [currentExcuse, setCurrentExcuse] = useState<string>("");

    // let currentExcuse = ""

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
        const randomNumber = Math.floor(Math.random()*4)
        if (formData.beliveabilityLevel == "1" && formData.creativityLevel == "nie kreatywna") {
            setCurrentExcuse(` Imie osoby proszącej: ${formData.name} \n Wymówka: Panie Profesorze, niestety ${formData.excuseType}, ponieważ, ${notCreative[randomNumber]} \n Dodatkowe informacje: ${formData.uniqueTextArea} \n Zdarzenie miało miejsce: ${formData.date} \n Poziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}  \n Kreatywność: ${formData.creativityLevel}  \n Wymówkę oznaczono jako: ${important}`) ;
        } else if (formData.beliveabilityLevel == "2" && formData.creativityLevel == "nie przeginaj") {
            setCurrentExcuse(` Imie osoby proszącej: ${formData.name} \n Wymówka: Panie Profesorze, niestety ${formData.excuseType}, ponieważ, ${standard[randomNumber]} \n Dodatkowe informacje: ${formData.uniqueTextArea} \n Zdarzenie miało miejsce: ${formData.date} \n Poziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}  \n Kreatywność: ${formData.creativityLevel}  \n Wymówkę oznaczono jako: ${important}`) ;
        } else if (formData.beliveabilityLevel == "3" && formData.creativityLevel == "lekko kreatywna") {
            setCurrentExcuse(` Imie osoby proszącej: ${formData.name} \n Wymówka: Panie Profesorze, niestety ${formData.excuseType}, ponieważ, ${littleCreative[randomNumber]} \n Dodatkowe informacje: ${formData.uniqueTextArea} \n Zdarzenie miało miejsce: ${formData.date} \n Poziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}  \n Kreatywność: ${formData.creativityLevel}  \n Wymówkę oznaczono jako: ${important}`) ;
        } else if (formData.beliveabilityLevel == "4" && formData.creativityLevel == "odlotowa") {
            setCurrentExcuse(` Imie osoby proszącej: ${formData.name} \n Wymówka: Panie Profesorze, niestety ${formData.excuseType}, ponieważ, ${creative[randomNumber]} \n Dodatkowe informacje: ${formData.uniqueTextArea} \n Zdarzenie miało miejsce: ${formData.date} \n Poziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}  \n Kreatywność: ${formData.creativityLevel}  \n Wymówkę oznaczono jako: ${important}`) ;
        } else if (formData.beliveabilityLevel == "5" && formData.creativityLevel == "nie z tego świata") {
            setCurrentExcuse(` Imie osoby proszącej: ${formData.name} \n Wymówka: Panie Profesorze, niestety ${formData.excuseType}, ponieważ, ${veryCreative[randomNumber]} \n Dodatkowe informacje: ${formData.uniqueTextArea} \n Zdarzenie miało miejsce: ${formData.date} \n Poziom wiarygodności tej wymówki to: ${formData.beliveabilityLevel}  \n Kreatywność: ${formData.creativityLevel}  \n Wymówkę oznaczono jako: ${important}`) ;
        } else {
            alert("Poziom wiarygodności i kreatywności musi być ten sam!")
        }

    };

    return(
        <form onSubmit={handleSubmit}>

            <h1>GENERATOR WYMÓWEK</h1>

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
                                <option value={"nie dostarczyłem pracy domowej"}>Brak pracy domowej</option>
                                <option value={"spóźniłem się"}>Spóźnienie</option>
                                <option value={"zaspałem na lekcje"}>Zaspanie</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label>Poziom wiarygodności: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"range"} name={"beliveabilityLevel"} id={"slider"}/*is that how it's written*/ min={1} max={5} value={formData?.beliveabilityLevel} onChange={handleChange}/> </label> </td>
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
                    <td className={"tableRight"}> <label id={"container"}> <input id={"checkBox"} type={"checkbox"} name={"importancy"} /*is that how it's written 2: electric boogaloo*/ checked={formData.importancy} onChange={handleChange}/> </label> </td>
                </tr>
                <tr>
                    <td className={"tableLeft"} colSpan={2}><button className={"buttonSubmit"} type={"submit"}>Stwórz</button><button type={"reset"}>Reset</button></td>
                </tr>
                </tbody>
            </table>
        </form>


    )
}
export default Form