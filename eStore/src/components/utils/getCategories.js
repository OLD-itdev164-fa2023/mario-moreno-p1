const getCategories = edges => {
  const allCategories = {}

  edges.map(edge => {
    if (allCategories[edge.node.category]) {
      allCategories[edge.node.category] = allCategories[edge.node.category] + 1
    } else {
      allCategories[edge.node.category] = 1
    }
    return allCategories
  })
  const sortedCategories = Object.entries(allCategories).sort((a, b) => {
    const [categoryA] = a
    const [categoryB] = b

    return categoryA.localeCompare(categoryB)
  })
  return sortedCategories
}

export default getCategories
