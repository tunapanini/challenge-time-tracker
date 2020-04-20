<template>
  <div class="CalendarViewPicker-box">
    <div class="item-box" :class="{ active: isSelected(calendarViews.DAY) }">
      <input id="calendar-view-day"
             type="radio"
             name="calendar-view"
             :value="calendarViews.DAY"
             v-model="calendarView">
      <label for="calendar-view-day">Day</label>
    </div>
    <div class="item-box" :class="{ active: isSelected(calendarViews.MONTH) }">
      <input id="calendar-view-month"
             type="radio"
             name="calendar-view"
             :value="calendarViews.MONTH"
             v-model="calendarView">
      <label for="calendar-view-month">Month</label>
    </div>
    <div class="item-box" :class="{ active: isSelected(calendarViews.WEEK) }">
      <input
              id="calendar-view-week"
              type="radio"
              name="calendar-view"
              :value="calendarViews.WEEK"
              v-model="calendarView">
      <label for="calendar-view-week">Week</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import { CalendarView } from '@/models/CalendarView'

@Component
export default class CalendarViewPicker extends Vue {
  @Prop() private selectedView!: CalendarView;

  @Watch('calendarView')
  @Emit('update:selectedView')
  onChange (val: string) {}

  private calendarViews = CalendarView;

  data () {
    return {
      calendarView: this.selectedView
    }
  }

  isSelected (calendarView: CalendarView) {
    return (calendarView === this.$data.calendarView)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  *{
    font-family: 'Poppins', sans-serif;
  }
  .CalendarViewPicker-box {
    width: 315px;
    height: 36px;
    border-radius: 17px;
    background-color: #eff6ff;
  }
  .item-box {
    display: inline-flex;
    width: 104px;
    height: 36px;
    border-radius: 17px;

  }
  input[type="radio"] {
    display: none;
  }
  label {
    flex: 1;
    font-size: 14px;
    padding: 8px;
    text-align: center;
    color: #273142;
  }
  .active {
    &.item-box {
      background-color: #538fff;
    }
    label {
      color: #ffffff;
    }
  }
</style>
