import i18n from 'i18next'
import { Button } from 'components/Button/Button'

export default {
  title: 'Component/Button',
  component: Button,
}

const Template = (args, { globals }) => {
  i18n.changeLanguage(globals.locale) // 切換語言
  return <Button {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'bet152_0000',
  buttonStatusStyle: 'default',
}

Primary.argTypes = {
  buttonStatusStyle: {
    control: {
      type: 'select',
      options: ['default', 'cancel', 'confirm'],
    },
  },
}

export const Cancel = Template.bind({})
Cancel.args = {
  label: 'bet152_0000',
  buttonStatusStyle: 'cancel',
}

export const Confirm = Template.bind({})
Confirm.args = {
  label: 'bet152_0000',
  buttonStatusStyle: 'confirm',
}
