/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import CalendarViewPicker from '@/components/CalendarViewPicker.vue'
import { CalendarView } from '@/models/CalendarView'

storiesOf('CalendarViewPicker', module)
  .add('Day', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: `<CalendarViewPicker :selectedView="selectedView"></CalendarViewPicker>`,
    data () {
      return {
        selectedView: CalendarView.DAY
      }
    },
    methods: { action: action('selectionchange') }
  }))
  .add('Month', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: `<CalendarViewPicker :selectedView="selectedView"></CalendarViewPicker>`,
    data () {
      return {
        selectedView: CalendarView.MONTH
      }
    }
  }))
  .add('Week', () => ({
    components: { CalendarViewPicker: CalendarViewPicker },
    template: `<CalendarViewPicker :selectedView="selectedView"></CalendarViewPicker>`,
    data () {
      return {
        selectedView: CalendarView.WEEK
      }
    }
  }))
