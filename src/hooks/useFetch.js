import React, { useState } from 'react'



const apiPATH = "https://api.shrtco.de/v2/shorten?url="

export const useFetch = ( initialState = [] ) => {

    const [link, setlink] = useState({
        data: initialState,
        loading: false,
        validInput: true,
    })

    const handleFetch = async(input) => {
        setlink({...link, validInput:true});

        if( input.length < 10 ){
            setlink({
                ...link,
                validInput:false
            });
            return;
        }

        setlink({...link, loading: true})
        const {short_link, original_link} = await fetch( apiPATH + input, {
            method: 'POST'
        })
        .then( respo => respo.json() )
        .then( resp => resp.result )

        setlink({
            data: [...link.data, {
                id: new Date().getTime(),
                origin: original_link,
                shorten: short_link,
                copied: false,
            }],
            loading: false,
            validInput: true
        })
    }

    const handleCopy = ( id ) => {
        let x = "";
        let links = [...link.data];
        for( let el of link.data ) {
            el.copied = false;
            if( id === el.id ){
                x = link.data.indexOf(el)
                navigator.clipboard.writeText(el.shorten);
            }
        }
        let copiedLink = {...links[x]};
        copiedLink.copied = true;
        links[x] = copiedLink;
        setlink({
            ...link,
            data: links
        })
    }

    return [link, handleCopy, handleFetch]
}
