import React from 'react';

export default function ContextLine() {
    return (
        <div class="text-terminal font-bold">
            <span>visitor</span>
            <span>@</span>
            <span>{window.location.hostname}:</span>
            <span>~</span>
            <span>$</span>
        </div>
    )
}
