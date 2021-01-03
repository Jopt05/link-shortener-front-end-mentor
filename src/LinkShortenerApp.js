import React from 'react'
import { Boost } from './components/Boost'
import { Hero } from './components/Hero'
import { Shortener } from './components/Shortener'

export const LinkShortenerApp = () => {
    return (
        <>
          <Hero />
          <Shortener />
          <Boost />
        </>
    )
}
