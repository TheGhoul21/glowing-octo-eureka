import React from 'react';
import { IQuestion } from '../../types/question';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

interface IQuestionProps {
    question: IQuestion,
    onQuestionAnswer: (correct: boolean, difficulty: IQuestion['difficulty']) => void
}

const randomizeAnswers = (correct_answer: string, incorrect_answers: Array<string>) => [correct_answer, ...incorrect_answers].sort(() => .5 - Math.random())

export function Question(props: IQuestionProps) {
    const { question, difficulty, category, correct_answer, incorrect_answers, type } = props.question;
    const [currentAnswer, setCurrentAnswer] = React.useState<number>();
    const [answers, setAnswers] = React.useState(randomizeAnswers(correct_answer, incorrect_answers));
    /** https://stackoverflow.com/a/18650169 not so fast, not really good. But it's smth */


    React.useEffect(() => {
        setAnswers(randomizeAnswers(correct_answer, incorrect_answers));
        setCurrentAnswer(undefined);
    }, [question])




    return <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">
                {difficulty === 'easy' ? <SentimentVerySatisfiedIcon titleAccess={difficulty} color='success' /> : null}
                {difficulty === 'medium' ? <SentimentSatisfiedIcon titleAccess={difficulty} color='warning' /> : null}
                {difficulty === 'hard' ? <SentimentVeryDissatisfiedIcon titleAccess={difficulty} color='error' /> : null}

                Q: {question}</FormLabel>
            <RadioGroup
                value={currentAnswer}
                aria-label="answer"
                defaultValue=""
                name="radio-buttons-group"
            >
                {answers.map((text, index) => {
                    return <FormControlLabel
                        onClick={() => setCurrentAnswer(index)} value={index}
                        checked={index === currentAnswer}
                        control={<Radio />} label={text} />
                })}
            </RadioGroup>
            <Button disabled={typeof currentAnswer === 'undefined'}
                onClick={() => {
                    if (typeof currentAnswer === 'undefined') {
                        throw new Error('no answer selected');
                    }

                    props.onQuestionAnswer(answers[currentAnswer] === correct_answer, difficulty);

                }}
            >Next</Button>
        </FormControl>
    </div>
}