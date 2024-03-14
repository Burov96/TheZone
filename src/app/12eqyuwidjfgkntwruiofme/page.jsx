
function page() {
  return (
    <div>
        nextpbse: {process.env.NEXT_PUBLIC_SECRET}
        autscr: {process.env.AUTH_SECRET}
        GITHUB_ID: {process.env.GITHUB_ID}
        tayna: {process.env.GITHUB_SECRET}
        MONGO: {process.env.MONGO}
        </div>
  )
}

export default page
