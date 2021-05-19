const ReactionHazards = () => {
    return (
        <div id="section2">
            <h1 className="rh-heading">Reaction hazards</h1>
            <div id="hazard-info">
                <table id="s2Table" className="centre">
                    <tbody>
                        <tr>
                            <td> Fire/explosion risk <input type="checkbox" name="reaction_hazard" value="fire_explosion-risk"></input></td>
                            <td> Flammable liquid <input type="checkbox" name="reaction_hazard" value="flammable_liquid"></input></td>
                            <td> Asphyxiant <input type="checkbox" name="reaction_hazard" value="asphyxiant"></input> </td>
                            <td> Air sensitive <input type="checkbox" name="reaction_hazard" value="air_sensitive"></input></td>
                            <td> Hot liquids <input type="checkbox" name="reaction_hazard" value="hot_liquids"></input></td>
                        </tr>
                        <tr>
                            <td> Gas release/high pressure reaction <input type="checkbox" name="reaction_hazard" value="gas_release_or_hi_pressure"></input></td>
                            <td> Corrosive <input type="checkbox" name="reaction_hazard" value="corrosive"></input></td>
                            <td> Stench <input type="checkbox" name="reaction_hazard" value="stench"></input></td>
                            <td> Moisture sensitive <input type="checkbox" name="reaction_hazard" value="moisture_sensitive"></input></td>
                            <td> Ignition sources <input type="checkbox" name="reaction_hazard" value="ignition_sources"></input></td>
                        </tr>
                        <tr>
                            <td> Known human carcinogen/mutagen <input type="checkbox" name="reaction_hazard" value="carcinogen_mutagen"></input></td>
                            <td> Toxic <input type="checkbox" name="reaction_hazard" value="toxic"></input></td>
                            <td> Biological <input type="checkbox" name="reaction_hazard" value="biological"></input></td>
                            <td> Security sensitive <input type="checkbox" name="reaction_hazard" value="security_sensitive"></input></td>
                            <td> UV/X-ray/Laser <input type="checkbox" name="reaction_hazard" value="uv_xray_laser"></input></td>
                        </tr>
                        <tr>
                            <td> Hazardous to the environment <input type="checkbox" name="reaction_hazard" value="hazard_to_environment"></input></td>
                            <td> Oxidiser <input type="checkbox" name="reaction_hazard" value="oxidiser"></input></td>
                            <td> Radioactive <input type="checkbox" name="reaction_hazard" value="radioactive"></input></td>
                            <td> Cryogens <input type="checkbox" name="reaction_hazard" value="cryogen"></input></td>
                            <td> Use of stills <input type="checkbox" name="reaction_hazard" value="stills"></input></td>
                        </tr>
                        <tr>
                            <td> Prolonged reaction (i.e. > 8hrs) <input type="checkbox" name="reaction_hazard" value="prolonged_reaction"></input></td>
                            <td> Reproductive hazard (teratogen) <input type="checkbox" name="reaction_hazard" value="reproductive_hazard"></input></td>
                            <td> Sensitiser/irritant <input type="checkbox" name="reaction_hazard" value="sensitiser_irritant"></input></td>
                            <td> Electrical hazard <input type="checkbox" name="reaction_hazard" value="electrical_hazard"></input></td>
                            <td> Endo-Exothermic <input type="checkbox" name="reaction_hazard" value="endo_exothermic"></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReactionHazards
