import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  EN_US,
  ZH_TW,
  ZH_CN,
  ZH_CN_NEW,
  JA_JP,
  KO_KR,
  TH_TH,
  VI_VN,
  ID_ID,
} from '../src/constants/locale'
import translationCH from '../src/locales/ch.json'
import translationCN from '../src/locales/cs.json'
import translationEN from '../src/locales/en.json'
import translationID from '../src/locales/id.json'
import translationJP from '../src/locales/jp.json'
import translationKR from '../src/locales/ko.json'
import translationTH from '../src/locales/th.json'
import translationVN from '../src/locales/vn.json'
import translationCNNEW from '../src/locales/zhcn.json'

const resources = {
  [EN_US]: {
    translation: JSON.parse(translationEN.Result.LangResource),
  },
  [ZH_TW]: {
    translation: JSON.parse(translationCH.Result.LangResource),
  },
  [ZH_CN]: {
    translation: JSON.parse(translationCN.Result.LangResource),
  },
  [ZH_CN_NEW]: {
    translation: JSON.parse(translationCNNEW.Result.LangResource),
  },
  [JA_JP]: {
    translation: JSON.parse(translationJP.Result.LangResource),
  },
  [KO_KR]: {
    translation: JSON.parse(translationKR.Result.LangResource),
  },
  [TH_TH]: {
    translation: JSON.parse(translationTH.Result.LangResource),
  },
  [VI_VN]: {
    translation: JSON.parse(translationVN.Result.LangResource),
  },
  [ID_ID]: {
    translation: JSON.parse(translationID.Result.LangResource),
  },
}

i18n.use(initReactI18next).init(
  {
    resources,
    lng: ZH_TW, // 預設語言
    // fallbackLng: ZH_TW, //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  },
  err => {
    if (err) {
      console.error(err)
    }
  },
)

export default i18n
