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

    const veryCreative = ["Kosmici porwali mi psa", "Meteoryt spadł na mój dom"]
    const Creative = ["Proszę pana pana tam nie było","Podzieliłem przez zero", "Byłem na Ukrainie i walczyłem"]
    const LittleCreative = ["Byłem w innym kraju","Wybuchł mi dom"]
    const Standard = ["Nie chciało mi się",]
    const NotCreative = ["Ojciec kazał mi iść po piwo","Wujek wszedł za głęboko","Ojciec urodził"]

    const [formData, setFormData] = useState<FormData>({name: "", excuseType: "", beliveabilityLevel: "",date: "",creativityLevel: "",uniqueTextArea: "",importancy: false})

    let important = ""

    if (formData.importancy == false) {
        important = "Nie Pilną"
    }
    else  if (formData.importancy == true) {
        important = "Pilną"
    }
    else {
        important = "Nie Pilną"
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement |  HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type==="checkbox"? checked : value }));

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // if (formData.beliveabilityLevel == "1" && formData.creativityLevel == "nie kreatywna") {
        //     console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);
        // } else if (formData.beliveabilityLevel == "2" && formData.creativityLevel == "nie przeginaj") {
        //     console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);
        // } else if (formData.beliveabilityLevel == "3" && formData.creativityLevel == "lekko kreatywna") {
        //     console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);
        // } else if (formData.beliveabilityLevel == "4" && formData.creativityLevel == "odlotowa") {
        //     console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);
        // } else if (formData.beliveabilityLevel == "5" && formData.creativityLevel == "nie z tego świata") {
        //     console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);
        // } else {
        //     alert("poziom wiarygodności i kreatywności musi być ten sam")
        // }
        console.log("Nazwa osoby proszącej: ", formData.name, " Panie Profesorze, niestety", formData.excuseType, ", ponieważ", Standard[0], ", a poziom wiarygodności tej wymówki to:", formData.beliveabilityLevel, ", zdarzenie miało miejsce (", formData.date, "), kreatywność", formData.creativityLevel, ", wymówkę oznaczono jako ", important);

    };

    return(
        <form onSubmit={handleSubmit}>
            <table>

                <tbody>
                <tr>
                    <td className={"tableLeft"}> <label> Imię: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"text"} name={"name"} value={formData?.name} onChange={handleChange}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Powód wymówki: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"excuseType"} value={formData.excuseType} onChange={handleChange}>
                                <option value={"nie dostarczyłem pracy domowej"}>nie dostarczyłem pracy domowej</option>
                                <option value={"spóźniłem się"}>spóźniłem się</option>
                                <option value={"zaspałem na lekcje"}>zaspałem na lekcje</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label>Poziom wiarygodności: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"range"} name={"beliveabilityLevel"} /*is that how it's written*/ min={1} max={5} value={formData?.beliveabilityLevel} onChange={handleChange} /> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Data zdarzenia: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"date"} name={"date"} value={formData?.date} onChange={handleChange}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Poziom kreatywnośi: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"CreativityLevel"} value={formData.creativityLevel} onChange={handleChange}>
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
                    <td className={"tableRight"}> <label> <textarea id={"uniqueTextArea"} onChange={handleChange}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Pilność: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"checkbox"} name={"importancy"} /*is that how it's written 2: electric boogaloo*/ checked={formData.importancy} onChange={handleChange}/> </label> </td>
                </tr>
                <tr>
                    <td className={"tableLeft"}><button type={"submit"}>Stwórz</button></td>
                </tr>
                </tbody>
            </table>
        </form>
    )
}
export default Form