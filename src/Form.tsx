const Form = () => {
    return(
        <form>
            <label>
                Imię:
                <input type={"text"} name={"name"} value={"placeholder"}/>
            </label>

            <label>
                Powód wymówki:
                <select name={"excuseType"}>
                    <option value={"late"}>Spóźniłem się</option>
                    <option value={"noHomework"}>nie dostarczyłem pracy domowej</option>
                    <option value={"noAnswer"}>brak odpowiedzi na wiadomość</option>
                </select>
            </label>

            <label>
                Poziom wiarygodności:
                <input type={"range"} name={"beliveabilityLevel"} /*is that how it's written*/ min={1} max={5} />
            </label>

            <label>
                Data zdarzenia:
                <input type={"date"} name={"date"}/>
            </label>

            <label>
                Poziom kreatywnośi:
                <select name={"CreativityLevel"}>
                    <option>nie z tego świata</option>
                    <option>odlotowa</option>
                    <option>nie przeginaj</option>
                    <option>lekko kreatywna</option>
                    <option>sam wymyśl</option>
                </select>
            </label>

            <label>
                Dodatkowe szczegóły:
                <textarea />
            </label>

            <label>
                Pilność:
                <input type={"checkbox"} name={"Importancy"} /*is that how it's written 2: electric boogaloo*//>
            </label>

        </form>
    )
}
export default Form