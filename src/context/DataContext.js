import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [ quizId, setQuizId ] = useState(0);
    const [ selectedOptions, setSelectedOptions ] = useState([]);
    const [ quizSaveData, setQuizSaveData ] = useState([]);

    const handleRadioChange = (questNum, value) => {
        let questOpt = selectedOptions.filter(opt => (opt['questNum'] === questNum))
  
          if (!questOpt.length) {
            setSelectedOptions([
              ...selectedOptions,
              {questNum: questNum, answer: value}
            ]);
          } else {
            const updated = selectedOptions.map((quest) => {
              if (quest['questNum'] === questNum) {
                return {...quest, answer: value};
              } else return quest;
            });
            setSelectedOptions(updated);
          }
        };
  
        const saveQuiz = () => {
          let answers = quizSaveData.filter(opt => (opt['quizId'] === quizId))
          if (!answers.length) {
            setQuizSaveData([
              ...quizSaveData,
              {quizId: quizId, answers: selectedOptions}
            ]);
          } else {
            const updated = quizSaveData.map((quiz) => {
              if (quiz['quizId'] === quizId) {
                return {...quiz, answers: selectedOptions};
              } else return quiz;
            });
            setQuizSaveData(updated);
          }
        };
        
        useEffect(() => {
          localStorage.setItem('quizAnswers', JSON.stringify(quizSaveData));
        }, [quizSaveData])
  
        useEffect(() => {
          saveQuiz();
        }, [selectedOptions])

        useEffect(() => {
            let answers = quizSaveData.filter(opt => (opt['quizId'] === quizId))
            if(answers.length === 0) setSelectedOptions([]);
        }, [quizId])

    return (
        <DataContext.Provider value={{
            quizId, setQuizId, handleRadioChange, selectedOptions, setSelectedOptions
                }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
