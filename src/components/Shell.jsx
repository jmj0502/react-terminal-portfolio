import React from 'react';
import ContextLine from './ContextLine';
import Input from './Input';

export default function Shell() {
    return (
        <div id='shell' className='flex w-[100%]'>
            <ContextLine />
            <Input />
        </div>
    )
}