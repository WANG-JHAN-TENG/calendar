<template>
  <div id="calendar">
    <div id="header">2021/09</div>
    <div id="days">
      <div class="day">SUN</div>
      <div class="day">MON</div>
      <div class="day">TUE</div>
      <div class="day">WED</div>
      <div class="day">TUR</div>
      <div class="day">FRI</div>
      <div class="day">SAT</div>
    </div>
    <div id="tables">
      <div id="weeks">
        <div class="week" v-for="n in sevenDays" :key="n.id">
          {{n}}
        </div>
      </div>
      <div id="dates">
        <div class="date-block empty"></div>
        <div class="date-block empty"></div>
        <div class="date-block empty"></div>
        <div
          class="date-block"
          v-for="(date, index) in dates"
          :key="index"
          @click="newPanel(index,$event)"
        >
          <div class="date">{{ date }}</div>
          <div class="events">
              <div
                class="event"
                v-for="(event, index) in events"
                :key="index"
                @click.stop="updatePanel(index,$event)"
              >
                <template v-if="event.date == date-1">
                  <div class="title">{{ event.title }}</div>
                  <div class="from">{{ event.start_time }}</div>
                </template>
              </div>
          </div>
        </div>

        <div class="date-block empty"></div>
        <div class="date-block empty"></div>
      </div>
    </div>

  </div>

  <div
    id="info-panel"
    v-bind:class="{ open: opened, new: isNew, update: updated }"
       :style="{top:topPosition+ 'px', left:leftPosition + 'px'}"
  >
    <div class="close" @click="close">x</div>

    <div class="title">
      <label for="">Event</label>
      <br />
      <input type="text" name="title" ref="title" v-model="oneEvent.title" />
    </div>
    <div class="time-picker">
      <div class="selected-date">
        <span class="month">9</span>
        /
        <span class="date">{{ eventId + 1 }}</span>
        <input type="hidden" name="month" />
        <input type="hidden" name="date" />
      </div>
    </div>
    <div class="from">
      <label for="from">From</label>
      <br />
      <input
        id="from"
        type="time"
        name="start_time"
        v-model="oneEvent.start_time"
      />
    </div>
    <div class="to">
      <label for="to">To</label>
      <br />
      <input
        id="to"
        type="time"
        name="end_time"
        v-model="oneEvent.end_time"
      />
    </div>
    <div class="description">
      <label for="description">Description</label>
      <br />
      <textarea
        name="description"
        id="description"
        v-model="oneEvent.description"
      ></textarea>
    </div>

    <div class="buttons clearfix">
      <button class="create" @click="create">Create</button>
      <button class="update" @click="update">Update</button>
      <button class="cancel" @click="close">Cancel</button>
      <button class="delete" @click="deleteE">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: {},
  data() {
    return {
      dates: 30,
      sevenDays:[
        'WED','TUR','FRI','SAT',
        'SUN','MON','TUE','WED','TUR','FRI','SAT',
        'SUN','MON','TUE','WED','TUR','FRI','SAT',
        'SUN','MON','TUE','WED','TUR','FRI','SAT',
        'SUN','MON','TUE','WED','TUR'
      ],
      opened: false,
      isNew: false,
      updated: false,
      topPosition:null,
      leftPosition:null,
      eventId: null,
      events: [],
      oneEvent: {
        title: null,
        date:null,
        start_time: null,
        end_time: null,
        description: null,
      },
      cloneEvent: null,
      eventsId: null,
    };
  },
  computed:{},
  methods: {
    newPanel(index,event) {
      this.opened = true;
      this.isNew = true;
      this.eventId = index;
      this.updated = false;
      this.cloneEvent = null;
      this.oneEvent = {
        title: null,
        date:index,
        start_time: null,
        end_time: null,
        description: null,
      };
      if(event.pageY > 364 && event.pageX > 830){
        this.topPosition = 364;
        this.leftPosition = 830;
      }else if(event.pageX > 830){
        this.topPosition = event.pageY;
        this.leftPosition = 830;
      }else if( event.pageY > 364){
        this.topPosition = 364;
        this.leftPosition = event.pageX;
      }else{
        this.topPosition = event.pageY ;
        this.leftPosition = event.pageX ;
      }
      this.$nextTick(() => {
        this.$refs.title.focus();
      });
    },
    updatePanel(index,event) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      this.oneEvent = Object.assign({},this.events[index]);
      if(event.pageY > 325 && event.pageX > 830){
        this.topPosition = 325;
        this.leftPosition = 830;
      }else if(event.pageX > 830){
        this.topPosition = event.pageY;
        this.leftPosition = 830;
      }else if( event.pageY > 325){
        this.topPosition = 325;
        this.leftPosition = event.pageX;
      }else{
        this.topPosition = event.pageY ;
        this.leftPosition = event.pageX ;
      }
      this.$nextTick(() => {
        this.$refs.title.focus();
      });
    },
    close() {
      this.opened = false;
    },
    create() {
      this.cloneEvent = Object.assign({}, this.oneEvent);
      this.events.push(this.cloneEvent);

      this.close();
    },
    update() {
      this.events[this.eventsId] = Object.assign({}, this.oneEvent);
      this.close();
    },
    deleteE() {
      this.events.splice(this.eventsId, 1);
      this.close();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#calendar {
  margin: 0 auto;
  width: 90%;
}

#header {
  font-size: 2.4rem;
  font-weight: bold;
}

#weeks{
  display: none;
}

#days,
#dates {
  display: flex;
  flex-wrap: wrap;
}

#days div:nth-child(1),
#days div:nth-child(7){
  color: red;
}

#dates {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

#dates div:nth-child(7n),
#dates div:nth-child(8),
#dates div:nth-child(15),
#dates div:nth-child(22),
#dates div:nth-child(29){
  color: red;
}

.day,
.date-block {
  flex: 0 0 14.28%;
}

.date-block {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  height: 15vh;
  padding: 4px;
  overflow: auto;
}

.date-block:hover{
  background: rgba(0, 183, 255, 0.185);
  transition: 0.2s ease all;
}

.date-block.empty {
  background: #eee;
}

#dates .event {
  display: flex;
  margin-bottom: 2px;
  border-radius: 12px;
  text-align: center;
  background: orange;
  color: white;
}

.event:hover{
  transform: scale(1.05);
  transition: 0.2s ease all;
}

#dates .title,
#dates .from {
  flex: 0 0 50%;
}

/* info-panel */
#info-panel {
  display: none;
  position: fixed;
  top: 25%;
  right: 37%;
  width: 20vw;
  background: white;
  border: none;
}

#info-panel.open {
  display: block;
}

#info-panel .close {
  padding:3px 10px;
  position: absolute;
  right: 0;
  cursor: pointer;
}

#info-panel .close:hover{
  background: rgba(248, 0, 0, 0.637);
  color: white;
}

#info-panel label {
  font-size: 0.8rem;
  color: #aaa;
}

#info-panel .title,
#info-panel .time-picker {
  border-bottom: 1px solid #ccc;
}

#info-panel .title input{
  width: 18vw;
}

#info-panel .title,
#info-panel .time-picker,
#info-panel .description {
  padding: 10px;
}

#info-panel .selected-date {
  font-size: 1.4rem;
  text-align: center;
}

#description {
  width: 100%;
}

#info-panel .from,.to{
  margin-left: 10px;
}

#info-panel button {
  display: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  background: #aaa;
  color: white;
}

#info-panel.new button.create,
#info-panel.new button.cancel {
  display: block;
  float: left;
  width: 50%;
}

#info-panel.update button.update,
#info-panel.update button.cancel,
#info-panel.update button.delete {
  display: block;
  float: left;
  width: 50%;
}

#info-panel.update button.delete {
  width: 100%;
  background: #c21717;
}

#info-panel.new button.create,
#info-panel.update button.update {
  background: #74be00;
}

@media(max-width:750px){
  #header{
  margin-top: 70px;
  margin-bottom: 10px;
  }
  #days{
    font-size: 0.8rem;
  }
  #days .day{
  display: none;
  }
  #tables{
    display: flex;
  }
  #weeks{
    display: flex;
    flex-direction: column;
  }
  #weeks .week{
    padding-top: 7px;
    height: 12vh;
    font-size: 0.7rem;
  }
  #weeks div:nth-child(7n-3),
  #weeks div:nth-child(5),
  #weeks div:nth-child(12),
  #weeks div:nth-child(19),
  #weeks div:nth-child(26){
    color: red;
  }
  #dates .date-block{
    height: 12vh;
    flex: 0 0 100%;
  }
  #dates .events{
    font-size: 0.1rem;
  }
  #dates .date-block.empty{
    display: none;
  }
  #info-panel{
  width: 90%;
  top: 150px !important;
  left: 10px !important;
  }
  #info-panel 
  .title input,
  .from input,
  .to input,
  .description textarea{
    width: 95%;
  }
}
</style>

