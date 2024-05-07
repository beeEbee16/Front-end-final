import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
 

const Quiz = ({ id, quizName, quizImage }) => {
    const { setQuizId } = useContext(DataContext);

  return (
    <div className='text-center ml-10 mr-10'>
        <div className='overflow-hidden rounded'>
            <figure>
                <Link to='/DetailPage'>
                    <img src={quizImage} className='object-cover' alt='' onClick={() => setQuizId(id)}/>
                </Link>
                <p><b>{quizName}</b></p>
            </figure>
        </div>
  </div>
  )
}

export default Quiz
