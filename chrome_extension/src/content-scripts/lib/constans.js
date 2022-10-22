// スポーツ
const TENNIS = '6';
const SOFT_TENNIS = '7';

// 施設(テニス、軟式テニス)
const CHIDORI_GYMNASIUM = '1';
const FITTNESS_21_EAST_YODOGAWA_GYMNASIUM = '2';
const TSURUMIRYOKUCHI = '3';
const NAGAI_PARK = '4';
const NANKO_CENTRAL_PARK = '5';
const UTSUBO_PARK = '6';
const NORTH_SPORTS_CENTER = '7';
const MIYAKOJIMA_SPORTS_CENTER = '8';
const FUKUSHIMA_SPORTS_CENTER = '9';
const MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER = '10';
const CENTRAL_SPORTS_CENTER = '11';
const WEST_SPORTS_CENTER = '12';
const PORT_SPORTS_CENTER = '13';
const TAISHO_SPORTS_CENTER = '14';
const TENNOJI_SPORTS_CENTER = '15';
const MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER = '16';
const WEST_YODOGAWA_SPORTS_CENTER = '17';
const YODOGAWA_SPORTS_CENTER = '18';
const EAST_YODOGAWA_SPORTS_CENTER = '19';
const ZETTO_HIGASHINARI_SPORTS_CENTER = '20';
const ZETTO_IKUNO_SPORTS_CENTER = '21';
const ASAHI_SPORTS_CENTER = '22';
const JOTO_SPORTS_CENTER = '23';
const TSURUMI_SPORTS_CENTER = '24';
const SUMIYOSHI_SPORTS_CENTER = '25';
const FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER = '26';
const HST_HIRANO_SPORTS_CENTER = '27';
const HST_NISHINARI_SPORTS_CENTER = '28';
const NAGAI_PARK_OFFICE = '29';
const OGIMACHI_PARK_OFFICE = '30';
const SANADAYAMA_PARK_OFFICE = '31';
const JYUSO_PARK_OFFICE = '32';
const TSURUMIRYOKUCHI_PARK_OFFICE = '33';

export const CATEGORY_IDS_TABLE = {
  [TENNIS]: { "categoryId": "i_record4", "subCategoryId": "i_record0" },
  [SOFT_TENNIS]: { "categoryId": 'i_record4', "subCategoryId": 'i_record1' }
}

export const FACILITIES_TABLE = {
  [TENNIS]: {
    [CHIDORI_GYMNASIUM]: ['i_record0'],
    [FITTNESS_21_EAST_YODOGAWA_GYMNASIUM]: ['i_record1'],
    [TSURUMIRYOKUCHI]: ['i_record2'],
    [NAGAI_PARK]: ['i_record3'],
    [NANKO_CENTRAL_PARK]: ['i_record4', 'i_record5'],
    [UTSUBO_PARK]: ['i_record6', 'i_record7', 'i_record8'],
    [NORTH_SPORTS_CENTER]: ['i_record9'],
    [MIYAKOJIMA_SPORTS_CENTER]: ['i_record10'],
    [FUKUSHIMA_SPORTS_CENTER]: ['i_record11'],
    [MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER]: ['i_record12'],
    [CENTRAL_SPORTS_CENTER]: ['i_record13'],
    [WEST_SPORTS_CENTER]: ['i_record14'],
    [PORT_SPORTS_CENTER]: ['i_record15'],
    [TAISHO_SPORTS_CENTER]: ['i_record16'],
    [TENNOJI_SPORTS_CENTER]: ['i_record17'],
    [MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER]: ['i_record18'],
    [WEST_YODOGAWA_SPORTS_CENTER]: ['i_record19'],
    [YODOGAWA_SPORTS_CENTER]: ['i_record20'],
    [EAST_YODOGAWA_SPORTS_CENTER]: ['i_record21'],
    [ZETTO_HIGASHINARI_SPORTS_CENTER]: ['i_record22'],
    [ZETTO_IKUNO_SPORTS_CENTER]: ['i_record23'],
    [ASAHI_SPORTS_CENTER]: ['i_record24'],
    [JOTO_SPORTS_CENTER]: ['i_record25'],
    [TSURUMI_SPORTS_CENTER]: ['i_record26'],
    [SUMIYOSHI_SPORTS_CENTER]: ['i_record27'],
    [FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER]: ['i_record28'],
    [HST_HIRANO_SPORTS_CENTER]: ['i_record29'],
    [HST_NISHINARI_SPORTS_CENTER]: ['i_record30'],
    [NAGAI_PARK_OFFICE]: ['i_record31', 'i_record32', 'i_record33', 'i_record34', 'i_record35'],
    [OGIMACHI_PARK_OFFICE]: ['i_record36', 'i_record37', 'i_record38', 'i_record39', 'i_record40', 'i_record41'],
    [SANADAYAMA_PARK_OFFICE]: ['i_record42', 'i_record43', 'i_record44', 'i_record45'],
    [JYUSO_PARK_OFFICE]: ['i_record46', 'i_record47', 'i_record48', 'i_record49', 'i_record50', 'i_record51'],
    [TSURUMIRYOKUCHI_PARK_OFFICE]: ['i_record52', 'i_record53']
  },
  [SOFT_TENNIS]: {
    [CHIDORI_GYMNASIUM]: ['i_record0'],
    [FITTNESS_21_EAST_YODOGAWA_GYMNASIUM]: ['i_record1'],
    [TSURUMIRYOKUCHI]: ['i_record2'],
    [NAGAI_PARK]: ['i_record3'],
    [NANKO_CENTRAL_PARK]: ['i_record4', 'i_record5'],
    [UTSUBO_PARK]: ['i_record6', 'i_record7', 'i_record8'],
    [NORTH_SPORTS_CENTER]: ['i_record9'],
    [MIYAKOJIMA_SPORTS_CENTER]: ['i_record10'],
    [FUKUSHIMA_SPORTS_CENTER]: ['i_record11'],
    [MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER]: ['i_record12'],
    [CENTRAL_SPORTS_CENTER]: ['i_record13'],
    [WEST_SPORTS_CENTER]: ['i_record14'],
    [PORT_SPORTS_CENTER]: ['i_record15'],
    [TAISHO_SPORTS_CENTER]: ['i_record16'],
    [TENNOJI_SPORTS_CENTER]: ['i_record17'],
    [MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER]: ['i_record18'],
    [WEST_YODOGAWA_SPORTS_CENTER]: ['i_record19'],
    [YODOGAWA_SPORTS_CENTER]: ['i_record20'],
    [EAST_YODOGAWA_SPORTS_CENTER]: ['i_record21'],
    [ZETTO_HIGASHINARI_SPORTS_CENTER]: ['i_record22'],
    [ZETTO_IKUNO_SPORTS_CENTER]: ['i_record23'],
    [ASAHI_SPORTS_CENTER]: ['i_record24'],
    [JOTO_SPORTS_CENTER]: ['i_record25'],
    [TSURUMI_SPORTS_CENTER]: ['i_record26'],
    [SUMIYOSHI_SPORTS_CENTER]: ['i_record27'],
    [FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER]: ['i_record28'],
    [HST_HIRANO_SPORTS_CENTER]: ['i_record29'],
    [HST_NISHINARI_SPORTS_CENTER]: ['i_record30'],
    [NAGAI_PARK_OFFICE]: ['i_record31', 'i_record32', 'i_record33', 'i_record34', 'i_record35'],
    [OGIMACHI_PARK_OFFICE]: ['i_record36', 'i_record37', 'i_record38', 'i_record39', 'i_record40', 'i_record41'],
    [SANADAYAMA_PARK_OFFICE]: ['i_record42', 'i_record43', 'i_record44', 'i_record45'],
    [JYUSO_PARK_OFFICE]: ['i_record46', 'i_record47', 'i_record48', 'i_record49', 'i_record50', 'i_record51'],
    [TSURUMIRYOKUCHI_PARK_OFFICE]: ['i_record52', 'i_record53']
  }
}

export const userNumberKey = 'judapfa8qphcadafi@acjaihuay@ua';

export const passwordKey = 'kdafoiapypva8y84pchahucpaahdah';
