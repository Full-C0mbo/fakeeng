import { useState } from 'react';
import '../stylesheets/Home.css'

function Home() {

    // Define useStates for the textAreas.
    const [userInput, setUserInput] = useState("");
    const [response, setResponse] = useState("");

    return(
        <>
            <h1>Test</h1>

            <div className='wrapper'>
                <div className='input-area'>
                    <textarea placeholder='Enter Text Here.' value={userInput} onChange={e => setUserInput(e.target.value)}/>
                    <button>Translate</button>
                </div>
                
                <div className='response-area'>
                    <textarea placeholder='Response comes out here.' readOnly value={response} onChange={e => setResponse(e.target.value)}/>
                    <button>Copy</button>
                </div>
            </div>
        </>
    );
}

export default Home;