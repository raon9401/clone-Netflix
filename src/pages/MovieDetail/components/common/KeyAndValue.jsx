import React from 'react'
import { Badge } from 'react-bootstrap'

const KeyAndValue = ({objectProps}) => {
  return (
    <div className='d-flex column-gap-2'>
        <Badge bg="danger" className='p-2' style={{minWidth:"100px"}}>{objectProps?.name}</Badge>
        <span>{objectProps?.value}</span>
    </div>
  )
}

export default KeyAndValue