import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to Design and Code</h1>
        <p>Lol I'm a badass.</p>
        <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
