import i18n from 'i18next'
import Home from 'routes/home/components/Home'

export default {
  title: 'Page/Home',
  component: Home,
}

const Template = (args, { globals }) => {
  i18n.changeLanguage(globals.locale) // 切換語言
  return <Home />
}

export const Primary = Template.bind({})
