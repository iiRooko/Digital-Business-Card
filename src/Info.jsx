import React from 'react'

function Info() {
  return (
    <>
        <div>
            <img className="info-picture" src="" alt="picture of a handsome young man...me!" />
            <div className="info-text">
                <p>
                  Splunk Engineer
                </p>
            </div>
            <button>
                <img src="./src/assets/email-svgrepo-com.svg" alt="small email icon" width="20px" />
                Website
            </button>
            <button>
                <img src="./src/assets/linkedin-svgrepo-com.svg" alt="small LinkedIn icon" width="20px" />
                LinkedIn
            </button>
        </div>
    </>
  )
}

export default Info