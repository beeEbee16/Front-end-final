import React, { useContext } from 'react';
import { quizList } from '../products/quizList';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const DetailPage = () => {
    const { quizId, selectedOptions, setSelectedOptions } = useContext(DataContext);
    const quiz = quizList.find((quiz => quiz.id === quizId));

    const defaultSelectedOptions = () => {
        const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
        let answers = quizAnswers.filter(opt => (opt['quizId'] === quizId))
        setSelectedOptions(answers[0].answers);
    };

    const addContinue = () => {
        const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
        let questOpt = quizAnswers.filter(opt => (opt['quizId'] === quizId));

        if (questOpt.length === 0) {
            return false;
          } else return 1
    };

  return (
    <div className='bg-papayawhip h-screen flex'>
        <div className='m-10'>
            <img src={quiz.quizImage} alt=''/>
        </div>
        <div className='w-[600px]'>
            <div className='text-2xl mt-10 '>
                <div className='font-bold'>{quiz.quizName}</div>
                <p className='mt-5'>{quiz.description}</p>
            </div>
            <div className='flex flex-cols justify-between mt-[120px]'>
                <Link to='/Quizzes'><button className='border-black border-solid border-2 rounded p-2 bg-black text-white hover:bg-neutral-900 w-32'>Back</button></Link>
                {addContinue() && <Link to='/QuizPage'><button className='border-black border-solid border-2 rounded p-2 bg-black text-white hover:bg-neutral-900 w-32' onClick={() => defaultSelectedOptions()}>Continue</button></Link>}
                <Link to='/QuizPage'><button className='border-black border-solid border-2 rounded p-2 bg-black text-white hover:bg-neutral-900 w-32'>Start</button></Link>
            </div>
        </div>
    </div>
  )
}

export default DetailPage
