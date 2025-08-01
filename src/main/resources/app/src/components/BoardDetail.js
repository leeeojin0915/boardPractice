import '../css/BoardDetail.css';
import {useEffect, useState} from "react";
import axios from "../config/config";
import {useNavigate, useParams} from "react-router-dom";

function BoardDetail() {
    const {boardId} = useParams(); //id와 동일한 변수명 찾기위해
    const [board, setBoard] = useState({
        boardId:"",
        title:"",
        author:"",
        content:"",
        boardTypeName:""
    });

/*    const getBoardDetail = async () => {
        await axios.get('http://localhost:3000/detail/${boardId}')
            .then((response) => {
                setBoard(response.data.board);
                console.log("완료");
            })
            .catch((error) => {
                console.log("오류");
            })
    }*/

    useEffect(() => {
        axios.get(`/api/board/detail/${boardId}`)
            .then(res=>setBoard(res.data))
            .catch(err=>console.log(err));
    }, [boardId]);

    const navigate = useNavigate();
    const home =()=>{
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <header>{board.boardTypeName}</header>
                <table>
                    <tbody>
                    <tr>
                        <th>번호</th>
                        <td>
                            <input type="text" name="boardId" value={board.boardId}
                                   placeholder="번호"/>
                        </td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type="text" name="title" value={board.title}
                                   placeholder="제목"/>
                        </td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>
                            <span>{board.author}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea id="subject" name="content" value={board.content}
                                      style={{height: "300px"}}></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className='submit' onClick={home}>목록</button>
            </div>

        </>
    )
}
export default BoardDetail;