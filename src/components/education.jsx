import { useState } from "react";


function Education(props) {

    const [isEdit, setEdit] = useState(false);
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.setEducation({
            schoolName: schoolName,
            titleOfStudy: titleOfStudy,
            dateOfStudy: dateOfStudy
        });
        setEdit(true);
    }

    return(
        <section className="education-section">
            <h2>Education experience</h2>
            {!isEdit ? 
            (
            <form className="education-form" onSubmit={handleSubmit}>
                <label htmlFor="schoolName">School name</label>
                <input 
                    type="text" 
                    name="schoolName"
                    value={schoolName}
                    onChange={(event) => setSchoolName(event.target.value)}
                />
                <label htmlFor="titleOfStudy">Title of study</label>
                <input 
                    type="text" 
                    name="titleOfStudy"
                    value={titleOfStudy}
                    onChange={(event) => setTitleOfStudy(event.target.value)}
                />
                <label htmlFor="dataOfStudy">Date of study</label>
                <input 
                    type="date" 
                    name="dataOfStudy" 
                    value={dateOfStudy} 
                    onChange={(event) => setDateOfStudy(event.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
            ) : (<button onChange={() => isEdit(false)}> Edit</button>)}
           
        </section>
    );

}

export default Education;