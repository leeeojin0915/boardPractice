const boardList = [
    {
        id: "1",
        title: "제목",
        author: "길동",
        content: "제목",
        createDate: "2023-07-18"
    },
    {
        id: "2",
        title: "제목2",
        author: "길동2",
        content: "제목2",
        createDate: "2023-07-18"
    }
];

const getBoardByNo = (id) => {
    const array = boardList.filter((x) => x.id === id);
    if (array.length === 1) {
        return array[0];
    }
    return null;
}
export {boardList, getBoardByNo};