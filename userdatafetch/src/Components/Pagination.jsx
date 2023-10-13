import React from 'react'
import './Pagination.css'

const Pagination = ({ post, postperpage, setcurrentpage, currentpage }) => {

    let page = [];

    for (let i = 1; i <= Math.ceil(post / postperpage); i++) {
        page.push(i)
    }

    return (
        <div className='pagination '>
            {
                page.map((p, i) => {
                    return (
                        <button key={i} onClick={() => { setcurrentpage(p) }} className={p == currentpage ? "active" : " "}> {p} </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination