import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'
import Search from './Search'
import { createBrowserHistory } from 'history';


function Banner() {

  const history = createBrowserHistory()
    const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search/>}
            <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
              {showSearch ? "Hide" : "Search Dates"}
            </Button>
        </div>

<div className='banner__info'>
    <h1>Get out and strecth your imagination</h1>
    <h5>Plan a different kinf of gataway to uncover the hidden gems near you</h5>
    <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
</div>

    </div>
  )
}

export default Banner