const courses = [{ id: 1, title: "Web dasturlash",   }, { name: "name" }]

export default (req, res) => {
  res.statusCode = 200
  res.json(courses)
}
