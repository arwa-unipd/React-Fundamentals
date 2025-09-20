import React from 'react'

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button className="btn btn-hipster" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
