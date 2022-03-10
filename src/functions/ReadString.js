/* === Read String from Binary ==== */
module.exports = reader => {
  const length = reader.ReadUInt16()
  const bytes = reader.ReadBytes(length)
  return bytes.toString()
}
