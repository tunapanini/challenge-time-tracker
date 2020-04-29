/* eslint-disable import/no-extraneous-dependencies */
import Storybook, { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import CalendarViewPicker from '@/components/CalendarViewPicker.vue'
import { CalendarView } from '@/models/CalendarView'

const template = `<CalendarViewPicker :selectedView="selectedView" @update:selectedView="onChange" />`

const actions = {
  onChange: action('onChange')
}

storiesOf('CalendarViewPicker', module)
  .add('Day', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: template,
    data () {
      return {
        selectedView: CalendarView.DAY
      }
    },
    methods: actions
  }))
  .add('Month', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: template,
    data () {
      return {
        selectedView: CalendarView.MONTH
      }
    },
    methods: actions
  }))
  .add('Week', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: template,
    data () {
      return {
        selectedView: CalendarView.WEEK
      }
    },
    methods: actions
  }))
