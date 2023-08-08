import { useSelector } from "react-redux"

const Comment = () => {
  const comments = useSelector(state => state.comments.comments)
  return (
    <div >
      {comments && <p>{comments[0].body}</p>}
    </div>
  )
}

export default Comment