import axios from "axios";

const url = 'https://koreanjson.com/todos'

// getTodos reponse
// [{
//     id: 1,
//     title: "모든 국민은 직업선택의 자유를 가진다.",
//     completed: true,
//     createdAt: "2019-02-24T16:17:47.000Z",
//     updatedAt: "2019-02-24T16:17:47.000Z",
//     UserId: 1,
//     },]
export const getTodos = async(req, res) => {
    const datas = await axios.get(url);
    const getDatas = datas.data;

    try {
        res.status(200).json(getDatas);
    } catch (error) {
        console.log(error.message);
    }
}