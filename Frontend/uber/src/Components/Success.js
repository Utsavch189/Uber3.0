import React from 'react'

function Success({data}) {
  return (
    <>
    <div className="alert alert-success w-50 fade-in alert-dismissible">
    
    <strong>{data}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
    </>
  )
}

export default Success