const VOLLEYBALL        = '1';
const SOFT_VOLLEYBALL   = '2';
const BASKETBALL        = '3';
const BADMINTON         = '4';
const TABLE_TENNIS      = '5';
const TENNIS            = '6';
const SOFT_TENNIS       = '7';
const YOGA              = '8';
const GIMNASTICS        = '9';
const FOLK_DANCE        = '10';
const BALLROOM_DANCE    = '11';
const AEROBICS          = '12';
const JAZZ_DANCE        = '13';
const BATON_TWIRLING    = '14';
const TAEKWONDO         = '15';
const JUDO              = '16';
const KARATE            = '17';
const AIKIDO            = '18';
const QIGONG            = '19';
const NAGINATA          = '20';
const KENPO             = '21';
const TAI_CHI           = '22';
const KENDO             = '23';
const IAIDO             = '24';
const BASEBALL          = '25';
const SOFT_BASEBALL     = '26';
const BOY_BASEBALL      = '27';
const BOY_SOFT_BASEBALL = '28';
const SOFTBALL          = '29';
const SOCCER            = '30';
const PRACTICE_SOCCER   = '31';
const BOY_SOCCER        = '32';
const FUTSAL            = '33';
const INDIACA           = '34';
const GATEBALL          = '35';
const SPORTS_DAY        = '36';
const MEETING           = '37';
const HANDBALL          = '38';
const DODGEBALL         = '39';
const RUGBY             = '40';
const LACROSSE          = '41';
const AMERICAN_FOOTBALL = '42';
const OTHERS            = '43';

export const CATEGORY_IDS_TABLE = {
  [VOLLEYBALL]       : { 'categoryId': 'i_record0', 'subCategoryId': 'i_record0' },
  [SOFT_VOLLEYBALL]  : { 'categoryId': 'i_record0', 'subCategoryId': 'i_record1' },
  [BASKETBALL]       : { 'categoryId': 'i_record1', 'subCategoryId': 'i_record0' },
  [BADMINTON]        : { 'categoryId': 'i_record2', 'subCategoryId': 'i_record0' },
  [TABLE_TENNIS]     : { 'categoryId': 'i_record3', 'subCategoryId': 'i_record0' },
  [TENNIS]           : { 'categoryId': 'i_record4', 'subCategoryId': 'i_record0' },
  [SOFT_TENNIS]      : { 'categoryId': 'i_record4', 'subCategoryId': 'i_record1' },
  [YOGA]             : { 'categoryId': 'i_record5', 'subCategoryId': 'i_record0' },
  [GIMNASTICS]       : { 'categoryId': 'i_record5', 'subCategoryId': 'i_record1' },
  [FOLK_DANCE]       : { 'categoryId': 'i_record6', 'subCategoryId': 'i_record0' },
  [BALLROOM_DANCE]   : { 'categoryId': 'i_record6', 'subCategoryId': 'i_record1' },
  [AEROBICS]         : { 'categoryId': 'i_record6', 'subCategoryId': 'i_record2' },
  [JAZZ_DANCE]       : { 'categoryId': 'i_record6', 'subCategoryId': 'i_record3' },
  [BATON_TWIRLING]   : { 'categoryId': 'i_record6', 'subCategoryId': 'i_record4' },
  [TAEKWONDO]        : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record0' },
  [JUDO]             : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record1' },
  [KARATE]           : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record2' },
  [AIKIDO]           : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record3' },
  [QIGONG]           : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record4' },
  [NAGINATA]         : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record5' },
  [KENPO]            : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record6' },
  [TAI_CHI]          : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record7' },
  [KENDO]            : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record8' },
  [IAIDO]            : { 'categoryId': 'i_record7', 'subCategoryId': 'i_record9' },
  [BASEBALL]         : { 'categoryId': 'i_record8', 'subCategoryId': 'i_record0' },
  [SOFT_BASEBALL]    : { 'categoryId': 'i_record8', 'subCategoryId': 'i_record1' },
  [BOY_BASEBALL]     : { 'categoryId': 'i_record8', 'subCategoryId': 'i_record2' },
  [BOY_SOFT_BASEBALL]: { 'categoryId': 'i_record8', 'subCategoryId': 'i_record3' },
  [SOFTBALL]         : { 'categoryId': 'i_record8', 'subCategoryId': 'i_record4' },
  [SOCCER]           : { 'categoryId': 'i_record9', 'subCategoryId': 'i_record0' },
  [PRACTICE_SOCCER]  : { 'categoryId': 'i_record9', 'subCategoryId': 'i_record1' },
  [BOY_SOCCER]       : { 'categoryId': 'i_record9', 'subCategoryId': 'i_record2' },
  [FUTSAL]           : { 'categoryId': 'i_record9', 'subCategoryId': 'i_record3' },
  [INDIACA]          : { 'categoryId': 'i_record10', 'subCategoryId': 'i_record0' },
  [GATEBALL]         : { 'categoryId': 'i_record10', 'subCategoryId': 'i_record1' },
  [SPORTS_DAY]       : { 'categoryId': 'i_record11', 'subCategoryId': 'i_record0' },
  [MEETING]          : { 'categoryId': 'i_record12', 'subCategoryId': 'i_record0' },
  [HANDBALL]         : { 'categoryId': 'i_record13', 'subCategoryId': 'i_record0' },
  [DODGEBALL]        : { 'categoryId': 'i_record13', 'subCategoryId': 'i_record1' },
  [RUGBY]            : { 'categoryId': 'i_record13', 'subCategoryId': 'i_record2' },
  [LACROSSE]         : { 'categoryId': 'i_record13', 'subCategoryId': 'i_record3' },
  [AMERICAN_FOOTBALL]: { 'categoryId': 'i_record13', 'subCategoryId': 'i_record4' },
  [OTHERS]           : { 'categoryId': 'i_record14', 'subCategoryId': 'i_record0' },
}

export const FACILITIES_TABLE = {
  [VOLLEYBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
    '9': ['i_record9'],
    '10': ['i_record10', 'i_record11'],
    '11': ['i_record12', 'i_record13'],
    '12': ['i_record14', 'i_record15'],
    '13': ['i_record16', 'i_record17'],
    '14': ['i_record18'],
    '15': ['i_record19', 'i_record20'],
    '16': ['i_record21', 'i_record22'],
    '17': ['i_record23', 'i_record24'],
    '18': ['i_record25'],
    '19': ['i_record26'],
    '20': ['i_record27', 'i_record28'],
    '21': ['i_record29'],
    '22': ['i_record30'],
    '23': ['i_record31'],
    '24': ['i_record32'],
    '25': ['i_record33', 'i_record34'],
    '26': ['i_record35'],
    '27': ['i_record36', 'i_record37'],
    '28': ['i_record38'],
  },
  [SOFT_VOLLEYBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4'],
    '6': ['i_record5'],
    '7': ['i_record6', 'i_record7'],
    '8': ['i_record8', 'i_record9'],
    '9': ['i_record10'],
    '10': ['i_record11', 'i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14', 'i_record15'],
    '13': ['i_record16'],
    '14': ['i_record17', 'i_record18'],
    '15': ['i_record19'],
    '16': ['i_record20'],
    '17': ['i_record21'],
    '18': ['i_record22'],
    '19': ['i_record23'],
    '20': ['i_record24'],
    '21': ['i_record25'],
    '22': ['i_record26'],
    '23': ['i_record27'],
    '24': ['i_record28'],
  },
  [BASKETBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4'],
    '6': ['i_record5'],
    '7': ['i_record6'],
    '8': ['i_record7'],
    '9': ['i_record8'],
    '10': ['i_record9'],
    '11': ['i_record10'],
    '12': ['i_record11'],
    '13': ['i_record12'],
    '14': ['i_record13'],
    '15': ['i_record14'],
    '16': ['i_record15'],
    '17': ['i_record16'],
    '18': ['i_record17'],
    '19': ['i_record18'],
    '20': ['i_record19'],
    '21': ['i_record20'],
    '22': ['i_record21'],
    '23': ['i_record22'],
    '24': ['i_record23'],
    '25': ['i_record24'],
    '26': ['i_record25'],
    '27': ['i_record26'],
    '28': ['i_record27'],
  },
  [BADMINTON]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
    '9': ['i_record9'],
    '10': ['i_record10', 'i_record11'],
    '11': ['i_record12', 'i_record13'],
    '12': ['i_record14', 'i_record15'],
    '13': ['i_record16', 'i_record17'],
    '14': ['i_record18'],
    '15': ['i_record19', 'i_record20'],
    '16': ['i_record21'],
    '17': ['i_record22', 'i_record23'],
    '18': ['i_record24'],
    '19': ['i_record25'],
    '20': ['i_record26', 'i_record27'],
    '21': ['i_record28'],
    '22': ['i_record29'],
    '23': ['i_record30'],
    '24': ['i_record31'],
    '25': ['i_record32'],
    '26': ['i_record33'],
    '27': ['i_record34', 'i_record35'],
    '28': ['i_record36'],
  },
  [TABLE_TENNIS]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5'],
    '6': ['i_record6', 'i_record7'],
    '7': ['i_record8'],
    '8': ['i_record9', 'i_record10'],
    '9': ['i_record11'],
    '10': ['i_record12', 'i_record13'],
    '11': ['i_record14', 'i_record15'],
    '12': ['i_record16', 'i_record17'],
    '13': ['i_record18', 'i_record19'],
    '14': ['i_record20', 'i_record21'],
    '15': ['i_record22'],
    '16': ['i_record23', 'i_record24'],
    '17': ['i_record25', 'i_record26'],
    '18': ['i_record27', 'i_record28'],
    '19': ['i_record29', 'i_record30'],
    '20': ['i_record31', 'i_record32'],
    '21': ['i_record33', 'i_record34'],
    '22': ['i_record35', 'i_record36'],
    '23': ['i_record37'],
    '24': ['i_record38'],
    '25': ['i_record39'],
    '26': ['i_record40', 'i_record41'],
    '27': ['i_record42', 'i_record43'],
    '28': ['i_record44', 'i_record45'],
    '29': ['i_record46'],
  },
  [TENNIS]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5'],
    '6': ['i_record6', 'i_record7', 'i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10'],
    '9': ['i_record11'],
    '10': ['i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14'],
    '13': ['i_record15'],
    '14': ['i_record16'],
    '15': ['i_record17'],
    '16': ['i_record18'],
    '17': ['i_record19'],
    '18': ['i_record20'],
    '19': ['i_record21'],
    '20': ['i_record22'],
    '21': ['i_record23'],
    '22': ['i_record24'],
    '23': ['i_record25'],
    '24': ['i_record26'],
    '25': ['i_record27'],
    '26': ['i_record28'],
    '27': ['i_record29'],
    '28': ['i_record30'],
    '29': ['i_record31', 'i_record32', 'i_record33', 'i_record34', 'i_record35'],
    '30': ['i_record36', 'i_record37', 'i_record38', 'i_record39', 'i_record40', 'i_record41'],
    '31': ['i_record42', 'i_record43', 'i_record44', 'i_record45'],
    '32': ['i_record46', 'i_record47', 'i_record48', 'i_record49', 'i_record50', 'i_record51'],
    '33': ['i_record52', 'i_record53'],
  },
  [SOFT_TENNIS]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5'],
    '6': ['i_record6', 'i_record7', 'i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10'],
    '9': ['i_record11'],
    '10': ['i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14'],
    '13': ['i_record15'],
    '14': ['i_record16'],
    '15': ['i_record17'],
    '16': ['i_record18'],
    '17': ['i_record19'],
    '18': ['i_record20'],
    '19': ['i_record21'],
    '20': ['i_record22'],
    '21': ['i_record23'],
    '22': ['i_record24'],
    '23': ['i_record25'],
    '24': ['i_record26'],
    '25': ['i_record27'],
    '26': ['i_record28'],
    '27': ['i_record29'],
    '28': ['i_record30'],
    '29': ['i_record31'],
    '30': ['i_record32'],
    '31': ['i_record33', 'i_record34', 'i_record35', 'i_record36', 'i_record37'],
    '32': ['i_record38', 'i_record39', 'i_record40', 'i_record41', 'i_record42', 'i_record43'],
    '33': ['i_record44', 'i_record45', 'i_record46', 'i_record47'],
    '34': ['i_record48', 'i_record49', 'i_record50', 'i_record51', 'i_record52', 'i_record53'],
    '35': ['i_record54', 'i_record55'],
  },
  [YOGA]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4'],
    '5': ['i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
    '9': ['i_record9'],
    '10': ['i_record10'],
    '11': ['i_record11', 'i_record12'],
    '12': ['i_record13'],
    '13': ['i_record14'],
    '14': ['i_record15'],
    '15': ['i_record16'],
    '16': ['i_record17'],
    '17': ['i_record18'],
    '18': ['i_record19'],
    '19': ['i_record20', 'i_record21', 'i_record22'],
    '20': ['i_record23'],
    '21': ['i_record24'],
    '22': ['i_record25'],
    '23': ['i_record26'],
    '24': ['i_record27'],
    '25': ['i_record28'],
  },
  [GIMNASTICS]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4', 'i_record5', 'i_record6'],
    '5': ['i_record7'],
    '6': ['i_record8', 'i_record9'],
    '7': ['i_record10'],
    '8': ['i_record11', 'i_record12'],
    '9': ['i_record13'],
    '10': ['i_record14', 'i_record15'],
    '11': ['i_record16', 'i_record17'],
    '12': ['i_record18', 'i_record19', 'i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22', 'i_record23'],
    '15': ['i_record24', 'i_record25'],
    '16': ['i_record26', 'i_record27'],
    '17': ['i_record28'],
    '18': ['i_record29', 'i_record30', 'i_record31'],
    '19': ['i_record32', 'i_record33'],
    '20': ['i_record34', 'i_record35'],
    '21': ['i_record36', 'i_record37', 'i_record38', 'i_record39'],
    '22': ['i_record40'],
    '23': ['i_record41', 'i_record42'],
    '24': ['i_record43', 'i_record44'],
    '25': ['i_record45'],
    '26': ['i_record46', 'i_record47'],
  },
  [FOLK_DANCE]: {
    '1': ['i_record0'],
    '2': ['i_record1', 'i_record2'],
    '3': ['i_record3'],
    '4': ['i_record4', 'i_record5'],
    '5': ['i_record6'],
    '6': ['i_record7'],
    '7': ['i_record8', 'i_record9'],
    '8': ['i_record10'],
    '9': ['i_record11', 'i_record12'],
    '10': ['i_record13'],
    '11': ['i_record14'],
    '12': ['i_record15'],
    '13': ['i_record16', 'i_record17'],
    '14': ['i_record18'],
    '15': ['i_record19', 'i_record20', 'i_record21', 'i_record22'],
    '16': ['i_record23'],
    '17': ['i_record24', 'i_record25'],
    '18': ['i_record26'],
    '19': ['i_record27'],
  },
  [BALLROOM_DANCE]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4', 'i_record5'],
    '5': ['i_record6', 'i_record7'],
    '6': ['i_record8'],
    '7': ['i_record9', 'i_record10'],
    '8': ['i_record11', 'i_record12'],
    '9': ['i_record13', 'i_record14'],
    '10': ['i_record15', 'i_record16'],
    '11': ['i_record17', 'i_record18', 'i_record19'],
    '12': ['i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22'],
    '15': ['i_record23'],
    '16': ['i_record24'],
    '17': ['i_record25'],
    '18': ['i_record26', 'i_record27'],
    '19': ['i_record28'],
    '20': ['i_record29', 'i_record30', 'i_record31', 'i_record32'],
    '21': ['i_record33'],
    '22': ['i_record34'],
    '23': ['i_record35'],
    '24': ['i_record36'],
    '25': ['i_record37', 'i_record38'],
  },
  [AEROBICS]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4', 'i_record5'],
    '5': ['i_record6'],
    '6': ['i_record7', 'i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10', 'i_record11'],
    '9': ['i_record12', 'i_record13'],
    '10': ['i_record14', 'i_record15'],
    '11': ['i_record16', 'i_record17'],
    '12': ['i_record18', 'i_record19', 'i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22', 'i_record23'],
    '15': ['i_record24'],
    '16': ['i_record25'],
    '17': ['i_record26'],
    '18': ['i_record27', 'i_record28'],
    '19': ['i_record29'],
    '20': ['i_record30', 'i_record31', 'i_record32', 'i_record33'],
    '21': ['i_record34'],
    '22': ['i_record35'],
    '23': ['i_record36'],
    '24': ['i_record37'],
    '25': ['i_record38'],
  },
  [JAZZ_DANCE]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4', 'i_record5'],
    '5': ['i_record6'],
    '6': ['i_record7', 'i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10', 'i_record11'],
    '9': ['i_record12', 'i_record13'],
    '10': ['i_record14', 'i_record15'],
    '11': ['i_record16', 'i_record17'],
    '12': ['i_record18', 'i_record19', 'i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22'],
    '15': ['i_record23', 'i_record24'],
    '16': ['i_record25'],
    '17': ['i_record26'],
    '18': ['i_record27', 'i_record28'],
    '19': ['i_record29', 'i_record30'],
    '20': ['i_record31'],
    '21': ['i_record32', 'i_record33', 'i_record34', 'i_record35'],
    '22': ['i_record36'],
    '23': ['i_record37'],
    '24': ['i_record38'],
    '25': ['i_record39'],
    '26': ['i_record40', 'i_record41'],
  },
  [BATON_TWIRLING]: {
    '1': ['i_record0'],
    '2': ['i_record1', 'i_record2'],
    '3': ['i_record3'],
    '4': ['i_record4'],
    '5': ['i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
    '9': ['i_record9'],
    '10': ['i_record10'],
    '11': ['i_record11'],
    '12': ['i_record12'],
    '13': ['i_record13'],
    '14': ['i_record14'],
    '15': ['i_record15'],
  },
  [TAEKWONDO]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3', 'i_record4'],
    '5': ['i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
    '9': ['i_record9', 'i_record10', 'i_record11'],
    '10': ['i_record12', 'i_record13'],
    '11': ['i_record14'],
    '12': ['i_record15'],
  },
  [JUDO]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4'],
    '6': ['i_record5'],
    '7': ['i_record6'],
    '8': ['i_record7'],
    '9': ['i_record8'],
    '10': ['i_record9'],
    '11': ['i_record10'],
    '12': ['i_record11'],
    '13': ['i_record12'],
    '14': ['i_record13'],
    '15': ['i_record14'],
    '16': ['i_record15'],
    '17': ['i_record16'],
    '18': ['i_record17'],
    '19': ['i_record18'],
    '20': ['i_record19'],
    '21': ['i_record20'],
  },
  [KARATE]: {
    '1': ['i_record0', 'i_record1', 'i_record2'],
    '2': ['i_record3', 'i_record4'],
    '3': ['i_record5'],
    '4': ['i_record6'],
    '5': ['i_record7', 'i_record8'],
    '6': ['i_record9', 'i_record10'],
    '7': ['i_record11'],
    '8': ['i_record12', 'i_record13'],
    '9': ['i_record14'],
    '10': ['i_record15', 'i_record16'],
    '11': ['i_record17', 'i_record18'],
    '12': ['i_record19', 'i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22'],
    '15': ['i_record23', 'i_record24'],
    '16': ['i_record25'],
    '17': ['i_record26'],
    '18': ['i_record27', 'i_record28'],
    '19': ['i_record29', 'i_record30'],
    '20': ['i_record31', 'i_record32'],
    '21': ['i_record33', 'i_record34', 'i_record35', 'i_record36'],
    '22': ['i_record37'],
    '23': ['i_record38'],
    '24': ['i_record39', 'i_record40'],
    '25': ['i_record41'],
    '26': ['i_record42', 'i_record43'],
    '27': ['i_record44'],
  },
  [AIKIDO]: {
    '1': ['i_record0', 'i_record1', 'i_record2'],
    '2': ['i_record3'],
    '3': ['i_record4'],
    '4': ['i_record5', 'i_record6'],
    '5': ['i_record7'],
    '6': ['i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10'],
    '9': ['i_record11'],
    '10': ['i_record12', 'i_record13'],
    '11': ['i_record14'],
    '12': ['i_record15'],
    '13': ['i_record16'],
    '14': ['i_record17'],
  },
  [QIGONG]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2', 'i_record3'],
    '4': ['i_record4'],
    '5': ['i_record5'],
    '6': ['i_record6', 'i_record7'],
    '7': ['i_record8'],
    '8': ['i_record9'],
    '9': ['i_record10'],
    '10': ['i_record11', 'i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14'],
    '13': ['i_record15'],
    '14': ['i_record16'],
    '15': ['i_record17'],
    '16': ['i_record18'],
    '17': ['i_record19', 'i_record20', 'i_record21'],
    '18': ['i_record22'],
    '19': ['i_record23'],
    '20': ['i_record24'],
    '21': ['i_record25'],
    '22': ['i_record26'],
    '23': ['i_record27'],
  },
  [NAGINATA]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2', 'i_record3'],
    '3': ['i_record4'],
    '4': ['i_record5'],
    '5': ['i_record6', 'i_record7'],
    '6': ['i_record8'],
    '7': ['i_record9'],
    '8': ['i_record10'],
    '9': ['i_record11'],
    '10': ['i_record12'],
  },
  [KENPO]: {
    '1': ['i_record0', 'i_record1', 'i_record2'],
    '2': ['i_record3', 'i_record4'],
    '3': ['i_record5'],
    '4': ['i_record6'],
    '5': ['i_record7', 'i_record8'],
    '6': ['i_record9', 'i_record10'],
    '7': ['i_record11'],
    '8': ['i_record12', 'i_record13'],
    '9': ['i_record14'],
    '10': ['i_record15', 'i_record16'],
    '11': ['i_record17', 'i_record18'],
    '12': ['i_record19', 'i_record20'],
    '13': ['i_record21'],
    '14': ['i_record22'],
    '15': ['i_record23', 'i_record24'],
    '16': ['i_record25'],
    '17': ['i_record26'],
    '18': ['i_record27'],
    '19': ['i_record28', 'i_record29'],
    '20': ['i_record30', 'i_record31'],
    '21': ['i_record32', 'i_record33', 'i_record34', 'i_record35'],
    '22': ['i_record36'],
    '23': ['i_record37'],
    '24': ['i_record38', 'i_record39'],
    '25': ['i_record40'],
    '26': ['i_record41', 'i_record42'],
    '27': ['i_record43'],
  },
  [TAI_CHI]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2'],
    '3': ['i_record3', 'i_record4'],
    '4': ['i_record5', 'i_record6'],
    '5': ['i_record7'],
    '6': ['i_record8', 'i_record9'],
    '7': ['i_record10'],
    '8': ['i_record11', 'i_record12'],
    '9': ['i_record13', 'i_record14'],
    '10': ['i_record15', 'i_record16'],
    '11': ['i_record17', 'i_record18'],
    '12': ['i_record19', 'i_record20', 'i_record21'],
    '13': ['i_record22'],
    '14': ['i_record23', 'i_record24'],
    '15': ['i_record25', 'i_record26'],
    '16': ['i_record27', 'i_record28'],
    '17': ['i_record29'],
    '18': ['i_record30', 'i_record31'],
    '19': ['i_record32', 'i_record33'],
    '20': ['i_record34', 'i_record35'],
    '21': ['i_record36', 'i_record37', 'i_record38', 'i_record39'],
    '22': ['i_record40'],
    '23': ['i_record41', 'i_record42'],
    '24': ['i_record43', 'i_record44'],
    '25': ['i_record45'],
    '26': ['i_record46', 'i_record47'],
    '27': ['i_record48'],
  },
  [KENDO]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2', 'i_record3'],
    '3': ['i_record4'],
    '4': ['i_record5'],
    '5': ['i_record6'],
    '6': ['i_record7'],
    '7': ['i_record8'],
    '8': ['i_record9'],
    '9': ['i_record10'],
    '10': ['i_record11'],
    '11': ['i_record12'],
    '12': ['i_record13'],
    '13': ['i_record14'],
    '14': ['i_record15'],
    '15': ['i_record16'],
    '16': ['i_record17'],
    '17': ['i_record18'],
    '18': ['i_record19'],
    '19': ['i_record20'],
    '20': ['i_record21'],
    '21': ['i_record22'],
    '22': ['i_record23'],
    '23': ['i_record24'],
    '24': ['i_record25'],
    '25': ['i_record26'],
    '26': ['i_record27'],
    '27': ['i_record28'],
    '28': ['i_record29'],
  },
  [IAIDO]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2'],
    '3': ['i_record3'],
    '4': ['i_record4', 'i_record5'],
    '5': ['i_record6'],
    '6': ['i_record7'],
    '7': ['i_record8'],
    '8': ['i_record9'],
    '9': ['i_record10'],
    '10': ['i_record11', 'i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14'],
    '13': ['i_record15'],
    '14': ['i_record16'],
    '15': ['i_record17'],
    '16': ['i_record18', 'i_record19'],
    '17': ['i_record20'],
    '18': ['i_record21'],
    '19': ['i_record22'],
    '20': ['i_record23'],
    '21': ['i_record24'],
    '22': ['i_record25', 'i_record26'],
    '23': ['i_record27'],
  },
  [BASEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
  },
  [SOFT_BASEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5', 'i_record6', 'i_record7', 'i_record30', 'i_record31', 'i_record32'],
    '6': ['i_record8', 'i_record9', 'i_record10', 'i_record16', 'i_record17'],
    '7': ['i_record11', 'i_record12', 'i_record13', 'i_record14', 'i_record15', 'i_record33'],
    '8': ['i_record18', 'i_record19', 'i_record20', 'i_record21'],
    '9': ['i_record22', 'i_record23', 'i_record24', 'i_record25'],
    '10': ['i_record26', 'i_record27', 'i_record28', 'i_record29'],
    '11': ['i_record34'],
    '12': ['i_record35'],
  },
  [BOY_BASEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1', 'i_record2'],
  },
  [BOY_SOFT_BASEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4', 'i_record5', 'i_record6', 'i_record7', 'i_record8', 'i_record9', 'i_record35', 'i_record36', 'i_record37'],
    '6': ['i_record10', 'i_record11', 'i_record12', 'i_record19', 'i_record20'],
    '7': ['i_record13', 'i_record14', 'i_record15', 'i_record16', 'i_record17', 'i_record18', 'i_record38'],
    '8': ['i_record21', 'i_record22', 'i_record23', 'i_record24', 'i_record25', 'i_record26'],
    '9': ['i_record27', 'i_record28', 'i_record29', 'i_record30'],
    '10': ['i_record31', 'i_record32', 'i_record33', 'i_record34'],
    '11': ['i_record39'],
    '12': ['i_record40'],
  },
  [SOFTBALL]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2'],
    '3': ['i_record3'],
    '4': ['i_record4'],
    '5': ['i_record5', 'i_record6', 'i_record7', 'i_record8', 'i_record9', 'i_record10', 'i_record37', 'i_record38', 'i_record39'],
    '6': ['i_record11', 'i_record12', 'i_record13', 'i_record14', 'i_record21', 'i_record22'],
    '7': ['i_record15', 'i_record16', 'i_record17', 'i_record18', 'i_record19', 'i_record20', 'i_record40'],
    '8': ['i_record23', 'i_record24', 'i_record25', 'i_record26', 'i_record27', 'i_record28'],
    '9': ['i_record29', 'i_record30', 'i_record31', 'i_record32'],
    '10': ['i_record33', 'i_record34', 'i_record35', 'i_record36'],
    '11': ['i_record41'],
    '12': ['i_record42'],
  },
  [SOCCER]: {
    '1': ['i_record0', 'i_record1', 'i_record2', 'i_record3'],
    '2': ['i_record4'],
  },
  [PRACTICE_SOCCER]: {
    '1': ['i_record0', 'i_record1', 'i_record2', 'i_record3', 'i_record4', 'i_record25'],
    '2': ['i_record5', 'i_record6', 'i_record7', 'i_record8', 'i_record15', 'i_record16'],
    '3': ['i_record9', 'i_record10', 'i_record11', 'i_record12', 'i_record13', 'i_record14'],
    '4': ['i_record17', 'i_record18', 'i_record19'],
    '5': ['i_record20', 'i_record21', 'i_record22'],
    '6': ['i_record23', 'i_record24'],
  },
  [BOY_SOCCER]: {
    '1': ['i_record0'],
  },
  [FUTSAL]: {
    '1': ['i_record0', 'i_record1'],
    '2': ['i_record2'],
    '3': ['i_record3'],
    '4': ['i_record4'],
    '5': ['i_record5'],
    '6': ['i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8'],
  },
  [INDIACA]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4'],
    '6': ['i_record5', 'i_record6'],
    '7': ['i_record7'],
    '8': ['i_record8', 'i_record9'],
    '9': ['i_record10'],
    '10': ['i_record11', 'i_record12'],
    '11': ['i_record13'],
    '12': ['i_record14', 'i_record15'],
    '13': ['i_record16'],
    '14': ['i_record17'],
    '15': ['i_record18'],
    '16': ['i_record19'],
    '17': ['i_record20'],
    '18': ['i_record21'],
    '19': ['i_record22'],
    '20': ['i_record23'],
    '21': ['i_record24'],
  },
  [GATEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3', 'i_record4', 'i_record5', 'i_record6', 'i_record7', 'i_record28', 'i_record29'],
    '5': ['i_record8', 'i_record9', 'i_record10', 'i_record11', 'i_record18', 'i_record19'],
    '6': ['i_record12', 'i_record13', 'i_record14', 'i_record15', 'i_record16', 'i_record17'],
    '7': ['i_record20', 'i_record21', 'i_record22'],
    '8': ['i_record23', 'i_record24', 'i_record25'],
    '9': ['i_record26', 'i_record27'],
  },
  [SPORTS_DAY]: {
    '1': ['i_record0', 'i_record1', 'i_record2'],
    '2': ['i_record3'],
    '3': ['i_record4'],
    '4': ['i_record5', 'i_record6', 'i_record7', 'i_record8', 'i_record9', 'i_record30', 'i_record31'],
    '5': ['i_record10', 'i_record11', 'i_record12', 'i_record13', 'i_record20', 'i_record21'],
    '6': ['i_record14', 'i_record15', 'i_record16', 'i_record17', 'i_record18', 'i_record19'],
    '7': ['i_record22', 'i_record23', 'i_record24'],
    '8': ['i_record25', 'i_record26', 'i_record27'],
    '9': ['i_record28', 'i_record29'],
  },
  [MEETING]: {
    '1': ['i_record0', 'i_record1', 'i_record2', 'i_record3'],
    '2': ['i_record4'],
    '3': ['i_record5', 'i_record6'],
  },
  [HANDBALL]: {
    '1': ['i_record0'],
  },
  [DODGEBALL]: {
    '1': ['i_record0'],
    '2': ['i_record1'],
    '3': ['i_record2'],
    '4': ['i_record3'],
    '5': ['i_record4'],
    '6': ['i_record5'],
    '7': ['i_record6'],
    '8': ['i_record7'],
    '9': ['i_record8'],
    '10': ['i_record9'],
    '11': ['i_record10'],
    '12': ['i_record11'],
    '13': ['i_record12'],
    '14': ['i_record13'],
    '15': ['i_record14'],
    '16': ['i_record15'],
    '17': ['i_record16'],
    '18': ['i_record17'],
    '19': ['i_record18'],
  },
  [RUGBY]: {
    '1': ['i_record0', 'i_record1', 'i_record2', 'i_record3'],
  },
  [LACROSSE]: {
    '1': ['i_record0', 'i_record1'],
  },
  [AMERICAN_FOOTBALL]: {
    '1': ['i_record0', 'i_record1'],
  },
  [OTHERS]: {
    '1': ['i_record0', 'i_record1', 'i_record2'],
    '2': ['i_record3', 'i_record4', 'i_record5', 'i_record6'],
    '3': ['i_record7'],
    '4': ['i_record8', 'i_record9', 'i_record10', 'i_record11', 'i_record12'],
    '5': ['i_record13'],
    '6': ['i_record14'],
    '7': ['i_record15', 'i_record16', 'i_record17'],
    '8': ['i_record18', 'i_record19', 'i_record20'],
    '9': ['i_record21'],
    '10': ['i_record22', 'i_record23', 'i_record24'],
    '11': ['i_record25', 'i_record26'],
    '12': ['i_record27', 'i_record28', 'i_record29'],
    '13': ['i_record30', 'i_record31', 'i_record32'],
    '14': ['i_record33', 'i_record34', 'i_record35'],
    '15': ['i_record36', 'i_record37', 'i_record38'],
    '16': ['i_record39', 'i_record40', 'i_record41', 'i_record42'],
    '17': ['i_record43'],
    '18': ['i_record44', 'i_record45', 'i_record46'],
    '19': ['i_record47', 'i_record48', 'i_record49'],
    '20': ['i_record50', 'i_record51', 'i_record52'],
    '21': ['i_record53', 'i_record54'],
    '22': ['i_record55', 'i_record56', 'i_record57'],
    '23': ['i_record58', 'i_record59', 'i_record60'],
    '24': ['i_record61', 'i_record62', 'i_record63'],
    '25': ['i_record64', 'i_record65', 'i_record66', 'i_record67', 'i_record68'],
    '26': ['i_record69', 'i_record70'],
    '27': ['i_record71', 'i_record72', 'i_record73'],
    '28': ['i_record74', 'i_record75', 'i_record76'],
    '29': ['i_record77', 'i_record78'],
    '30': ['i_record79', 'i_record80', 'i_record81'],
    '31': ['i_record82'],
    '32': ['i_record83', 'i_record84', 'i_record85', 'i_record86', 'i_record87', 'i_record108', 'i_record109'],
    '33': ['i_record88', 'i_record89', 'i_record90', 'i_record91', 'i_record98', 'i_record99'],
    '34': ['i_record92', 'i_record93', 'i_record94', 'i_record95', 'i_record96', 'i_record97'],
    '35': ['i_record100', 'i_record101', 'i_record102'],
    '36': ['i_record103', 'i_record104', 'i_record105'],
    '37': ['i_record106', 'i_record107'],
  },
}
