import ReactionHazards from './formComponents/ReactionHazards';
import SafetyImplications from './formComponents/SafetyImplications';
import Title from './formComponents/Title'
import IdentifiedHazards from './formComponents/IdentifiedHazards';
import RiskAssessment from './formComponents/RiskAssessment';
import CMGloves from './formComponents/CMGloves';
import ControlMeasures from './formComponents/ControlMeasures';
import SpecifyPrevention from './formComponents/SpecifyPrevention';
import EmergencyProcedures from './formComponents/EmergencyProcedures';
import WasteDisposal from './formComponents/WasteDisposal';
import EndProduct from './formComponents/EndProduct';
import Names from './formComponents/Names';
import ExperimentDescription from './formComponents/ExperimentDescription';
import Chemicals from './formComponents/Chemicals';
import EmergencyEquipment from './formComponents/EmergencyEquipment';


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

    // Each section of the form has it's own file now
    return (
        <div className="formpage">
            <title>Form Page 1</title>
            <img src={imgURL} alt="logo" width="20%" height="20%"></img>

            <div id="content">
                <form onSubmit={saveFile}>
                    <Title />
                    <ReactionHazards />
                    <SafetyImplications />
                    <div id="section4">
                        <IdentifiedHazards />
                        <RiskAssessment />
                    </div>
                    <div id="section5">
                        <ControlMeasures />
                        <CMGloves />
                    </div>
                    <SpecifyPrevention />
                    <EmergencyProcedures />
                    <div id="section8">
                        <hgroup className="s8headings">
                            <h2 id="wd-heading">Waste Disposal</h2>
                            <h2 id="ep-heading">Management of End Product</h2>
                        </hgroup>

                        <div id="s8tables">
                            <WasteDisposal />
                            <EndProduct />
                        </div>
                    </div>

                    <p className="ep-text">Specify control measures if yes to any of the above: Keep away from sunlight. Store in cool area away from
                        ignition sources. Avoid oxidizing agents.</p>
                    <Names />
                    <ExperimentDescription />
                    <Chemicals />
                    <EmergencyEquipment />

                    <button id="saveButton" type="submit">Save Form</button>
                </form>
            </div>
        </div>

    )
}

export default Form
