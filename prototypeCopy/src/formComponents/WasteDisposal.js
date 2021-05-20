const WasteDisposal = () => {
    return (
        <div id="wdContent">
            <table className="wd-table">
                <tbody>
                    <tr>
                        <td> Water Soluble<input type="checkbox" name="waste_disposal" value="Water_Soluble"></input> </td>
                        <td> Water Insol.<input type="checkbox" name="waste_disposal" value="Water_Insol"></input></td>
                        <td> Acid/pyridine<input type="checkbox" name="waste_disposal" value="Acid/pyridine"></input></td>
                        <td> Sharps<input type="checkbox" name="waste_disposal" value="Sharps"></input> </td>
                    </tr>
                    <tr>
                        <td>Chlorinated <input type="checkbox" name="waste_disposal" value="Chlorinated"></input> </td>
                        <td> Biohazard<input type="checkbox" name="waste_disposal" value="Biohazard"></input> </td>
                        <td>Non-hazardous <input type="checkbox" name="waste_disposal" value="Non-hazardous"></input> </td>
                        <td> Silica/filteraid<input type="checkbox" name="waste_disposal" value="Silica/filteraid"></input> </td>
                    </tr>
                    <tr>
                        <td> Cytotoxic<input type="checkbox" name="waste_disposal" value="Cytotoxic"></input> </td>
                        <td> Radioactive<input type="checkbox" name="waste_disposal" value="Radioactive"></input> </td>
                    </tr>
                </tbody>
            </table>
            <p><input type="checkbox"></input> Other (specify): <input type="text"></input></p>

        </div>


    )
}

export default WasteDisposal
