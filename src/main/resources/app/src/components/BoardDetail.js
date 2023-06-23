// import '../css/BoardDetail.css';
// import {useEffect, useState} from "react";
// import axios from "axios";
// import {useParams} from "react-router-dom";
//
// function BoardDetail() {
//     //const {id} = useParams(); //id와 동일한 변수명 찾기위해
//
//     //const {title, author, content} = board; // 비구조화 할당
//     const [board, setBoard] = useState({});
//
//     const getBoardDetail = async () => {
//         await axios.get('http://localhost:3000/detail/${id}')
//             .then((response) => {
//                 setBoard(response.data.board);
//                 console.log("완료");
//             })
//             .catch((error) => {
//                 console.log("오류");
//             })
//     }
//
//     useEffect(() => {
//         getBoardDetail();
//     }, [])
//
//     return (
//         <>
//             <div className="container">
//                 <label>번호</label>
//                 <input type="text" value={board.id} readOnly/>
//                 <label>제목</label>
//                 <input type="text" value={board.title} placeholder="제목"/>
//                 <label>작성자</label>
//                 <input type="text" value={board.author}/>
//                 <label>내용</label>
//                 <textarea id="subject" value={board.content}
//                           style={{height: "300px"}}></textarea>
//
//                 {/*{<button className='submit' onClick={}>수정</button>*/}
//                 {/*<button className='submit' onClick={}>목록</button>}*/}
//             </div>
//
//         </>
//     )
// }
//
// export default BoardDetail();