const courses = [{ name: "name" }, { name: "name" }]

export default (req, res) => {
  res.statusCode = 200
  res.json(courses)
}
