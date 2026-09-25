import { useState } from "react";
import "./styles/App.css";

import Education from "./components/Education";
import Information from "./components/information";
import Experience from "./components/Experience";
import Cvpreview from "./components/Cvpreview";
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
        <div className="app">
            <div className="form-panel">
                <Information info={info} setInfo={setInfo}></Information>
                <Education education={education} setEducation={setEducation}></Education>
                <Experience experience={experience} setExperience={setExperience}></Experience>
            </div>
        
            <Cvpreview info={info} education={education} experience={experience}></Cvpreview>    
        </div>
    );
}

export default App;