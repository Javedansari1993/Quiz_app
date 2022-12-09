import './App.css';
import Start from './Components/Start';
import Result from './Components/Result';
import Quiz from './Components/Quiz';
import { QuizContext } from './Context/QuizHolder';
import { useContext } from 'react';



function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
    {
      exit===false
      ?
      <>
      {
        start === true
          ?
          <Quiz />
          :
          <Start />
      }
      </>
      :<Result/>
    }
    </>
  );
}

export default App;
