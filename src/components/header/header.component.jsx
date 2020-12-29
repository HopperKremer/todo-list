import './header.styles.css'

import {Link} from 'react-router-dom'

const Header = () => (
    <div className='header'>
        <div className='options'>
            <h3>
            <Link className='option' to='/'>HOME</Link>
            |
            <Link className='option' to='/todo-page'>TODO LIST</Link>
            </h3>
        </div> 
    </div>
)

export default Header