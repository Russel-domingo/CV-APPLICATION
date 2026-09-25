import { useState } from "react";
import Information from "./components/information";

function App() {

    const [info, setInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    
    });
    return (
        <div>
            <Information info={info} setInfo={setInfo}></Information>
            <h1>Information</h1>
            <h2>{info.fullName}</h2>
            <h2>{info.email}</h2>
            <h2>{info.phoneNumber}</h2>
        </div>
    );
}

export default App;