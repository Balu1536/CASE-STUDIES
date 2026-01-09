import {  JSX } from "react";


export function LoadingSpinner(): JSX.Element
{
    return (
    <>
    <div
      style={{
        width: 40,
        height: 40,
        border: '4px solid #ddd',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '20px auto'
      }}
    />

    <div>Loading.....</div>
</>
);
    
}