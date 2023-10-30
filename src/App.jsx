import Input from './components/Form'

function App () {
  return (
    <>

      <div className="calculator-container">
        <h1>Regra de três</h1>
        <div className="input-container">
          <Input />
        </div>
      </div>
      <footer>
        <div className="social">
          <a href="https://github.com/VicentShiug" target='_blank' rel="noreferrer">
            Guilherme Câmara &copy; 2023
          </a>
        </div>
        <div className='credits'>
          <p>Créditos de layout</p>
          <a href="https://www.youtube.com/@larissakich" target='_blank' rel="noreferrer">Larissakich</a>
        </div>
      </footer>
    </>
  )
}

export default App
