import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import Quiz from '../components/Quiz';
import { quizList } from '../products/quizList';


const Quizzes = () => {
    const [search, setSearch] = useState('');

    let list;

    if(search.length) {
        list = quizList.filter(quiz => ((quiz.quizName).toLowerCase()).includes(search.toLocaleLowerCase()));
    } else {
        list = quizList;
    }
    
    return(
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-row justify-center space-x-2 bg-papayawhip'>
                    <input
                        className='border-solid border-2 border-black my-4 w-96 h-15 mb-14'
                        type='text'
                        id='search'
                        role='searchbox'
                        placeholder='Search Quiz'
                        autoFocus
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoMdSearch 
                        role='button'
                        className='my-4 text-3xl'
                    />
                </div>
            </form>
            <div className='bg-papayawhip flex h-screen flex-wrap'>
                {list.map((quiz) => (
                    <Quiz 
                        id={quiz.id}
                        key={quiz.id}
                        quizName={quiz.quizName}
                        quizImage={quiz.quizImage}
                    />
                ))}
            </div>
        </>
    )
}

export default Quizzes
