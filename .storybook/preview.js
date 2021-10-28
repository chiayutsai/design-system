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
        { value: EN_US, right: '🇺🇸', title: 'English' },
        { value: ZH_TW, right: '🇹🇼', title: '繁體中文' },
        { value: ZH_CN, right: '🇨🇳', title: '簡體中文' },
        { value: ZH_CN_NEW, right: '🇨🇳', title: '簡體中文新' },
        { value: JA_JP, right: '🇯🇵', title: '日语文字' },
        { value: KO_KR, right: '🇰🇷', title: '한국어' },
        { value: TH_TH, right: '🇹🇭', title: 'ไทย' },
        { value: VI_VN, right: '🇻🇳', title: 'Tiếng Việt' },
        { value: ID_ID, right: '🇮🇩', title: 'bahasa Indonesia' },
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
