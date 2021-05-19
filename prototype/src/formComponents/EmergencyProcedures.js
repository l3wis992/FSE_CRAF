const EmergencyProcedures = () => {
    return (
        <div id="section7">
            <h2 className="aep-heading">Additional Emergency Procedures </h2>
            <table className="centre">
                <tbody>
                    <tr>
                        <td> <input type="checkbox" name="emergency_procedures" value="Spill_kit"></input> Spill Kit</td>
                        <td> <input type="checkbox" name="emergency_procedures" value="Restrict_access_to_area"></input> Restrict access to area</td>
                        <td>(specify): <input type="text"></input></td>
                        <td><input type="checkbox"></input>Other (specify): <input type="text"></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmergencyProcedures
