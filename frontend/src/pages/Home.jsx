import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Home.css'
import InputMessager from '../assets/InputMessager.jsx';

function Home() {

    // Define useStates for the textAreas.
    const [userInput, setUserInput] = useState("");
    const [response, setResponse] = useState("");

    const [active, setActive] = useState(false);
    const [type, setType] = useState(-1);
    const [reason, setReason] = useState(0);
    const [key, setKey] = useState(-1);

    const naviagation = useNavigate();

    return(
        <>
            <header>
                <h1 className='title'>Fake Translator</h1>
                <span className='links'>
                    <button className='nav-requests' onClick={() => navigation("/requests")}>Requests</button>
                    <a href='https://github.com/Full-C0mbo'><button className='nav-github'>Github</button></a>
                </span>
            </header>
            
            <p className='description'>
                This website accesses a database containing a list of English words and words in a made up language. Input a set of words into the text box on the left,
                and let the output be returned on the right. This program was made for fun, and for use amongst a small group. Therefore, the services of the Translator
                will be an "on-demand" usage, and will be shut off when not in use. For further instructions on using the website's translator, see the bullet points below.
            </p>
            <ul className='notes'>
                <li>For words that you don't want to be translated, surround them with quotation marks (Example: This will be translated. "This will not be translated").</li>
                <li>Avoid using possessives (Example: Use "the glow of the moon" over "the moon's glow) whenever possible to ensure accurate translations.</li>
                <li>
                    Use the "Requests" link above if you find any words that are missing from the language (missing words will be returned in English form on translation).
                </li>
            </ul>

            <div className='wrapper'>
                <div className='input-area'>
                    <textarea placeholder='Enter Text Here.' value={userInput} onChange={e => setUserInput(e.target.value)}/>
                    <button onClick={() => setActive(true)}>Translate</button>
                </div>
                
                <div className='response-area'>
                    <textarea placeholder='Response comes out here.' readOnly value={response} onChange={e => setResponse(e.target.value)}/>
                    <button onClick={() => setActive(true)}>Copy</button>
                </div>
            </div>

            <InputMessager isActive={active} type={type} reasoning={reason} buttonPressed={key}/>
        </>
    );
}

export default Home;