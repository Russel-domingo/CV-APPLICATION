import { useState } from "react";
import Education from "./components/Education";
import Information from "./components/information";
import Experience from "./components/Experience";

function App() {

    const [info, setInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    
    });
    const [education, setEducation] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
    });
    const [experience, setExperience] = useState({
        companyName: '',
        positionTitle: '',
        mainResponsibility: '',
        dateFrom: '',
        dateUntil: '',
    });

    return (
        <div>
            <Information info={info} setInfo={setInfo}></Information>
            <h1>Information</h1>
            <h2>{info.fullName}</h2>
            <h2>{info.email}</h2>
            <h2>{info.phoneNumber}</h2>
            <Education education={education} setEducation={setEducation}></Education>
            <h1>Education</h1>
            <h2>{education.schoolName}</h2>
            <h2>{education.titleOfStudy}</h2>
            <h2>{education.dateOfStudy}</h2>
            <Experience experience={experience} setExperience={setExperience}></Experience>
            <h1>Experience</h1>
            <h2>{experience.companyName}</h2>
            <h2>{experience.positionTitle}</h2>
            <h2>{experience.mainResponsibility}</h2>
            <h2>{experience.dateFrom}</h2>
            <h2>{experience.dateUntil}</h2>
        </div>
    );
}

export default App;