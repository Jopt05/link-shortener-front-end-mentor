import React, { useEffect, useRef } from 'react'
import Img1 from '../assets/icon-brand-recognition.svg'
import Img2 from '../assets/icon-detailed-records.svg'
import Img3 from '../assets/icon-fully-customizable.svg'
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

const initialState = JSON.parse( localStorage.getItem('links') ) || [];

export const Shortener = () => {

    const [link, handleCopy, handleFetch] = useFetch(initialState);

    const [ formValues, handleInputChange, resetForm ] = useForm({
        shortenerInput: ''
    });

    const { data, loading, validInput } = link;

    const { shortenerInput } = formValues;

    const linksContainer = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await handleFetch(shortenerInput);
        resetForm();
        ( validInput === true ) ? linksContainer.current.scrollIntoView(false) : console.log("Something went wrong"); 
    }

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(data) );
    }, [data])

    return (
        <div className="animate__animated animate__fadeIn shortener padding">
            <form onSubmit={ handleSubmit } className={` shortener__form ${ validInput ? '' : 'wrongValue' } `}>
                <input 
                    onChange={ handleInputChange }
                    value={ shortenerInput }
                    name="shortenerInput" 
                    className="shortener__form-input" 
                    type="text" 
                    placeholder="Shorten a link here..."
                />
                <label htmlFor="shortener" className="shortener__form-label">Please add a link</label>
                <button type="submit" className="button">
                    { loading ? 'Loading...' : 'Shorten it!' }
                </button>
            </form>
            <div ref={ linksContainer } className="shortener__links">
                {
                    data.map( l => ( 
                    <div className="animate__animated animate__zoomIn shortener__links-link" key={ l.id }>
                        <p className="shortener__links-link-origin"> {l.origin} </p>
                        <a target="_blank" href={`https://${l.shorten}`} className="shortener__links-link-short"> {l.shorten} </a>
                        <button onClick={ () => handleCopy( l.id ) } className={ `button ${ l.copied ? 'buttonCopied' : '' }` }>{ l.copied ? 'Copied!' : 'Copy' }</button>
                    </div> ) )
                }
            </div>
            <h2>Advanced Statistics</h2>
            <p className="h2Sub">
                Track how your links are performing across the web with<br/>
                our advanced statistics dashboard.
            </p>
            <div className="shortener__statistics">
                <div className="shortener__statistics-item">
                    <div className="shortener__statistics-item-photo">
                        <img alt="statistics icon" src={ Img1 }/>
                    </div>
                    <p className="shortener__statistics-item-title">Brand Recognition</p>
                    <p className="shortener__statistics-item-description">
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="shortener__statistics-item">
                    <div className="shortener__statistics-item-photo">
                        <img alt="statistics icon" src={ Img2 }/>
                    </div>
                    <p className="shortener__statistics-item-title">Detailed Records</p>
                    <p className="shortener__statistics-item-description">
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className="shortener__statistics-item">
                    <div className="shortener__statistics-item-photo">
                        <img alt="statistics icon" src={ Img3 }/>
                    </div>
                    <p className="shortener__statistics-item-title">Fully Customizable</p>
                    <p className="shortener__statistics-item-description">
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>
                </div>
                <div className="shortener__draw"></div>
            </div>
        </div>
    )
}
