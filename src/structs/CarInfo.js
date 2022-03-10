/* ==== CarInfo Class ==== */
class CarInfo {
  constructor (CarIndex) {
    this.CarIndex = CarIndex
    this.CarModelType = null
    this.TeamName = ''
    this.RaceNumber = 0
    this.CupCategory = null
    this.CurrentDriverIndex = 0
    this.Drivers = []
    this.Nationality = 0
  }

  getCurrentDriver () {
    if (this.CurrentDriverIndex < this.Drivers.length) { return this.Drivers[this.CurrentDriverIndex].LastName }
    return 'nobody(?)'
  }
}

module.exports = CarInfo
