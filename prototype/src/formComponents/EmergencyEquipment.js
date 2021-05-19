const EmergencyEquipment = () => {
    return (
        < div id="section13" >
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
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                    <p><input type="checkbox"></input><input type="text" className="columnText" width="100%"></input></p>
                </div>
            </div>
        </div >
    )
}

export default EmergencyEquipment
