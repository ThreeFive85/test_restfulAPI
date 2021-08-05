import axios from "axios";

const url = 'https://koreanjson.com/posts'

// getPosts reponse
// [{
//     id: 1,
//     title: "정당의 목적이나 ...",
//     content: "모든 국민은 ...",
//     createdAt: "2019-02-24T16:17:47.000Z",
//     updatedAt: "2019-02-24T16:17:47.000Z",
//     UserId: 1,
//     },
// ]
export const getPosts = async(req, res) => {
    const datas = await axios.get(url);
    const getDatas = datas.data;

    try {
        res.status(200).json(getDatas);
    } catch (error) {
        console.log(error.message);
    }
}