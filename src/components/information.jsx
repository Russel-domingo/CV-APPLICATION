import { useState } from "react";

function Information(props) {

    const [isEdit, setEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('') 
    const [phoneNumber, setPhoneNumber] = useState('');
 
    // const handleChange = (event) => {
    //     setInfo({...info, event.target});
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.setInfo({
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber
        });
        setEdit(true);
    };


    return (
        <section className="information-section">
            <h1>General Information</h1>
            {!isEdit ? 
            ( 
            <form className="general-information-form" onSubmit={handleSubmit}>
                <label htmlFor="fullName"> Enter name</label>
                <input
                    name="fullName"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    type="text"
                />
                <label htmlFor="email"> Enter email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email} 
                />
                <label htmlFor="phoneNumber">Enter Phone number</label>
                <input 
                    type="tel" 
                    name="phoneNumber" 
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    value={phoneNumber} 
                />
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
            ) : (<button onClick={() => setEdit(false)}> Edit</button>) }
            
        </section>

    );
}

export default Information;