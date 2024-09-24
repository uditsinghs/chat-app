import Message from "./Message"


function Messages() {
  return (
    <div className=" scrollbar-hide overflow-y-auto" style={{maxHeight:"calc(100vh - 20vh)"}}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    
    </div>
  )
}

export default Messages