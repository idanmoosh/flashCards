import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";
import { useSelector } from "react-redux";



const options={
    name: "quizzes",
    initialState : {
        quizzes:{}
    },
    reducers:{
        addQuiz: (state,action) =>{
            const {quizId,name,topicId,cardIds}=action.payload;
            state.quizzes[quizId]={
                id:quizId,
                name:name,
                topicId:topicId,
                cardIds:cardIds,
            };
        }
    }
}

export const addQuizAddQuizId = quiz => {
    const { quizId , name , topicId , cardIds} = quiz;
    return (dispatch) => {
        dispatch (quizzesSlice.actions.addQuiz(quiz));
        dispatch (addQuizId({quizId: quizId , topicId : topicId}));
    }
}
const something = useSelector(state=>state.cards.cards)


export const quizzesSlice = createSlice(options);
export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer