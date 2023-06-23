import '../css/BoardWrite.css';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function BoardWrite() {
    const [id, setId] = useState(0);
    const [board, setBoard] = useState({
        title:'',
        author:'',
        content:''
    });
    const {title, author, content} = board; // 비구조화 할당
    //비구조화 할당의 기본 구조는 = 을 기준으로 좌항과 우항으로 나뉨
    // 좌항은 변수의 집합으로 이루어져있고, 우항은 할당할 값으로 이루어져있다.


    const count = ()=>{
        setId(id+1);
    }

    const changeBoard = (event) => {
        const {value, name} = event.target;
        setBoard({
           ...board,
            [name]:value,
        });
    };

    //Post 방식으로 등록
    const createBoard = async () => {
        await axios.post("http://localhost:3000/write", board)
            .then((res) => {
                alert("등록완료")
                console.log(res);
                navigate(`/list`);
            });
            // .catch((error) => {
            //     alert("에러");
            //     console.log(error);
            // })
    };

    const navigate = useNavigate();
    const returnBack= ()=>{
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <label>번호</label>
                <input type="text" name ="id" value={id} readOnly/>
                <label>제목</label>
                <input type="text" name = "title" value={title} onChange={changeBoard} placeholder="제목"/>

                <label>작성자</label>
                <input type="text" name = "author" value={author} onChange={changeBoard}/>

                <label>내용</label>
                <textarea id="subject" name = "content" value={content} onChange={changeBoard}
                          style={{height: "300px"}}></textarea>

                <button className='submit' onClick={createBoard}>등록</button>
                <button className='cancel' onClick={returnBack}>취소</button>
            </div>

        </>
    )
}
export default BoardWrite;