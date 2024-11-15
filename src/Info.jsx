import React from 'react'

function Info() {
  return (
    <>
        <div className="info-container">
            <img className="info-picture" src="./src/assets/me.jpeg" alt="picture of a handsome young man...me!" />
            <div className="info-text">
                <p className="info-name">
                  Cody Moskall
                </p>
                <p className="info-job-title">
                  Splunk Engineer
                </p>
            </div>
            <div className="info-email">
                <a href="mailto:businesscard.tattered076@dralias.com">
                    <img src="./src/assets/email-svgrepo-com.svg" alt="small email icon" width="20px" />
                    Email
                </a>
            </div>
            <div className="info-linkedin">
                <a href="https://www.linkedin.com/in/cody-moskall-3418941a6">
                    <img src="./src/assets/linkedin-svgrepo-com.svg" alt="small LinkedIn icon" width="20px" />
                    LinkedIn
                </a>
            </div>
        </div>
    </>
  )
}

export default Info