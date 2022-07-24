import { configureStore } from "@reduxjs/toolkit";
import {default as topicsReducer} from "../features/topics/topicsSlice"
import {default as quizzesReducer} from "../features/quizzes/quizzesSlice"
import {default as cardsReducer} from "../features/cards/cardsSlice"

export default configureStore({
  reducer: {
    topics : topicsReducer,
    quizzes : quizzesReducer,
    cards : cardsReducer
  },
});
