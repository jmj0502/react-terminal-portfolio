import React, { useMemo } from 'react';
import { useStore } from '@nanostores/react';
import { commandHistory } from '../stores/commandStores';
import { terminalCommands } from '../utils/terminal.commands'
import { capitalize } from '../utils/capitalize';
import ContextLine from './ContextLine';
import ShellLink from './ShellLink';
import Resume from '../assets/Jorge-Juarez.pdf';
import { map } from 'nanostores';

export default function History() {
    const $commandHistory = useStore(commandHistory);
    function handleCommand(command) {
        console.log(command)
        const output = (command in terminalCommands) ? terminalCommands[command]() : '';
        switch (command) {
            case '':
                return ''
            case 'contact':
                return (
                    <div className='text-foreground bg-background w-[60%] pl-4 overflow-hidden'>
                        {Object.entries(output).map(([k, v], i) => (
                            <div key={i} className='text-blue-400 bg-background grid grid-cols-4 place-content-center mx-2 my-2'> 
                                <span className='col-span-1 self-center'>{k}</span>
                                <span className='text-foreground col-span-3'>
                                    <ShellLink href={v['url']}>
                                        {v['username']}
                                    </ShellLink>
                                </span> 
                            </div>
                        ))}
                    </div>
                )
            case 'banner':
                //return <span dangerouslySetInnerHTML={{__html: banner.split('\n').join('\n<br/>')}} className='text-foreground bg-background text-sm'></span>
                return (
                <span 
                    style={{whiteSpace: 'pre-wrap', lineHeight: 1}} 
                    className='text-foreground bg-background text-sm'
                >
                    {output.split('\n').map(line => (
                        <>
                            {line}
                            <br/>
                        </>
                    ))}
                </span>
                )
            case 'about':
                return (
                    <p className='text-foreground bg-background w-[60%] pl-4 overflow-hidden'>
                        {output}
                    </p>
                )
            case 'technologies':
                return (
                <div className='text-foreground bg-background w-[60%] pl-4 overflow-hidden'>
                    {Object.entries(output).map(([k, v], i) => (
                        <>
                        <div key={i} className='font-bold text-blue-400 bg-background grid grid-cols-1 place-content-center mx-2 my-2'> 
                           # - {capitalize(k)}
                        </div>
                        <ul>
                            {v.map(tech => (<li className='ml-2'>• {tech}</li>))}
                        </ul>
                        </>
                    ))}
                </div>
                )
            case 'projects': 
                console.log(output)
                return (
                <div className='text-foreground bg-background w-[60%] pl-4 overflow-hidden'>
                    {Object.entries(output).map(([k, v], i) => (
                        <div key={i} className='mb-8 text-blue-400 bg-background grid grid-cols-1 place-content-center mx-2 my-2'> 
                            <div className='flex flex-col w-full '>
                                <span className='font-bold col-span-1'>
                                    <ShellLink 
                                        href={v['url']}
                                        target="_blank"
                                    >
                                        {k}
                                    </ShellLink>
                                </span>
                                <span>Technologies: {v['technologies']}</span>
                                <span className='text-foreground col-span-3'>{v['description']}</span> 
                            </div>
                        </div>
                    ))}
                </div>
                )
            case 'resume':
                if ($commandHistory.commands.at(-1) === 'resume') {
                    window.open(Resume)
                }
                return '' 
            case 'help':
                console.log(output)
                return (
                    <div className='text-foreground bg-background w-[60%] pl-4 overflow-hidden'>
                        {Object.entries(output).map(([k, v], i) => (
                            <div key={i} className='text-blue-400 bg-background grid grid-cols-4 place-content-center mx-2 my-2'> 
                                <span className='col-span-1 self-center'>{k}</span>
                                <span className='text-foreground col-span-3'>{v}</span> 
                            </div>
                        ))}
                    </div>
                )
            default:
                return <span className='text-foreground'>Command not found. For a list of valid commands type 'help'</span>
        }
    }

    const output = useMemo(() => (
        ['banner'].concat($commandHistory.commands).map((command, i) => (
            <div key={i} className='text-foreground max-w-[100vw] overflow-x-hidden'>
                <div className='flex'>
                    {i !== 0 && (
                        <>
                            <ContextLine />
                            <span className='ml-2'>{command}</span>
                        </>
                    )}
                </div>
                { handleCommand(command) }
            </div>
        ))
    ), [$commandHistory.commands.length])

    return (
        <>
            {   
                output
            }
        </>
    )
}
