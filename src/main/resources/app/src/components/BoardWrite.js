import '../css/BoardWrite.css';
import {useRef, useState} from "react";
import axios from "../config/config";
import {useNavigate} from "react-router-dom";
import moment from "moment/moment";

function BoardWrite() {
    const [board, setBoard] = useState({
        title: '',
        author: '',
        content: '',
        boardType: 'NOTICE',
        boardTypeName: '공지사항',
        boardId: useRef(1).current,
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
    const createBoard = async () => {
        console.log(board);
        try {
            const res = await axios.post("/api/board/write", board);
            board.boardId += 1;
            returnBack();
            console.log("res:::::::", res);
        } catch (error) {
            console.log("error:::::", error);

        }

    };
    /*const sendData = (e) => {
        alert("success");
        console.log(board);
        navigate('/');
        board.dataId += 1;
    }*/

    const navigate = useNavigate();
    const returnBack = () => {
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <header>{board.boardTypeName}</header>
                <table>
                    <tbody>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" name="title" value={board.title} onChange={changeBoard}
                                   placeholder="제목"/>
                        </td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>
                            <input type="text" name="author" value={board.author} onChange={changeBoard}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea id="subject" name="content" value={board.content} onChange={changeBoard}
                                      style={{height: "300px"}}></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className='submit' onClick={createBoard}>등록</button>
                <button className='cancel' onClick={returnBack}>취소</button>
            </div>

        </>
    )
}

export default BoardWrite;