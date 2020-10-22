import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-6 is-offset-1">
                <h1>newsletter form goes here</h1>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="footer__menu-list">
                    <li>
                      <Link className="footer__navbar-item" to="/about">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__navbar-item" to="/products">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
