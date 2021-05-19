const Title = () => {
    return (
        <div id="section1">
            <h1 className="title">Macquarie University Digitized Chemical Risk Assessment Form</h1>
            <table id="s1text">
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
    )
}

export default Title
