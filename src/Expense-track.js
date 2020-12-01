import React from 'react'

const transactions= [
    {amount:500 ,desc:"cash"},
    {amount:500 ,desc:"cash"},
    {amount:500 ,desc:"cash"},
]

function ExpenseTrack() {
    return <div className="app-container">
        <h1>Expense Tacker</h1>
        <h4 >Your Balance <br />$500</h4>
        <div className="expense-container">
            <h4>Income $700 <br /></h4>
            <h4>Expense $200 <br /></h4>
        </div>
        <h3>History</h3>
        <ul > {transactions.map((transobj,ind)=>{
            return <li className="list">
            <span>{transobj.amount}</span>
            <span>{transobj.desc}</span>
        </li>
        })}
            
            <li className="list">
                <span>Cash</span>
                <span>200</span>
            </li>
            <li className="list">
                <span>Cash</span>
                <span>200</span>
            </li>
        </ul>
        <hr />
        <form>
            <label className="label">Enter Description <br/> <input type="text"></input></label>
            <label  className="label">Enter Amount  <br/><input type="number"></input></label>
            <label className="label" > <input type="submit"></input></label>
        </form>
    </div>
}
export default ExpenseTrack;