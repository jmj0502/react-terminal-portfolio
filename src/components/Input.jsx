import React, { useRef, useState } from 'react'
import { addCommand, getPreviousCommand, getNextCommand } from '../stores/commandStores';

export default function RInput() {

    const [command, setCommand] = useState('');

    function handleSpecialKeys(e) {
        console.log(e.key)
        if (e.key === 'Enter') {
            addCommand(command);
            setCommand('');
            // Adds a simple delay to scroll down. This provides a better UX that closely mimics that
            // of a terminal.
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 100)
        }

        if (e.key === 'ArrowUp') {
            const previousCommand = getPreviousCommand()
            setCommand(previousCommand)
        }

        if (e.key === 'ArrowDown') {
            const nextCommand = getNextCommand()
            setCommand(nextCommand)
        }
    }

    function handleInputChange(e) {
        setCommand(() => e.target.value)
    } 

    return (
        <div className="w-[100vw]">
            <input 
                onChange={handleInputChange} 
                onKeyDown={handleSpecialKeys} 
                id="command" 
                className="w-[100%] font-bold text-foreground bg-background border-none ml-2 focus:outline-none"  
                type="text"
                value={command} 
                autoComplete='off'
            />
        </div>
    )
}
