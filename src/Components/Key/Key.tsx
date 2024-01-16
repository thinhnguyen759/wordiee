import React from 'react'
import "./Key.css"
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../interface';
import { incPos, setBoard } from '../../Redux/boardSlice';

interface IProps{
    letter: string
}

const Key: React.FC<IProps> = (props) => {
    const {letter} = props;
    const board = useSelector((state: rootState)=> state.board.board);
    const position = useSelector((state:rootState)=>state.board.pos);
    const dispatch = useDispatch();
    const chooseLetter = () => {
        if(position >=30) return;
        const newBoard = [...board];
        newBoard[position]= letter;
        dispatch(setBoard(newBoard))
        dispatch(incPos());

    }

  return (
    <div className="letter" onClick={chooseLetter}>
        {letter}
    </div>
  )
}

export default Key