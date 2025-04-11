const Form = () => {
    return(
        <form>
            <table>

                <tbody>
                <tr>
                    <td className={"tableLeft"}> <label> Imię: </label> </td>
                    <td className={"tableRight"}> <label> <input type={"text"} name={"name"} value={"placeholder"}/> </label> </td>
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
                    <td className={"tableRight"}> <label> <input type={"range"} name={"beliveabilityLevel"} /*is that how it's written*/ min={1} max={10} /> </label> </td>
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
                                <option>nie przeginaj</option>
                                <option>lekko kreatywna</option>
                                <option>sam wymyśl</option>
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