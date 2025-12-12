import { calculateInvestmentResults, formatter } from "../../util/investment";

function TableResults({ investments }) {
    const results = calculateInvestmentResults(investments)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Intereset</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((item, index) => {
                    // const initialInvestment = item.valueEndOfYear - item.interest - item.annualInvestment
                    // const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                    // const totalAmountInvested = item.valueEndOfYear - totalInterest;
                    // console.log('totalInterest', totalInterest)
                    
                    return (                    
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.totalInterest)}</td>
                        <td>{formatter.format(item.totalAmountInvested)}</td>
                    </tr>
                )})}
            </tbody>
                
        </table>
    )
}

export default TableResults;