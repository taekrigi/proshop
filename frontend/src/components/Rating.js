import React from 'react'
import PropTypes from 'prop-types'

// style={{ color }}
//           className={
//             value >= 1
//               ? 'fas fa-star'
//               : value >= 0.5
//               ? 'fas fa-star-half-alt'
//               : 'far fa-star'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {Array.from({ length: 5 })
          .map((_, i) => i + 1)
          .map((num, index) => (
            <i
              key={index}
              style={{ color }}
              className={
                value >= num
                  ? 'fas fa-star'
                  : value >= num - 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            />
          ))}
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
