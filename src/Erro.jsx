import React from 'react'

const Erro = ({message}) => {
  return (
    <h1 style={{color: 'red'}}>Erro: {message ?? ''}</h1>
  )
}

export default Erro