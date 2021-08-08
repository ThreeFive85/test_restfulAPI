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

// user
export const getUser = async(req, res) => {
    const { id } = req.params;
    const getData = await axios.get(url+`/${id}`);
    const user = getData.data;
    try {
        if(!user) res.status(400).json({success: false, data: '해당 유저가 존재하지 않습니다.'})
        res.status(200).json({success: true, data: user});
    } catch (error) {
        console.log(error.message);
    }
}

// getUsersTotalPosts response
// [
//     {
//         "name": "user1",
//         "totalPosts": 10
//     }
// ]
export const getUsersTotalPosts = async(req, res) => {
    const getUsersData = await axios.get(url);
    const users = getUsersData.data;
    const getPostsData = await axios.get('https://koreanjson.com/posts');
    const posts = getPostsData.data;
    let result = [];
    // console.log(users)

    try {
        users.forEach(user => {
            const postCnt = posts.filter(post => post.UserId === user.id).length;
            // console.log(postCnt)
            let data = {
                name: user.name,
                totalPosts: postCnt
            };
            result.push(data);
        })
        res.status(200).json({success: true, data: result});
    } catch (error) {
        console.log(error.message);
    }
}