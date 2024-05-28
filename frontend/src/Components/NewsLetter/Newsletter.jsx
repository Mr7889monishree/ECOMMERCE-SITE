import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers To Your Mail Id</h1>
        <p>Subscribe To our NewsLetter and stay Updated</p>
        <div>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="91002c1e-3ed8-46b6-bb61-50a372da16de"></input>
            <input type="email" name="mailid" id="mail" placeholder='Your Email ID' />
            <button>Subscribe</button>

        </form>
        </div>
    </div>
  )
}

export default Newsletter