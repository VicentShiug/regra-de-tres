import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function Input () {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [result, setResult] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
    const res = (num3 * num2) / num1
    if (isNaN(res)) {
      window.alert('Preencha todos os campos corretamente')
      return
    }
    setResult(res)
  }

  const resultText = !result
    ? <FaXmark /> : Number.isInteger(result)
      ? result : result.toFixed(2).replace('.', ',')

  return (
    <>
      <div className="input-group">
        <input type="number" id="num1" placeholder="A" onChange={(e) => { setNum1(e.target.value) }} />
        <span>está para</span>
        <input type="number" id="num2" placeholder="B" onChange={(e) => { setNum2(e.target.value) }} />
      </div>
      <p className="input-text">
        Assim como
      </p>
      <div className="input-group">
        <input type="number" id="num3" placeholder="C" onChange={(e) => { setNum3(e.target.value) }} />
        <span>está para</span>
        <p id="result">
          {resultText}
        </p>
      </div>
      <br />
      <button className='calculate' onClick={(e) => { calculate(e) }}>Calcular</button>
    </>
  )
}
