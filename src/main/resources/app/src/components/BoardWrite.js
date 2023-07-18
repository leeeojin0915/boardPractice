import '../css/BoardWrite.css';
import {useRef, useState} from "react";
import axios, {create} from "axios";
import {useNavigate} from "react-router-dom";
import moment from "moment/moment";

function BoardWrite() {
    const [board, setBoard] = useState({
        title: '',
        author: '',
        content: '',
        dataId: useRef(0).current,
        createDate: moment().format("YYYY-MM-DD")
    });

    //const {title, author, date, content} = board; // 비구조화 할당
    //비구조화 할당의 기본 구조는 = 을 기준으로 좌항과 우항으로 나뉨
    // 좌항은 변수의 집합으로 이루어져있고, 우항은 할당할 값으로 이루어져있다.

    const changeBoard = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value,
        });
    };

    //Post 방식으로 등록
    // const createBoard = async () => {
    //     await axios.post("http://localhost:3000/list", board)
    //         .then((res) => {
    //             alert("등록완료")
    //             console.log(res);
    //             returnBack();
    //             count();
    //         })
    //         .catch((error) => {
    //             alert("에러"+error);
    //             console.log(error);
    //         })
    // };
    const sendData = (e) => {
        alert("success");
        console.log(board);
        navigate('/');
        board.dataId += 1;
    }

    const navigate = useNavigate();
    const returnBack = () => {
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <label>번호</label>
                <input type="text" name="id" value={board.dataId} readOnly/>
                <label>제목</label>
                <input type="text" name="title" value={board.title} onChange={changeBoard} placeholder="제목"/>
                <label>작성자</label>
                <input type="text" name="author" value={board.author} onChange={changeBoard}/>
                <label>등록일자</label>
                <input type="text" name="date" value={board.createDate}/>
                <label>내용</label>
                <textarea id="subject" name="content" value={board.content} onChange={changeBoard}
                          style={{height: "300px"}}></textarea>

                <button className='submit' onClick={sendData}>등록</button>
                <button className='cancel' onClick={returnBack}>취소</button>
            </div>

        </>
    )
}

export default BoardWrite;