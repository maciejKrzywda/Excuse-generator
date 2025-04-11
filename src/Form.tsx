const veryCreative = ["Kosmici porwali mi psa", "Meteoryt spadł na mój dom"]
const Creative = ["Proszę pana pana tam nie było","Podzieliłem przez zero", "Byłem na Ukrainie i walczyłem"]
const LittleCreative = ["Byłem w innym kraju","Wybuchł mi dom"]
const Standard = ["Nie chciało mi się"]
const NotCreative = ["Ojciec kazał mi iść po piwo","Wujek wszedł za głęboko","Ojciec urodził"]
const Form = () => {
    return(
        <form>
            <table>

                <tbody>
                <tr>
                    <td className={"tableLeft"}> <label> Imię: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"text"} name={"name"} value={"Włodzimierz Jeremiasz 3 Kmiecic"}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Powód wymówki: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"excuseType"}>
                                <option value={"late"}>Spóźniłem się</option>
                                <option value={"noHomework"}>nie dostarczyłem pracy domowej</option>
                                <option value={"noAnswer"}>brak odpowiedzi na wiadomość</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label>Poziom wiarygodności: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"range"} name={"beliveabilityLevel"} /*is that how it's written*/ min={1} max={5} value={0} /> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Data zdarzenia: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"date"} name={"date"}/> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Poziom kreatywnośi: </label> </td>
                    <td className={"tableRight"}>
                        <label>
                            <select name={"CreativityLevel"}>
                                <option>nie z tego świata</option>
                                <option>odlotowa</option>
                                <option>lekko kreatywna</option>
                                <option>nie przeginaj</option>
                                <option>nie kreatywna</option>
                            </select>
                        </label>
                    </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Dodatkowe szczegóły: </label> </td>
                    <td className={"tableRight"}> <label> <textarea id={"uniqueTextArea"} /> </label> </td>
                </tr>

                <tr>
                    <td className={"tableLeft"}> <label> Pilność: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"checkbox"} name={"Importancy"} /*is that how it's written 2: electric boogaloo*//> </label> </td>
                </tr>

                </tbody>
            </table>
        </form>
    )
}
export default Form