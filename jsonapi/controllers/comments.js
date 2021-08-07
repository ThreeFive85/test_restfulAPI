import axios from "axios";

const url = 'https://koreanjson.com/comments'

// getComments reponse
// [
//     {
//     id: 1,
//     content: "모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다...",
//     createdAt: "2019-02-24T16:17:51.000Z",
//     updatedAt: "2019-02-24T16:17:51.000Z",
//     UserId: 1,
//     PostId: 101,
//     User: {
//     name: "이정도",
//     username: "jd1386",
//     email: "lee.jungdo@gmail.com",
//     },
//     Post: {
//     id: 101,
//     title: "형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.",
//     content: "교육은 무상으로 한다. ...",
//     createdAt: "2019-02-24T16:17:49.000Z",
//     updatedAt: "2019-02-24T16:17:49.000Z",
//     UserId: 6,
//     },
//     },
// ]
export const getComments = async(req, res) => {
    const datas = await axios.get(url);
    const getDatas = datas.data;

    try {
        res.status(200).json(getDatas);
    } catch (error) {
        console.log(error.message);
    }
}