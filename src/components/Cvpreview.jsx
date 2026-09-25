function Cvpreview(props) {
    return (
        <section className="preview-panel">

            <p className="preview-title">CV Preview</p>

            <div className="preview-header">
                <h2>{props.info.fullName || 'Your name'}</h2>

                <div className="preview-contact">
                    <p>{props.info.email || 'Your email address'}</p>
                    <p>{props.info.phoneNumber || 'Your phone number'}</p>
                </div>
            </div>

            <section className="preview-section">
                <h3>Education</h3>

                <p>{props.education.schoolName || 'Your school'}</p>
                <p>{props.education.titleOfStudy || 'Your title of study'}</p>
                <p>{props.education.dateOfStudy || 'Your study date'}</p>
            </section>

            <section className="preview-section">
                <h3>Practical Experience</h3>

                <p>{props.experience.companyName || 'Your company'}</p>
                <p>{props.experience.positionTitle || 'Your position'}</p>
                <p>{props.experience.mainResponsibility || 'Your responsibility'}</p>

                <p>
                    {props.experience.dateFrom || 'Start date'} -{' '}
                    {props.experience.dateUntil || 'End date'}
                </p>
            </section>

        </section>
    );
}

export default Cvpreview;