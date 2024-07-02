import Post from "./Post"

const Feed = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-12 flex-col">
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed