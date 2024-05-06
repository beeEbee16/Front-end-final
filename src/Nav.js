import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from './context/AuthContext';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <nav className='bg-black text-white sticky top-0'>
                <div className='flex flex-wrap items-center justify-between p-4'>
                    <Link to='/'><h1 className='text-4xl hover:text-blue-500'>Quiz Central</h1></Link>
                    <div className='flex flex-row justify-end space-x-5 text-2xl'>
                        {user?.displayName && <Link to='/Quizzes' className='hover:text-neutral-300'>Quizzes</Link>}
                        <Link to='/About' className='hover:text-neutral-300'>About</Link>
                        {user?.displayName ? <Link to='/Login' className='hover:text-neutral-300' onClick={handleSignOut}>Logout</Link> : <Link to='/Login' className='hover:text-neutral-300'>Login</Link>}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav
