'use client';
import React from 'react'
import ServerComponentExample from '../server-components/example'

function ClientComponentExample() {
    return (
        <div>
            <h2>Client Component Example</h2>
            <ServerComponentExample />
        </div>
    )
}

export default ClientComponentExample