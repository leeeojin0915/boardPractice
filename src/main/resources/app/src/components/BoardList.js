import {Link, useNavigate, useParams} from "react-router-dom";
import '../css/BoardList.css';
import {useEffect, useState} from "react";
import axios from "../config/config";
import moment from "moment/moment";

function BoardList() {
    const [boardList, setBoardList] = useState([]); // 가져올 리스트
    const [selectBoards, setSelectBoards] = useState([]) // 체크박스로 선택 된 게시판 리스트
    const navigate = useNavigate();

    //get 방식으로 데이터 불러오기
    const getBoardList = async () => {
        try {
            const response = await axios.get("/api/board/list");
            console.log("response",new Date(Date.parse(response.data[0].createDate)));
            console.log("response",new Date(Date.parse(response.data[0].updateDate)));
            setBoardList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // 게시글 체크박스
    const handleCheckBoxChange = (boardId) => {
        console.log(boardId);
        setSelectBoards((prev) =>
            prev.includes(boardId)
                ? prev.filter((id) => id !== boardId) // 체크박스 선택/제거
                : [...prev, boardId] // 추가 선택
        );
    };

    const handleDelete = () => {
        if(selectBoards.length < 1){
            console.log("boardList:::",selectBoards);
            alert("삭제 할 게시글을 선택해 주세요.");
            return;
        }
        axios.put(`/api/board/delete`,selectBoards)
            .then(()=> {
                alert("삭제 완료");
                setBoardList(prev => prev.filter(board => !selectBoards.includes(board.boardId)));
            })
            .catch((err)=>console.error(err));
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
                    <th><input type='checkbox' onChange={() => {
                        if (selectBoards.length === boardList.length) {
                            setSelectBoards([]); // 전체 해제
                        } else {
                            setSelectBoards(boardList.map((data) => data.boardId)); // 전체 선택
                        }
                    }}
                               checked={selectBoards.length === boardList.length}
                    />
                    </th>
                    <th>No</th>
                    <th style={{width: "25%"}}>제목</th>
                    <th>저자</th>
                    <th>등록일자</th>
                    <th>수정일자</th>
                </tr>
                </thead>

                <tbody>
                {boardList && boardList.length > 0 ? (
                    boardList.map((board, index) => (
                        <tr key={board.boardId}>
                            <th>
                                <input type="checkbox" checked={selectBoards.includes(board.boardId)} onChange={()=>handleCheckBoxChange(board.boardId)}/>
                            </th>
                            {/*index = 화면 번호 보기용*/}
                            <th>{index + 1}</th>
                            <th><Link to={`/board/${board.boardId}`}>{board.title}</Link></th>
                            <th>{board.author}</th>
                            <th>{board.createDate != null ? moment(board.createDate).format('YYYY-MM-DD HH:mm:ss') : ''}</th>
                            <th>{board.updateDate != null ? moment(board.updateDate).format('YYYY-MM-DD HH:mm:ss') : ''}</th>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>게시글이 없습니다.</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button className='submit' onClick={handleDelete} style={{backgroundColor: "indianred"}}>삭제</button>
            <Link to='/board/create'>
                <button className='submit'>글쓰기</button>
            </Link>
        </>
    )
}

export default BoardList;