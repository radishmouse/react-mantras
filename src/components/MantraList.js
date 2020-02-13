import React from 'react';

export default function MantraList({
    mantras
}) {
    return (
        <ul>
            {
                mantras.map( (m, i) => (
                  <li key={i}>{m}</li>
                ))
            }
        </ul>
    );
}