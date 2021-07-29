import React from 'react'
const LogElement: React.FC<{ name: string }> = ({ name = 'Log' }) => {
    console.log(`Rendering ${name}`);
    return null;
}
export default LogElement;
