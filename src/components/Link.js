import React from 'react'

export const Link = ({ data, handleCopy }) => {

    return (
        <>
         {
             data.map( l => ( 
                <div className="animate__animated animate__zoomIn shortener__links-link" key={ l.id }>
                    <p className="shortener__links-link-origin"> {l.origin} </p>
                    <a target="_blank" href={`https://${l.shorten}`} className="shortener__links-link-short"> {l.shorten} </a>
                    <button onClick={ () => handleCopy( l.id ) } className={ `button ${ l.copied ? 'buttonCopied' : '' }` }>{ l.copied ? 'Copied!' : 'Copy' }</button>
                </div> ) )
         }   
        </>
    )
}
