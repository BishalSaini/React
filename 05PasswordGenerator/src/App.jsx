import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8); 
  const [numberAllowed, setNumberAllowed] = useState(false); 
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState('');  

  //useRef Hook 
  const passwordRef= useRef(null);

  const passwordGenerator= useCallback(()=>{  //useCallback is used to memoize fn
    let pass=""; 
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwxyz"; 
    if(numberAllowed){ 
      str=str+"0123456789";
    } 
    if(charAllowed){ 
      str=str+"~!@#$%^&*+_-{}[]?";
    } 

    for(let i = 1; i <=length; i++){ 
      let char=Math.floor(Math.random()* str.length + 1); //We will get char i.e indexvalue
      pass=pass+ str.charAt(char);
    } 
    setPassword(pass);


  },[length, numberAllowed, charAllowed, setPassword]);  


  const copyPasswordToClipBoard= useCallback(()=>{  
    passwordRef.current?.select(); 
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{  //UseEffect is use to trigger the passwordGenerator function whenever there is change on dependencies(len,num,char) this ensure that password is regenerated whenever these setting is updated
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-4xl text-center text-gray-800 mb-6">Password Generator</h1>

        {/* Password Display Input */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-gray-100 p-3 rounded-md"
            value={password} 
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoard}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Copy
          </button>
        </div>

        {/* Password Length Slider */}
        <div className="mb-4">
          <label htmlFor="passwordLength" className="block text-sm font-medium text-gray-700 mb-2">
            Length: {length}
          </label>
          <input
            type="range"
            id="passwordLength"
            name="passwordLength"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options Checkboxes */}
        <div className="mb-4">
          <label htmlFor="includeNumbers" className="flex items-center">
            <input
              type="checkbox"
              id="includeNumbers"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev)=> !prev)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label htmlFor="includeSpecialChars" className="flex items-center">
            <input
              type="checkbox"
              id="includeSpecialChars"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev)=> !prev)}
              className="mr-2"
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
