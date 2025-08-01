import {Link} from "react-router-dom";
import '../css/BoardList.css'
import {useEffect, useState} from "react";
import axios from "../config/config";

function BoardList() {
    const [boardList, setBoardList] = useState([]); // 가져올 리스트

    //get 방식으로 데이터 불러오기
    const getBoardList = async () => {
        try{
            const response = await axios.get("/api/board/list");
            console.log(response);
            setBoardList(response.data);
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getBoardList().then(data => {
            console.log("받은 데이터:", data);
            // 여기서 setBoardList(data); 할 수도 있고 안 할 수도 있음
        });
    }, []);

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th><input type='checkbox'/></th>
                    <th>No</th>
                    <th style={{width: "25%"}}>제목</th>
                    <th>저자</th>
                    <th>등록일자</th>
                </tr>
                </thead>

                <tbody>
                {boardList && boardList.length > 0 ? (
                    boardList.map((board) => (
                        <tr key={board.boardId}>
                            <th>
                                <input type={"checkbox"}/>
                            </th>
                            <th>{board.boardId}</th>
                            <th><Link to={`/board/${board.boardId}`}>{board.title}></Link></th>
                            <th>{board.author}</th>
                            <th>{board.createDate}</th>
                        </tr>
                    ))
                ) : (
                    <tr><td>게시글이 없습니다.</td></tr>
                )}
                </tbody>
            </table>
            <Link to=''>
                <button className='submit' style={{backgroundColor: "indianred"}}>삭제</button>
            </Link>
            <Link to='/board/create'>
                <button className='submit'>글쓰기</button>
            </Link>
        </>
    )
}

export default BoardList;