async function fetchUserData(id) {
  const res = await fetch('/api/users/' + id)
  const data = await res.json()
  return data.user
}
