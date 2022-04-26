import Card from './Card'
import React from 'react'
import Banner from './Banner'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <div className="home__section">
          <Card
            src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=320"
            title="Online Experiences"
            description="Unique activities we can do together."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=320"
            title="Experiences"
            description="Things to do wherever you are."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320"
            title="Adventures"
            description="Multi-day trips with meals and stays."
          />
      </div>
        <div className='home__section'>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default Home