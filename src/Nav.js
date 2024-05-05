import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className='bg-black text-white sticky top-0'>
                <div className='flex flex-wrap items-center justify-between p-4'>
                    <Link to='/'><h1 className='text-4xl hover:text-blue-500'>Quiz Central</h1></Link>
                    <div className='flex flex-row justify-end space-x-5 text-2xl'>
                        <Link to='/Quizzes' className='hover:text-neutral-300'>Quizzes</Link>
                        <Link to='/About' className='hover:text-neutral-300'>About</Link>
                        <Link to='/Login' className='hover:text-neutral-300'>Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav
