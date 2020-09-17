import React from 'react';

export default function Post(props) {

    const { imageObject } = props

    return (
        <div className={'post'}>
            <h2>{imageObject.title}</h2>
            <img src={imageObject.hdurl} alt={imageObject.title}/>
            <p>{imageObject.copyright}</p>
            <p>{imageObject.explanation}</p>
        </div>
    )
}