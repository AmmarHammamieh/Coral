import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav aria-label='category navigation'>
        <ul className='page-Footnotes flex justify-between custom-scroll space-x-5 overflow-x-auto text-nowrap py-5'>
            <li>
                <NavLink to={"category/"}>Jewelry & Accessories</NavLink>
            </li>
            <li>
                <NavLink to={"category/"}>Clothing & Shoes</NavLink>
            </li>
            <li>
                <NavLink to={"category/"}>Home & Living</NavLink>
            </li>
            <li>
                 <NavLink to={"category/"}>Wedding & Party</NavLink>
            </li>
            <li>
                <NavLink to={"category/"}>Toys & Entertainment</NavLink>
            </li>
            <li>
                <NavLink to={"category/"}>Art & Collectibles</NavLink>
            </li>
            <li>
                <NavLink to={"category/"}>Craft Supplies & Tools</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav