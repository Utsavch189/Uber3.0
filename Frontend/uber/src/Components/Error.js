import React from 'react'

export default function Error({error}) {
    
  return (
    
    <>
<div className="alert alert-danger w-50 fade-in alert-dismissible">
    
  <strong>{error}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
    </>
  )
}
