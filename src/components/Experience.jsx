import { useState } from "react";

function Experience(props) {

    const [isEdit, setEdit] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [mainResponsibility, setMainResponsibility] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateUntil, setDataUntil] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();

        props.setExperience({
            companyName: companyName,
            positionTitle: positionTitle,
            mainResponsibility: mainResponsibility,
            dateFrom: dateFrom,
            dateUntil: dateUntil

        });
        setEdit(true)
    }

    return(
        <section className="experience-section">
            <h1>Practical Experience</h1>
            {!isEdit ? (
                <form className="experience-form" onSubmit={handleSubmit}>
                    <label htmlFor="company-name">Enter company name</label>
                    <input 
                        type="text" 
                        name="companyName"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                    <label htmlFor="positionTitle">Position Title</label>
                    <input 
                        type="text" 
                        name="positionTitle" 
                        value={positionTitle}
                        onChange={(event) => setPositionTitle(event.target.value)} 
                    />
                    <label htmlFor="mainResponsibility">Main mainResponsibility</label>
                    <textarea 
                        name="mainResponsibility" 
                        value={mainResponsibility}
                        onChange={(event) => setMainResponsibility(event.target.value)}
                    
                    />
                    <label htmlFor="dateFrom">From</label>
                    <input 
                        type="date" 
                        name="dateFrom"
                        value={dateFrom}
                        onChange={(event) => setDateFrom(event.target.value)}
                    />
                    <label htmlFor="dateUntil">Until</label>
                    <input 
                        type="date" 
                        name="dataUntil"
                        value={dateUntil}
                        onChange={(event) => setDataUntil(event.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (<button onClick={() => setEdit(false)}>Edit</button>)}
        </section>
    );
}

export default Experience;