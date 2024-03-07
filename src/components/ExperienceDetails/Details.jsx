import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import PropTypes from 'prop-types'

function Details({title}) {
  return (
    <div className='flex items-center gap-4 w-fit'>
        <BsPatchCheckFill className='text-blue-500 text-lg' />
        <p className='font-bold text-lg'>{title}</p>
    </div>
  )
}

export default Details

Details.propTypes = {
    title: PropTypes.string.isRequired,
    }