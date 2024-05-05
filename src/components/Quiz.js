import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
 

const Quiz = ({ id, quizName, quizImage }) => {
    const { setQuizId } = useContext(DataContext);

  return (
    <div className='ml-16 flex text-center'>
        <div className='grid grid-cols-2 gap-4 overflow-hidden rounded'>
            <figure>
                <Link to='/QuizPage'>
                    <img src={quizImage} className='object-cover' alt='' onClick={() => setQuizId(id)}/>
                </Link>
                <p><b>{quizName}</b></p>
            </figure>
        </div>
  </div>
  )
}

export default Quiz
