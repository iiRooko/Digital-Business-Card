import React from 'react'

function Info() {
  return (
    <>
        <div>
            <img className="info-picture" src="./src/assets/me.jpeg" alt="picture of a handsome young man...me!" />
            <div className="info-text">
                <p>
                  Cody Moskall
                </p>
                <p>
                  Splunk Engineer
                </p>
            </div>
            <a href="mailto:businesscard.tattered076@dralias.com">
            <button>

  
                <img src="./src/assets/email-svgrepo-com.svg" alt="small email icon" width="20px" />
                Email
            </button>
            </a>
            <button>
                <img src="./src/assets/linkedin-svgrepo-com.svg" alt="small LinkedIn icon" width="20px" />
                LinkedIn
            </button>
        </div>
    </>
  )
}

export default Info