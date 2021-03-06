import StyleContext from 'isomorphic-style-loader/StyleContext'
import { I18nextProvider } from 'react-i18next'
import insertCss from 'utils/insertCss'
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
import i18n from './i18n'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: ZH_TW,
    toolbar: {
      icon: 'globe',
      items: [
        { value: EN_US, right: 'ðºð¸', title: 'English' },
        { value: ZH_TW, right: 'ð¹ð¼', title: 'ç¹é«ä¸­æ' },
        { value: ZH_CN, right: 'ð¨ð³', title: 'ç°¡é«ä¸­æ' },
        { value: ZH_CN_NEW, right: 'ð¨ð³', title: 'ç°¡é«ä¸­ææ°' },
        { value: JA_JP, right: 'ð¯ðµ', title: 'æ¥è¯­æå­' },
        { value: KO_KR, right: 'ð°ð·', title: 'íêµ­ì´' },
        { value: TH_TH, right: 'ð¹ð­', title: 'à¹à¸à¸¢' },
        { value: VI_VN, right: 'ð»ð³', title: 'Tiáº¿ng Viá»t' },
        { value: ID_ID, right: 'ð®ð©', title: 'bahasa Indonesia' },
      ],
    },
  },
}

export const decorators = [
  Story => (
    <StyleContext.Provider value={{ insertCss }}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </StyleContext.Provider>
  ),
]

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export default parameters
