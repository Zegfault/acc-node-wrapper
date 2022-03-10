/* === FirstOrDefault Function from C# ==== */
module.exports = (arr, filter) => {
  let result = null

  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i, arr)) { result = i }
  }

  return result
}
