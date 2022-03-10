module.exports = reader => {
  const byte = reader.ReadBytes(2)
  return byte.toString().split('\x00')[0]
}
