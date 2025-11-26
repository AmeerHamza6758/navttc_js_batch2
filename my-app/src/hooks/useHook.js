import { useState } from "react"

function useHook(){
const [post,setPosts]=useState([])
function handleGetPosts(){
    // 
}

    return {
        handleGetPosts,
        post
    }
}


export default useHook