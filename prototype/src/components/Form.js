
const Form = () => {

    const imgURL = "https://courseseeker.edu.au/assets/images/institutions/3025.png"


    /**
     *  -------- IMPORTANT PLEASE READ --------- 
     * 
     *  This is the code to generate a .txt file from the inputted form data. This will need to include ALL the form data 
     *  within the 'data' variable with appropriate .txt formatting. So far i've gathered the values from the textboxes within certain sections of the form,
     *  so all thats left for now is to gather the inputted data from all checkboxes, dropdowns, tables etc. We will also need to include a UNIQUE ID and the 
     *  DATE/TIME of form submission and add it to the .txt file.
     * 
     *  Gathering data from checkboxes, dropdowns and such may be a bit difficult and we may need to implement something to loop through the table and all its table data <td>
     *  and see whether or not that value has been 'checked' by the user. If so, add it to the .txt file, otherwise don't include it in the .txt file. This is kinda where
     *  i'm at, please suggest other ways if you know are easier lmao. 
     */
    
    let saveFile = () => {
        // need a variable for each 'section' of the form
        const title = document.getElementById('expTitle');
        const name = document.getElementById('name');
        const asImplications = document.getElementById('asText');
        const idHazards = document.getElementById('ihText');
        const assName = document.getElementById('assText');
        const coSignName = document.getElementById('cosignText');
        const experiment = document.getElementById('expText');

        // const riskAss = document.getElementById('raTable');
        // const controlMeasures = document.getElementById('s5Table');
        // const gloves = document.getElementById('s5GloveTable');
        // const reactionHazards = document.getElementById('s2Table');
        // const emergProcedures = document.getElementById('');
        // const wasteDis = document.getElementById('');
        // const endProd = document.getElementById('');


        // add other form data inputs here
        let data =
            'Experiment Title: ' + title.value + ' \r\n' +
            'Name: ' + name.value + ' \r\n' +
            'Additional Safety Implications: ' + asImplications.value + ' \r\n' +
            'Identified Hazards: ' + idHazards.value + ' \r\n' +
            'Name of Assessor: ' + assName.value + ' \r\n' +
            'Name of Co-signatory: ' + coSignName.value + ' \r\n' +
            'Experiment: ' + experiment.value;

        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const file = 'formData.txt';

        let newLink = document.createElement("a");
        newLink.download = file;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }

    /**
     *  This code will eventually be modularised for clarity later on
     */
    return (
        <div className="formpage">
            <title>Form Page 1</title>
            <img src={imgURL} alt="logo" width="20%" height="20%"></img>

            <div id="content">
                <form onSubmit={saveFile}>

                    <div id="section1">
                        <h1 className="title">Macquarie University Digitized Chemical Risk Assessment Form</h1>
                        <table className="centre">
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" id="expTitle" placeholder="Experiment Title"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" id="name" placeholder="Full Name"></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="section2">
                        <h1 className="headings">Reaction hazards</h1>
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


                    {/* <!--Additional Safety implications--> */}
                    <div id="section3">
                        <h2 className="as-heading">Additional Safety Implications</h2>
                        <div id="as-contents">
                            <textarea name="safety_implications" id="asText" rows="8" cols="79" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>


                    <div id="section4">
                        {/* <!--Identified Hazards--> */}
                        <h2 className="ih-heading">Identified Hazards (from above) </h2>
                        <div id="ih-contents">
                            <textarea name="identified_hazards" id="ihText" rows="25" cols="79" placeholder="Enter Text Here"></textarea>
                            <br></br>
                        </div>

                        <div id="ra-content">
                            {/* <!--Risk Assessment--> */}
                            <h2 className="ra-heading">Risk Assessment</h2>
                            <textarea name="message" rows="2" cols="20" placeholder="Enter Text Here"></textarea>
                            <br></br><br></br>
                            <label htmlFor="likelihood">Likelihood</label>
                            <select id="likelihood" name="likelihood">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label htmlFor="consequence">Consequence:</label>
                            <select id="consequence" name="consequence">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br></br><br></br>
                            <textarea name="message" rows="2" cols="20" placeholder="Enter Text Here"></textarea>
                            <br></br><br></br>
                            <label htmlFor="likelihood">Likelihood</label>
                            <select id="likelihood" name="likelihood">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label htmlFor="consequence">Consequence:</label>
                            <select id="consequence" name="consequence">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br></br><br></br>
                            <textarea name="message" rows="2" cols="20" placeholder="Enter Text Here"></textarea>
                            <br></br><br></br>
                            <label htmlFor="likelihood">Likelihood</label>
                            <select id="likelihood" name="likelihood">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label htmlFor="consequence">Consequence:</label>
                            <select id="consequence" name="consequence">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br></br><br></br>
                            <textarea name="message" rows="2" cols="20" placeholder="Enter Text Here"></textarea>
                            <br></br><br></br>
                            <label htmlFor="likelihood">Likelihood</label>
                            <select id="likelihood" name="likelihood">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label htmlFor="consequence">Consequence:</label>
                            <select id="consequence" name="consequence">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>


                    {/* <!--Control Measures--> */}
                    <div id="section5">
                        <div id="cm">
                            <h2 className="cm-heading">Control Measures</h2>
                            {/* <!--Gloves--> */}
                            <div id="glove-section">
                                <table id="s5GloveTable" className="centre">
                                    <tbody>
                                        <tr>
                                            <td>Gloves: </td>
                                            <td> Latex<input type="checkbox" name="gloves" value="Latex"></input> </td>
                                            <td> Nitrile<input type="checkbox" name="gloves" value="Nitrile"></input> </td>
                                        </tr>
                                        <tr>
                                            <td> PVC<input type="checkbox" name="gloves" value="PVC"></input> </td>
                                            <td> Rubber<input type="checkbox" name="gloves" value="Rubber"></input> </td>
                                            <td> Neoprene<input type="checkbox" name="gloves" value="Neoprene"></input> </td>
                                        </tr>
                                        <tr>
                                            <td> PVA<input type="checkbox" name="gloves" value="PVA"></input> </td>
                                            <td> Barrier<input type="checkbox" name="gloves" value="Barrier"></input> </td>
                                            <td> Thermal<input type="checkbox" name="gloves" value="Thermal"></input> </td>
                                        </tr>
                                        <tr>
                                            <td>Other <input type="checkbox"></input>Specify: <input type="text" name="gloves"></input></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="cm-content">
                            <table id="s5Table" className="centre">
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
                                        <td>Other<input type="checkbox"></input> Specify: <input type="text" name="control_measures"></input></td>
                                    </tr>
                                    <tr>
                                        <td>Full face mask<input type="checkbox" name="control_measures" value="Full_face_mask"></input></td>
                                        <td>PC2/3 lab<input type="checkbox" name="control_measures" value="PC2/3_lab"></input></td>
                                        <td>Schlenk line/closed vessel<input type="checkbox" name="control_measures"
                                            value="Schlenk_line/closed_vessel"></input> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/* <!--Specify prevention--> */}
                    <div id="section6">
                        <h2 className="sp-heading">Specify prevention, control or containment for any items selected above, incl method for containing/neutralising spills: </h2>
                        <li className="prevention-list">Remove ignition sources</li>
                        <li className="prevention-list">Visually inspect all glassware for integrity prior to beginning work. (as per rotary evaporator risk assessment)</li>
                        <li className="prevention-list">Water should be slowly added to the acidic mixture. </li>
                        <li className="prevention-list">Do not distil to dryness. At the end of distillation, cool the entire apparatus before allowing the air to re-enter.</li>

                        <p className="sp-text">Do you need to fill out an Apparatus Running Outside Working Hours form? <input type="checkbox"
                            name="AROWH_form" value="AROWH_form"></input> </p>
                        <p className="sp-text">No. Sample is simply left to sit at room temp overnight.</p>
                    </div>


                    {/* <!--Additional Emergency Procedures--> */}
                    <div id="section7">
                        <h2 className="aep-heading">Additional Emergency Procedures </h2>
                        <table className="centre">
                            <tbody>
                                <tr>
                                    <td> <input type="checkbox" name="emergency_procedures" value="Spill_kit"></input> Spill Kit</td>
                                    <td> <input type="checkbox" name="emergency_procedures" value="Restrict_access_to_area"></input> Restrict access to area</td>
                                    <td>(specify):<input type="text"></input></td>
                                    <td><input type="checkbox"></input>Other (specify):<input type="text"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* <!--Waste Disposal--> */}
                    <div id="section8">
                        <hgroup className="s8headings">
                            <h2 id="wd-heading">Waste Disposal</h2>
                            <h2 id="ep-heading">Management of End Product</h2>
                        </hgroup>

                        <div id="s8tables">
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
                                        <td><input type="checkbox"></input> Other (specify): <input type="text"></input></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!--Management of End Product--> */}
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
                                        <td> Other <input type="checkbox" name="end_product" value="Biohazard"></input> Specify:<input type="text"></input> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="ep-text">Specify control measures if yes to any of the above: Keep away from sunlight. Store in cool area away from
                        ignition sources. Avoid oxidizing agents.</p>
                    </div>


                    {/* <!--Assessor and Co-signatory Name--> */}
                    <div id="section9">
                        <hgroup className="s9headings">
                            <h2 id="assessor">Name of Assessor:</h2>
                            <h2 id="cosign">Name of Co-signatory:</h2>
                        </hgroup>

                        <div id="s9textboxes">
                            <textarea name="name-of-assessor" id="assText" rows="3" cols="100%" placeholder="Enter Text Here"></textarea>
                            <textarea name="name-f-cosignatory" id="cosignText" rows="3" cols="100%" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>


                    {/* <!--Experiment--> */}
                    <div id="section11">
                        <h2 className="exp-heading">Experiment:</h2>
                        <div id="s11textbox">
                            <textarea name="experiment" id="expText" rows="10" cols="100%" placeholder="Enter Text Here"></textarea>
                        </div>
                    </div>


                    {/* <!--Chemicals Used--> */}
                    <div id="section12">
                        <table id="s12-table">
                            <thead>
                                <tr>
                                    <th>Chemicals Used</th>
                                    <th>MW</th>
                                    <th>mmol</th>
                                    <th>Density</th>
                                    <th>Mass</th>
                                    <th>Vol</th>
                                    <th>Hazards (consult SDS)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Emergency Equipment */}
                    <div id="section13">
                        <h2 className="exp-heading">Emergency Equipment</h2>
                        <h3>Prior to commencing work in your laboratory, tick off the emergency/safety equipment contained therein and briefly describe their location in the lab. Any ticked items do not have to be included in the section of the risk assessment titled “Additional Emergency Procedures”, when required for that particular reaction.</h3>
                        <div className="row">
                            <div className="column">
                                <h2>Equipment</h2>
                                <p>Dry powder fire extinguisher <small>within 20 metres</small></p>
                                <p>CO<sub>2</sub> fire extinguisher <small>within 20 metres</small></p>
                                <p>Fire Blanket</p>
                                <p>First aid kit that is accessible <small>within 5 minutes</small></p>
                                <p>Absorbent material for chemical spills <small>(eg. Vermiculite and sodium hydrogen carbonate)</small></p>
                                <p>Eye-wash station</p>
                                <p>Emergency shower</p>
                                <p>Gas shut-off</p>
                                <p>Gas/power emergency stop button</p>
                            </div>
                            <div className="column">
                                <h2>Location</h2>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                                <p><input type="checkbox"></input><input type="text" size="100"></input></p>
                            </div>
                        </div>
                    </div>
                    <button id="saveButton" type="submit">Save Form</button>
                </form>
            </div>
        </div>

    )
}

export default Form
