/* === SingleOrDefault Function from C# ==== */
module.exports = (arr, filter) => {
  let result = -1; let found = 0

  for (let i = 0; i < arr.length; i++) {
    if (filter(arr[i], i, arr)) {
      if (result === -1) { result = i }
      found++
    }
  }

  return found === 1 ? result : null
}
