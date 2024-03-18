import React from 'react';

export default function ShellLink({ children, href }) {
    console.log(href)
    return (
        <a 
            className='underline hover:no-underline hover:font-bold'
            target='_blank'
            href={href} 
        >
            { children }
        </a>
    )
}
