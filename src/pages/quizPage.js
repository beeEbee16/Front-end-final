import React, { useState, useContext } from 'react'
import { quizList } from '../products/quizList';
import DataContext from '../context/DataContext';

const QuizPage = () => {
  const [ hasCompleted, setHasCompleted ] = useState(false);
  const [ correctCount, setCorrectCount ]  = useState(0);
  const [ incorrectCount, setIncorrectCount ]  = useState(0);
  const { quizId, handleRadioChange, selectedOptions, setSelectedOptions } = useContext(DataContext);
  const quiz = quizList.find((quiz => quiz.id === quizId));
  
  if (quiz == null) return null;

  const quizQuestions = quiz.quizData;
    
    const quizSubmit = () => {
        let questOpt;
        let hasUnansweredQuestion = false;
        let correct = 0;
        let incorrect = 0;

        quizQuestions.map((question) => {
          questOpt = selectedOptions.filter(opt => (opt['questNum'] === `quest${question.QuestionNum}`))
          if (questOpt.length === 0) {
            hasUnansweredQuestion = true;
          }  else if (question.Answer === questOpt[0]['answer']) {
            correct++;
            setCorrectCount(correct);
          } else {
            incorrect++;
            setIncorrectCount(incorrect)
          }
        });

        if (hasUnansweredQuestion) {
          alert('You need to answer all questions.');
        } else {
          setCorrectCount(correct);
          setIncorrectCount(incorrect);
          setHasCompleted(true);
        }
    }

    const restart = () => {
      // Clear selected options
      setSelectedOptions([]);

      // Reset Counts
      setCorrectCount(0);
      setIncorrectCount(0);

      // Set completed to false
      setHasCompleted(false);

      // Select all radio buttons on the page
      const radioButtons = document.querySelectorAll('input[type="radio"]');

      // Loop through each radio button and set checked to false
      radioButtons.forEach(radioButton => {
        radioButton.checked = false;
      });    

      // Scroll to the top of the page
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    }

    const isChecked = (questNum, value) => {
      //const quizAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
      //let questOpt = quizAnswers.filter(opt => (opt['quizId'] === quizId) && (opt['answers'][questNum] === questNum) && (opt['answers']['answer'] === value));
      let questOpt = selectedOptions.filter(opt => (opt['questNum'] === questNum && opt['answer'] === value));

      if (questOpt.length === 0) {
          return false;
        } else {
          return true
        }
    }

  return (
    <>
      <div className='flex flex-col bg-papayawhip'>
        <p className='text-4xl font-bold mb-4 text-center mb-20 sticky top-16 bg-blue-500 p-3'>{quiz.quizName}</p>
        <div className='grid gap-4 ml-10 text-2xl'>
            {quizQuestions.map((quizQuest) => {
              return (
                <>
                  <p className='text-2xl'>{`${quizQuest.QuestionNum}.\u00A0\u00A0${quizQuest.Question}`}</p>
                  <div className='space-y-4'>
                    <input className='mr-2 h-6 w-6' type='radio' checked={isChecked(`quest${quizQuest.QuestionNum}`, 'A')} id={`quest${quizQuest.QuestionNum}Option1`} name={`quest${quizQuest.QuestionNum}`} value='A' onChange={() => {
                      handleRadioChange(`quest${quizQuest.QuestionNum}`, 'A')
                    }}></input>
                    <label htmlFor={`quest${quizQuest.QuestionNum}Option1`}>{quizQuest.A}</label>
                    <br />
                    <input className='mr-2 h-6 w-6' type='radio' checked={isChecked(`quest${quizQuest.QuestionNum}`, 'B')} id={`quest${quizQuest.QuestionNum}Option2`} name={`quest${quizQuest.QuestionNum}`} value='B' onChange={() => {
                      handleRadioChange(`quest${quizQuest.QuestionNum}`, 'B')
                    }}></input>
                    <label htmlFor={`quest${quizQuest.QuestionNum}Option2`}>{quizQuest.B}</label>
                    <br />
                    <input className='mr-2 h-6 w-6' type='radio' checked={isChecked(`quest${quizQuest.QuestionNum}`, 'C')} id={`quest${quizQuest.QuestionNum}Option3`} name={`quest${quizQuest.QuestionNum}`} value='C' onChange={() => {
                      handleRadioChange(`quest${quizQuest.QuestionNum}`, 'C')
                    }}></input>
                    <label htmlFor={`quest${quizQuest.QuestionNum}Option3`}>{quizQuest.C}</label>
                    <br />
                    <input className='mr-2 h-6 w-6' type='radio' checked={isChecked(`quest${quizQuest.QuestionNum}`, 'D')} id={`quest${quizQuest.QuestionNum}Option4`} name={`quest${quizQuest.QuestionNum}`} value='D' onChange={() => {
                      handleRadioChange(`quest${quizQuest.QuestionNum}`, 'D')
                    }}></input>
                    <label htmlFor={`quest${quizQuest.QuestionNum}Option4`}>{quizQuest.D}</label>
                  </div>
                  <p className='m-3'></p>
              </>
              )
            })}
          </div>
      </div>
      {hasCompleted ? (
        <>
          <p className='text-center text-2xl bg-papayawhip'>{`You correctly answered ${correctCount} out of ${correctCount + incorrectCount} questions, which is ${correctCount / (correctCount + incorrectCount) * 100}%.`}</p>
          <div className='flex flex-col items-center bg-papayawhip'>
            <button className='border-black border-solid border-2 rounded w-32 m-10 bg-black text-white p-2 hover:bg-neutral-900' onClick={() => restart()}>Try Again</button>
          </div>
        </>
      ) : (
      <div className='flex flex-col items-center bg-papayawhip'>
        <button className='border-black border-solid border-2 rounded w-32 m-10 bg-black text-white p-2 hover:bg-neutral-900' onClick={() => quizSubmit()}>Submit</button>
      </div>
      )}
    </>
  )
}

export default QuizPage
