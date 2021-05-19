const Names = () => {
    return (
        <div id="section9">
            <hgroup className="s9headings">
                <h2 id="assessor">Name of Assessor:</h2>
                <h2 id="cosign">Name of Co-signatory:</h2>
            </hgroup>

            <div id="s9textboxes">
                <textarea name="name-of-assessor" id="assText" rows="100%" cols="100%" placeholder="Enter Text Here"></textarea>
                <textarea name="name-f-cosignatory" id="cosignText" rows="100%" cols="100%" placeholder="Enter Text Here"></textarea>
            </div>
        </div>
    )
}

export default Names
