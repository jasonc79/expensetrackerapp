import React from 'react';

function Navbar() {
    return (
        <>
            <div className = "navbar-container">
                <Link to ="/" className="navbar-logo">
                    <div className="logo-title">Expense Tracker</div>
                </Link>
                <button> Summary </button>
                <button> Add and Delete Expense </button>
            </div>
        </>
    )
}
export default Navbar;