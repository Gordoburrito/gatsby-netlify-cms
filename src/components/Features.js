import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns features-grid">
    {gridItems.map((item) => (
      <div key={item.text} className="feature-blurb">
        <section className="feature-blurb__section">
          <div className="has-text-centered">
            <div className= "feature-blurb__image">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
           <h3 className="feature-blurb__title">{item.title}</h3>
          <p className="feature-blurb__text">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
