import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder';

const Result = () => {
    const {quizzes, correct,setStart,setExit} = useContext(QuizContext);
    const playAgain =()=>{
        setExit(false);
        setStart(false)
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[50%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-4xl p-3'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-5xl rounded my-2'>Play Again</button>
            </div>
        </div>
    )
}

export default Result