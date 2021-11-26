export interface IQuestion {
    category: string,
    type: 'multiple',
    difficulty: 'hard' | 'medium' | 'easy',
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>
}
export const SCORES: { hard: number, medium: number, easy: number } = {
    easy: 1,
    medium: 2,
    hard: 3,
}