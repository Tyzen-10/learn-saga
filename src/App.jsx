import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { getPostsFetch,deletePost } from './actions'
import { useEffect, useRef, useState } from 'react';
import BarChart from './components/BarChart';

function App() {
  //ref to postId Input.
  const postInput = useRef()
  // const [postId,setPostId] = useState(0)
  const dispatch = useDispatch();
  const posts = useSelector(store=>store.myFirstReducer.posts)
  // console.log(posts)

  /*
  //use State
  const [chartData,setChartData] = useState({
    labels: ["0","0","0","0"],
    datasets: [
      {
        label: 'Posts',
        data: [1,2,3,4],
        backgroundColor:["orange","lightblue"]
        
      },
    ],
  })
  useEffect(()=>{
    setChartData((prevChartData)=>{return {...prevChartData,labels: ["q1","q2","q3","q4"],datasets: [
      {
        label: 'Posts',
        data: [300,250,323,40],
        backgroundColor:["orange","lightblue"]
        
      },
    ],}})
  },[])
  */
  //test to check filtering.

  /*
  const filteredPosts = posts.filter((post)=>post.id!==1)
  console.log("filteredPosts")
  console.log(filteredPosts)
  */

  // inital try with map and set,
  /*
  const labels = posts.map((user)=>{
    return user.userId
  })
  const mySet = new Set();
  labels.forEach(item=>mySet.add(item))
  */

  // Object which contains the data.
  const myObj = {}
  let count
  posts.forEach((item)=>{
    if(myObj[item.userId]===undefined){
      count=1
      myObj[item.userId] = count
    }
    else{
      count++
      myObj[item.userId] = count
    }
  })
  // console.log(myObj)

  // console.log(mySet)
  const deleteHandler = ()=>{
    const postId = postInput.current.value
    dispatch(deletePost(parseInt(postId)))
  }
  const labels = Object.keys(myObj)
  const data = Object.values(myObj)
  console.log(labels)
  console.log(data)
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Posts',
        data: data,
        backgroundColor:["orange","lightblue"]
        
      },
    ],
  }
  

  return (
    <div>
    <BarChart chartData={chartData}></BarChart>
    <div className='middle'>
    <div className='middle-left'>
    <h2>Fetch Posts</h2>
    <button onClick={()=>{dispatch(getPostsFetch())}}>Go Fetch Posts!</button>
    </div>
    <div className='middle-right'>
      <h2>Delete Post</h2>
    <div className='middle-right-sub'>
    <input type="text" ref={postInput} />
    <button onClick={deleteHandler}>Delete</button>
    </div>
    </div>
    </div>
      <div className='post-parent'><p>Posts:</p> {posts.map((user)=>{
        //return <p key={user.id}>{user.name}</p>
        return <p key={user.id} className='post-para'>{user.title}</p>
      })}</div>
      
      
    </div>
  )

}

export default App
