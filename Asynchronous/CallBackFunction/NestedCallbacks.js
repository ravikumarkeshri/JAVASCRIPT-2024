//Nested Timeout Functions----

// const task1 = (callback) => {
//     setTimeout(()=>{
//         console.log("Task1 Completed")
//         callback();
//     },3000)
// }
//  const task2 = (callback)=>{
//     setTimeout(()=>{
//         console.log("Task 2 Completed")
//         callback();
//     },2000)
//  }
//  const task3 = (callback) =>{
//     setTimeout(()=>{
//         console.log("Task 3 Completed");
//         callback();
//     },1000)
//  }

// // task1(()=>{
// //     console.log("Callback Called...")
// // })
// task1 (function(){
//     //Once the task one is completed start the second
//     task2(function(){
//         //Once the task second is completed start the third
//         task3(function(){
//             console.log("All Tasks Completed..")
//         })
//     })
// })

const userData = {id:1, name:'Ravi Kumar'};
// console.log(userData)
const userPosts = [
    {id:101, content:"Post 1"},
    {id:102, content:"Post 2"}
]
const postCommnets = {
    101: ["commnet 1" , "comment 2"],
    102: ["comment 3" , "commnet 4"]
}

//fetch userData
 const fetchUserData = (userId, callback) =>{
    console.log("fetching User Data...")
    setTimeout(()=>{
        callback(userData)
    },1000)
 }
 //fetch userData
 const fetchUserPost = (userId, callback) =>{
    console.log("fetching User Posts...")
    setTimeout(()=>{
        callback(userPosts)
    },1000)
 }
 //fetch userData
 const fetchPostComment = (postId, callback) =>{ 
    console.log("fetching User Comments...")
    setTimeout(()=>{
        callback(postCommnets[postId || []])
    },1000)
 }

 fetchUserData(1,function(userData){
    console.log("User Data: ",userData)
    fetchUserPost(userData.id, function(userPosts){
        console.log("User Posts: ",userPosts)
        userPosts.forEach(function(post){
            console.log("Post", post)
            fetchPostComment(post.id, function(comment){
                console.log(comment)
            })
        })
    })

 })