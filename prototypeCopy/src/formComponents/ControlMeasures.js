const ControlMeasures = () => {
    return (
        <div id="cm-content">
            <h2 className="cm-heading">Control Measures</h2>

            <table id="s5Table">
                <tbody>
                    <tr>
                        <td>Safety glasses<input type="checkbox" name="control_measures" value="Safety_glasses"></input></td>
                        <td>Fume hood<input type="checkbox" name="control_measures" value="Fume_hood"></input> </td>
                        <td>Face mask<input type="checkbox" name="control_measures" value="Face_mask"></input> </td>
                        <td>Safety shield<input type="checkbox" name="control_measures" value="Safety_shield"></input></td>
                    </tr>
                    <tr>
                        <td>Goggles<input type="checkbox" name="control_measures" value="Goggles"></input> </td>
                        <td>Lab coat<input type="checkbox" name="control_measures" value="Lab_coat"></input> </td>
                        <td>Respirator<input type="checkbox" name="control_measures" value="Respirator"></input> </td>
                    </tr>
                    <tr>
                        <td>Full face mask<input type="checkbox" name="control_measures" value="Full_face_mask"></input></td>
                        <td>PC2/3 lab<input type="checkbox" name="control_measures" value="PC2/3_lab"></input></td>
                        <td>Schlenk line/closed vessel<input type="checkbox" name="control_measures"
                            value="Schlenk_line/closed_vessel"></input> </td>
                    </tr>
                </tbody>
            </table>
            <p> Other <input type="checkbox"></input>Specify: <input type="text" name="control_measures" id="cmText" rows="100%" cols="100%"></input></p>

        </div>
    )
}

export default ControlMeasures
