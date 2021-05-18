const Homepage = () => {

    const imgURL = "https://courseseeker.edu.au/assets/images/institutions/3025.png"
    return (
        <div className="homepage">
            <img className="MQLogo" src={imgURL} alt="" width="744" height="279"></img>
            <h1>Macquarie University Chemical Hazard Assessment Form</h1>
            <div id="hp-info">
                <pre className="hp-welcomeMessage">
                    Welcome to the prototype redesign of Macquarie University's Chemical Hazard Assessment Form!<br></br>
                </pre>
                <pre className="hp-description">
                    This handy form will help researchers reduce the amount of time they spend on paperwork, <br></br>
                and assist in their understanding of the inherent risks and control processes in the Macquarie University lab environment.
		</pre>
            </div>
            <div id="hp-button">
                <button onClick={() => window.location="Form"}>Get Started</button>
            </div>
        </div>

    )
}

export default Homepage