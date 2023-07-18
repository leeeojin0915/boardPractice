import '../css/BoardDetail.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {getBoardByNo} from "../Data";

function BoardDetail() {
    const {id} = useParams(); //id와 동일한 변수명 찾기위해
    const [board, setBoard] = useState({});

    // const getBoardDetail = async () => {
    //     await axios.get('http://localhost:3000/detail/${id}')
    //         .then((response) => {
    //             setBoard(response.data.board);
    //             console.log("완료");
    //         })
    //         .catch((error) => {
    //             console.log("오류");
    //         })
    // }

    useEffect(() => {
        setBoard(getBoardByNo(id));
    }, []);

    const navigate = useNavigate();
    const home =()=>{
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <label>번호</label>
                <input type="text" value={board.id} readOnly/>
                <label>제목</label>
                <input type="text" value={board.title}/>
                <label>작성자</label>
                <input type="text" value={board.author}/>
                <label>내용</label>
                <textarea id="subject" value={board.content}
                          style={{height: "300px"}}></textarea>

                <button className='submit' onClick={home}>목록</button>
            </div>
        </>
    )
}

export default BoardDetail;