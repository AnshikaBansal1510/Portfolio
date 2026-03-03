import { useState, useRef } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([{ cmd: '', output: 'Type "whoami", "skills", or "contact".' }]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      if (cmd === 'whoami') output = 'ANSHIKA. Problem Solver. Scalable Systems Engineer.';
      else if (cmd === 'skills') output = 'MERN Stack, Java, C++, System Design, CP.';
      else if (cmd === 'contact') output = 'Initiating protocol... email me at hello@example.com';
      else if (cmd === '') output = '';
      else output = `Command not found: ${cmd}`;

      setHistory([...history, { cmd: `guest@anshika:~$ ${cmd}`, output }]);
      setInput('');
    }
  };

  return (
    <div 
      className="bg-[#121212] border border-slate-800 rounded-lg p-4 font-mono text-sm w-full max-w-md shadow-2xl shadow-purple-neon/10 hover:border-slate-700 transition-colors cursor-text" 
      onClick={() => inputRef.current?.focus()}
    >
      {/* Mac-style Window Buttons */}
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      {/* Terminal Output */}
      <div className="h-40 overflow-y-auto flex flex-col gap-1 text-slate-400">
        {history.map((line, i) => (
          <div key={i}>
            <div className="text-cyan-neon">{line.cmd}</div>
            <div className="text-slate-300">{line.output}</div>
          </div>
        ))}
        {/* Input Line */}
        <div className="flex text-cyan-neon mt-2">
          <span>guest@anshika:~$</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent outline-none ml-2 text-slate-200 flex-1 caret-cyan-neon"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}