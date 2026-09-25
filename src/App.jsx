import { useState } from "react";
import Information from "./components/information";
import Education from "./components/education";

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
        </div>
    );
}

export default App;