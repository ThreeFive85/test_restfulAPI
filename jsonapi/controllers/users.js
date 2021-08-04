import axios from "axios";

const url = 'https://koreanjson.com/users'

// getUsers response
// [{
//     id: 1,
//     name: "이정도",
//     username: "jd1386",
//     email: "lee.jungdo@gmail.com",
//     phone: "010-3192-2910",
//     website: "https://leejungdo.com",
//     province: "경기도",
//     city: "성남시",
//     district: "분당구",
//     street: "대왕판교로 160",
//     zipcode: "13525",
//     createdAt: "2019-02-24T16:17:47.000Z",
//     updatedAt: "2019-02-24T16:17:47.000Z",
//     },]
export const getUsers = async(req, res) => {
    const getDatas = await axios.get(url);
    const datas = getDatas.data;
    try {
        res.status(200).json(datas);
    } catch (error) {
        console.log(error.message);
    }
}
