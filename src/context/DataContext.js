import { createContext, useState } from 'react';
import { quizList } from '../products/quizList';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [ quizId, setQuizId ] = useState(0);

    return (
        <DataContext.Provider value={{
            quizId, setQuizId
                }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
