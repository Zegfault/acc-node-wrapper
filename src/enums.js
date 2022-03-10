class DriverCategory {
  constructor () {
    this['3'] = 'Platinum'
    this['3'] = 'Platinum'
    this['2'] = 'Gold'
    this['1'] = 'Silver'
    this['0'] = 'Bronze'
    this['255'] = 'Error'
  }
}

class CupCategory {
  constructor () {
    this['0'] = 'Overall/Pro'
    this['1'] = 'ProAm'
    this['2'] = 'Am'
    this['3'] = 'Silver'
    this['4'] = 'National'
  }
}

class LapType {
  constructor () {
    this['0'] = 'Error'
    this['1'] = 'Outlap'
    this['2'] = 'Regular'
    this['3'] = 'Inlap'
  }
}

class CarLocationEnum {
  constructor () {
    this[0] = 'None'
    this[1] = 'Track'
    this[2] = 'Pitlane'
    this[3] = 'PitEntry'
    this[4] = 'PitExit'
  }
}

class SessionPhase {
  constructor () {
    this['0'] = 'None'
    this['1'] = 'Starting'
    this['2'] = 'PreFormation'
    this['3'] = 'FormationLap'
    this['4'] = 'PreSession'
    this['5'] = 'Session'
    this['6'] = 'SessionOver'
    this['7'] = 'PostSession'
    this['8'] = 'ResultUI'
  }
}

class RaceSessionType {
  constructor () {
    this['0'] = 'Practice'
    this['4'] = 'Qualifying'
    this['9'] = 'Superpole'
    this['10'] = 'Race'
    this['11'] = 'Hotlap'
    this['12'] = 'Hotstint'
    this['13'] = 'HotlapSuperpole'
    this['14'] = 'Replay'
  }
}

class BroadcastingCarEventType {
  constructor () {
    this['0'] = 'None'
    this['1'] = 'GreenFlag'
    this['2'] = 'SessionOver'
    this['3'] = 'PenaltyCommMsg'
    this['4'] = 'Accident'
    this['5'] = 'LapCompleted'
    this['6'] = 'BestSessionLap'
    this['7'] = 'BestPersonalLap'
  }
}

class NationalityEnum {
  constructor () {
    this['0'] = 'Any'
    this['1'] = 'Italy'
    this['2'] = 'Germany'
    this['3'] = 'France'
    this['4'] = 'Spain'
    this['5'] = 'GreatBritain'
    this['6'] = 'Hungary'
    this['7'] = 'Belgium'
    this['8'] = 'Switzerland'
    this['9'] = 'Austria'
    this['10'] = 'Russia'
    this['11'] = 'Thailand'
    this['12'] = 'Netherlands'
    this['13'] = 'Poland'
    this['14'] = 'Argentina'
    this['15'] = 'Monaco'
    this['16'] = 'Ireland'
    this['17'] = 'Brazil'
    this['18'] = 'SouthAfrica'
    this['19'] = 'PuertoRico'
    this['20'] = 'Slovakia'
    this['21'] = 'Oman'
    this['22'] = 'Greece'
    this['23'] = 'SaudiArabia'
    this['24'] = 'Norway'
    this['25'] = 'Turkey'
    this['26'] = 'SouthKorea'
    this['27'] = 'Lebanon'
    this['28'] = 'Armenia'
    this['29'] = 'Mexico'
    this['30'] = 'Sweden'
    this['31'] = 'Finland'
    this['32'] = 'Denmark'
    this['33'] = 'Croatia'
    this['34'] = 'Canada'
    this['35'] = 'China'
    this['36'] = 'Portugal'
    this['37'] = 'Singapore'
    this['38'] = 'Indonesia'
    this['39'] = 'USA'
    this['40'] = 'NewZealand'
    this['41'] = 'Australia'
    this['42'] = 'SanMarino'
    this['43'] = 'UAE'
    this['44'] = 'Luxembourg'
    this['45'] = 'Kuwait'
    this['46'] = 'HongKong'
    this['47'] = 'Colombia'
    this['48'] = 'Japan'
    this['49'] = 'Andorra'
    this['50'] = 'Azerbaijan'
    this['51'] = 'Bulgaria'
    this['52'] = 'Cuba'
    this['53'] = 'CzechRepublic'
    this['54'] = 'Estonia'
    this['55'] = 'Georgia'
    this['56'] = 'India'
    this['57'] = 'Israel'
    this['58'] = 'Jamaica'
    this['59'] = 'Latvia'
    this['60'] = 'Lithuania'
    this['61'] = 'Macau'
    this['62'] = 'Malaysia'
    this['63'] = 'Nepal'
    this['64'] = 'NewCaledonia'
    this['65'] = 'Nigeria'
    this['66'] = 'NorthernIreland'
    this['67'] = 'PapuaNewGuinea'
    this['68'] = 'Philippines'
    this['69'] = 'Qatar'
    this['70'] = 'Romania'
    this['71'] = 'Scotland'
    this['72'] = 'Serbia'
    this['73'] = 'Slovenia'
    this['74'] = 'Taiwan'
    this['75'] = 'Ukraine'
    this['76'] = 'Venezuela'
    this['77'] = 'Wales'
    this['78'] = 'Iran'
    this['79'] = 'Bahrain'
    this['80'] = 'Zimbabwe'
    this['81'] = 'ChineseTaipei'
    this['82'] = 'Chile'
    this['83'] = 'Uruguay'
    this['84'] = 'Madagascar'
  }
}

class ACC_STATUS {
  constructor () {
    this['0'] = 'AC_OFF'
    this['1'] = 'AC_REPLAY'
    this['2'] = 'AC_LIVE'
    this['3'] = 'AC_PAUSE'
  }
}

class ACC_SESSION_TYPE {
  constructor () {
    this['-1'] = 'AC_UNKNOWN'
    this['0'] = 'AC_PRACTICE'
    this['1'] = 'AC_QUALIFY'
    this['2'] = 'AC_RACE'
    this['3'] = 'AC_HOTLAP'
    this['4'] = 'AC_TIME_ATTACK'
    this['5'] = 'AC_DRIFT'
    this['6'] = 'AC_DRAG'
    this['7'] = 'AC_HOTSTINT'
    this['8'] = 'AC_HOTLAPSUPERPOLE'
  }
}

class ACC_FLAG_TYPE {
  constructor () {
    this['0'] = 'AC_NO_FLAG'
    this['1'] = 'AC_BLUE_FLAG'
    this['2'] = 'AC_YELLOW_FLAG'
    this['3'] = 'AC_BLACK_FLAG'
    this['4'] = 'AC_WHITE_FLAG'
    this['5'] = 'AC_CHECKERED_FLAG'
    this['6'] = 'AC_PENALTY_FLAG'
    this['7'] = 'ACC_GREEN_FLAG'
    this['8'] = 'ACC_ORANGE_FLAG'
  }
}

class ACC_PENALTY_TYPE {
  constructor () {
    this['0'] = 'None'
    this['1'] = 'DriveThrough_Cutting'
    this['2'] = 'StopAndGo_10_Cutting'
    this['3'] = 'StopAndGo_20_Cutting'
    this['4'] = 'StopAndGo_30_Cutting'
    this['5'] = 'Disqualified_Cutting'
    this['6'] = 'RemoveBestLaptime_Cutting'

    this['7'] = 'DriveThrough_PitSpeeding'
    this['8'] = 'StopAndGo_10_PitSpeeding'
    this['9'] = 'StopAndGo_20_PitSpeeding'
    this['10'] = 'StopAndGo_30_PitSpeeding'
    this['11'] = 'Disqualified_PitSpeeding'
    this['12'] = 'RemoveBestLaptime_PitSpeeding'

    this['13'] = 'Disqualified_IgnoredMandatoryPit'

    this['14'] = 'PostRaceTime'
    this['15'] = 'Disqualified_Trolling'
    this['16'] = 'Disqualified_PitEntry'
    this['17'] = 'Disqualified_PitExit'
    this['18'] = 'Disqualified_WrongWay'

    this['19'] = 'DriveThrough_IgnoredDriverStint'
    this['20'] = 'Disqualified_IgnoredDriverStint'

    this['21'] = 'Disqualified_ExceededDriverStintLimit'
  }
}

class ACC_TRACK_GRIP_STATUS {
  constructor () {
    this['0'] = 'ACC_GREEN'
    this['1'] = 'ACC_FAST'
    this['2'] = 'ACC_OPTIMUM'
    this['3'] = 'ACC_GREASY'
    this['4'] = 'ACC_DAMP'
    this['5'] = 'ACC_WET'
    this['6'] = 'ACC_FLOODED'
  }
}

class ACC_RAIN_INTENSITY {
  constructor () {
    this['0'] = 'ACC_NO_RAIN'
    this['1'] = 'ACC_DRIZZLE'
    this['2'] = 'ACC_LIGHT_RAIN'
    this['3'] = 'ACC_MEDIUM_RAIN'
    this['4'] = 'ACC_HEAVY_RAIN'
    this['5'] = 'ACC_THUNDERSTORM'
  }
}

class ACC_WHEELS_TYPE {
  constructor () {
    this['0'] = 'ACC_FrontLeft'
    this['1'] = 'ACC_FrontRight'
    this['2'] = 'ACC_RearLeft'
    this['3'] = 'ACC_RearRight'
  }
}

module.exports = {
  DriverCategory,
  CupCategory,
  LapType,
  CarLocationEnum,
  SessionPhase,
  RaceSessionType,
  BroadcastingCarEventType,
  NationalityEnum,
  ACC_STATUS,
  ACC_SESSION_TYPE,
  ACC_FLAG_TYPE,
  ACC_PENALTY_TYPE,
  ACC_TRACK_GRIP_STATUS,
  ACC_RAIN_INTENSITY,
  ACC_WHEELS_TYPE
}
