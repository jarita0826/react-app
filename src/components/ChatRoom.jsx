function ChatRoom({ image, username, message }) {
  return (
    <div className="flex space-x-4 p-4">
      <img className="rounded-full h-16 w-16" src={image} alt="lorem" />
      <div className="text-sm">
        <h3 className="font-bold">{username}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default function Main() {
  const rooms = [
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    },
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    },
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    }
  ]
  return (
    <div className="divide-y">
      {rooms.map((room) => (
        <ChatRoom image={room.image} username={room.username} message={room.message} />
      ))}
    </div>
  )
}
