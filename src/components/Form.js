import React from 'react'

export const Form = ({ handleSubmit, validInput, shortenerInput, loading, handleInputChange }) => {
    return (
        <>
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
        </>
    )
}
