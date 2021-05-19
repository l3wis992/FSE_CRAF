const EndProduct = () => {
    return (
        <div id="epContent">

            <table className="ep-table">
                <tbody>
                    <tr>
                        <td> Light<input type="checkbox" name="end_product" value="Light"></input> </td>
                        <td> Temperature<input type="checkbox" name="end_product" value="Temperature"></input> </td>
                        <td> Time<input type="checkbox" name="end_product" value="Time"></input> </td>
                        <td> Air<input type="checkbox" name="end_product" value="Air"></input> </td>
                        <td> Moisture<input type="checkbox" name="end_product" value="Moisture"></input> </td>
                    </tr>
                    <tr>
                        <td> Shock/vibration<input type="checkbox" name="end_product" value="Shock/vibration"></input> </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <br></br>
            <p><input type="checkbox" name="end_product" value="Biohazard"></input> Other  Specify:<input type="text"></input> </p>
        </div>

    )
}

export default EndProduct
