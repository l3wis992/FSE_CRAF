const CMGloves = () => {
    return (
        <div id="glove-section">
            <table id="s5GloveTable">
                <tbody>
                    <tr>
                        <td>Gloves: </td>
                        <td> Latex <input type="checkbox" name="gloves" value="Latex"></input> </td>
                        <td> Nitrile <input type="checkbox" name="gloves" value="Nitrile"></input> </td>
                    </tr>
                    <tr>
                        <td> PVC <input type="checkbox" name="gloves" value="PVC"></input> </td>
                        <td> Rubber <input type="checkbox" name="gloves" value="Rubber"></input> </td>
                        <td> Neoprene <input type="checkbox" name="gloves" value="Neoprene"></input> </td>
                    </tr>
                    <tr>
                        <td> PVA <input type="checkbox" name="gloves" value="PVA"></input> </td>
                        <td> Barrier <input type="checkbox" name="gloves" value="Barrier"></input> </td>
                        <td> Thermal <input type="checkbox" name="gloves" value="Thermal"></input> </td>
                    </tr>
                </tbody>
            </table>
            <p>Other <input type="checkbox"></input> Specify: <input type="text" name="gloves" id="gloveText" rows="100%" cols="100%"></input></p>
        </div>
    )
}

export default CMGloves
