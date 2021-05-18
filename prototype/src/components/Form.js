
const Form = () => {
    
    const imgURL = "https://courseseeker.edu.au/assets/images/institutions/3025.png"


    /**
     *  This is the code to generate a .txt file from the inputted form data. This will need to include ALL the form data 
     *  within the 'data' variable with appropriate .txt formatting.
     */ 
    let saveFile = () => {
        const title = document.getElementById('expTitle');
        const name = document.getElementById('name');

        let data =
            '\r Experiment Title: ' + title.value + ' \r\n ' +
            'Name: ' + name.value + ' \r\n ';

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

    return (
        <div className="formpage">
            <img src={imgURL} alt="logo" width="20%" height="20%"></img>
            <div id="section-1">
                <h1 className="form-title">Macquarie University Digitized Chemical Risk Assessment Form</h1>
                <form onSubmit={saveFile}>
                    <table>
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
                    <button type="submit">Save Form</button>
                </form>
            </div>
        </div>
    )
}

export default Form
