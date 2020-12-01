import React from 'react'
function ExpenseTrack() {
    return <div className="app-container">
        <h1>Expense Tacker</h1>
        <h4>Your Balance <br />$500</h4>
        <div className="expense-container">
            <h4>Income $700 <br /></h4>
            <h4>Expense $200 <br /></h4>
        </div>
        <h3>History</h3>
        <hr />
        <form>
            <label className="label">Enter Description <br/> <input type="text"></input></label>
            <label  className="label">Enter Amount  <br/><input type="number"></input></label>
            <label className="label" > <input type="submit"></input></label>
        </form>
    </div>
}
export default ExpenseTrack;