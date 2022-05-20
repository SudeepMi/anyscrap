import React, { useEffect } from 'react'
import API from '../../utils/Api'

function Home() {

  useEffect(() => {
    API.post('/scrap',{}).then(res => {
        console.log(res.data)
})
}
, [])

  return (
    <div className='landing'>
      <h1>Welcome to the Scraper</h1>
      <h2>This is a web scraper that will scrape the news from the news website</h2>
    </div>
  )
}

export default Home