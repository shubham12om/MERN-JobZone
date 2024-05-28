import React, { useContext } from 'react'
import { Context } from '../../main'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { RiGithubFill } from 'react-icons/ri'

const Footer = () => {
  const { isAuthorized } = useContext(Context)
  return (
    <footer className={isAuthorized ? 'footerShow' : 'footerHide'}>
      <div>&copy; All Rights Reserved By Shubham Sharma.</div>
      <div>
        <Link
          to={'https://www.linkedin.com/in/shubham-sharma-606b44190/'}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={'https://github.com/Shubham12om'} target="_blank">
          <RiGithubFill />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
