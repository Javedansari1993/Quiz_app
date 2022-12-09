import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    // const {correct} = useContext(QuizContext);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {/* <h1>{correct}</h1> */}
            <Box current={current} next={setCurrent}/>
        </div>
    )
}

const Box = ({current,next}) => {
    const {quizzes, correct,setCorrect,setExit} = useContext(QuizContext);
    const [ans, setAns] = useState(" ");
    // console.log(quizzes[current]);
    const saveHandler = () =>{
        if(quizzes[current].correct===ans){
            setCorrect(correct+1);
        }
        setAns("");
        if(current+1===quizzes.length){
            setExit(true)
        }else{
            next(current+1);
        }
    }
    return (
        <div className='w-[50%] border shadow-lg rounded-md overflow-hidden'>
            <div className='p-2 text-3xl flex justify-center items-center'>{current+1}){quizzes[current].question}</div>
            <div className='grid grid-cols-2 mt-3'>
                <div className={`p-2 border ${ans==="a" ? 'bg-blue-400 text-white': " "} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("a")}>{quizzes[current].a}</div>
                <div className={`p-2 border ${ans==="b" ? 'bg-blue-400 text-white': " "} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("b")}>{quizzes[current].b}</div>
                <div className={`p-2 border ${ans==="c" ? 'bg-blue-400 text-white': " "} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("c")}>{quizzes[current].c}</div>
                <div className={`p-2 border ${ans==="d" ? 'bg-blue-400 text-white': " "} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={()=>setAns("d")}>{quizzes[current].d}</div>
            </div>
            <div className=' flex justify-between'>
                <div className='h-[300] p-2 bg-orange-700 text-white text-2xl' onClick={()=> setAns("")}>Reset</div>
                <div className='h-[300] p-2 bg-green-700  text-white text-2xl'onClick={saveHandler}>Save & Next</div>
                <div className='h-[300] p-2 bg-red-700  text-white text-2xl' onClick={()=> setExit(true)}>Exit</div>
            </div>
        </div>
    )
}

export default Quiz