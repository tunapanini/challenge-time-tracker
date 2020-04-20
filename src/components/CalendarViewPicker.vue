<template>
  <div class="CalendarViewPicker-box">
    <div class="item-box" :class="{ active: isSelected(calendarViews.DAY) }">
      <input id="calendar-view-day"
             type="radio"
             name="calendar-view"
             :value="calendarViews.DAY"
             v-model="calendarView">
      <label for="calendar-view-day" class="unselectable clickable">Day</label>
    </div>
    <div class="item-box" :class="{ active: isSelected(calendarViews.MONTH) }">
      <input id="calendar-view-month"
             type="radio"
             name="calendar-view"
             :value="calendarViews.MONTH"
             v-model="calendarView">
      <label for="calendar-view-month" class="unselectable clickable">Month</label>
    </div>
    <div class="item-box" :class="{ active: isSelected(calendarViews.WEEK) }">
      <input
              id="calendar-view-week"
              type="radio"
              name="calendar-view"
              :value="calendarViews.WEEK"
              v-model="calendarView">
      <label for="calendar-view-week" class="unselectable clickable">Week</label>
    </div>
    <div class="item-box select-box" :class="calendarView"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch, Ref } from 'vue-property-decorator'
import { CalendarView } from '@/models/CalendarView'

@Component
export default class CalendarViewPicker extends Vue {
  @Prop() private selectedView!: CalendarView;

  @Watch('calendarView')
  @Emit('update:selectedView')
  onChange (val: string) {

  }

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
  $width-item-box: 105px;
  .CalendarViewPicker-box {
    width: $width-item-box * 3;
    height: 36px;
    border-radius: 17px;
    background-color: #eff6ff;
    position: relative;
  }
  .item-box {
    display: inline-flex;
    width: $width-item-box;
    height: 36px;
    border-radius: 17px;
  }
  label {
    z-index: 1;
    flex: 1;
    font-size: 14px;
    padding: 8px;
    text-align: center;
    color: #273142;
    transition: ease-out 0.5s;
  }
  .active label {
    color: #ffffff;
  }
  input[type="radio"] {
    display: none;
  }
  .select-box {
    z-index: 0;
    position: absolute;
    background-color: #538fff;
    transition: ease-out 0.5s;
    &.day {
      left: 0;
    }
    &.month {
      left: $width-item-box;
    }
    &.week {
      left: $width-item-box * 2;
    }
  }
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .clickable {
    cursor: pointer;
  }
</style>
