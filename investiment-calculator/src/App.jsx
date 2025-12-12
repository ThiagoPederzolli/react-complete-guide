import { useState } from "react"
import InputsContainer from "./components/InputsContainer/InputsContainer"
import TableResults from "./components/TableResults/TableResults"

function App() {
  const [investments, setInvestments] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })
  return (
    <>
      <InputsContainer updateInvestments={setInvestments} />
      <TableResults investments={investments} />
    </>
  )
}

export default App
