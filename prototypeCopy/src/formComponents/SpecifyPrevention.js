const SpecifyPrevention = () => {
    return (
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
    )
}

export default SpecifyPrevention
