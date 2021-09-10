<template>
  <div id="calendar">
    <div id="header">2021/09</div>
    <table>
      <tr>
        <th>SUN</th>
        <th>MON</th>
        <th>TUES</th>
        <th>WED</th>
        <th>THUR</th>
        <th>FRI</th>
        <th>SAT</th>
      </tr>
      <tr>
        <td class="empty"></td>
        <td class="empty"></td>
        <td class="empty"></td>
        <td @click="newPanel">
          <p>1</p>
          <div class="events">
            <div
              class="event"
              v-for="(event1, index) in event1s"
              :key="index"
              @click.stop="updatePanel1(index)"
            >
              <div class="title">{{ event1.title }}</div>
              <div class="from">{{ event1.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>2</p>
          <div class="events">
            <div
              class="event"
              v-for="(event2, index) in event2s"
              :key="index"
              @click.stop="updatePanel2(index)"
            >
                <div class="title">{{ event2.title }}</div>
                <div class="from">{{ event2.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>3</p>
          <div class="events">
            <div
              class="event"
              v-for="(event3, index) in event3s"
              :key="index"
              @click.stop="updatePanel3(index)"
            >
                <div class="title">{{ event3.title }}</div>
                <div class="from">{{ event3.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>4</p>
          <div class="events">
            <div
              class="event"
              v-for="(event4, index) in event4s"
              :key="index"
              @click.stop="updatePanel4(index)"
            >
                <div class="title">{{ event4.title }}</div>
                <div class="from">{{ event4.start_time }}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td @click="newPanel">
          <p>5</p>
          <div class="events">
            <div
              class="event"
              v-for="(event5, index) in event5s"
              :key="index"
              @click.stop="updatePanel5(index)"
            >
              <div class="title">{{ event5.title }}</div>
              <div class="from">{{ event5.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>6</p>
          <div class="events">
            <div
              class="event"
              v-for="(event6, index) in event6s"
              :key="index"
              @click.stop="updatePanel6(index)"
            >
              <div class="title">{{ event6.title }}</div>
              <div class="from">{{ event6.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>7</p>
          <div class="events">
            <div
              class="event"
              v-for="(event7, index) in event7s"
              :key="index"
              @click.stop="updatePanel7(index)"
            >
              <div class="title">{{ event7.title }}</div>
              <div class="from">{{ event7.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>8</p>
          <div class="events">
            <div
              class="event"
              v-for="(event8, index) in event8s"
              :key="index"
              @click.stop="updatePanel8(index)"
            >
              <div class="title">{{ event8.title }}</div>
              <div class="from">{{ event8.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>9</p>
          <div class="events">
            <div
              class="event"
              v-for="(event9, index) in event9s"
              :key="index"
              @click.stop="updatePanel9(index)"
            >
              <div class="title">{{ event9.title }}</div>
              <div class="from">{{ event9.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>10</p>
          <div class="events">
            <div
              class="event"
              v-for="(event10, index) in event10s"
              :key="index"
              @click.stop="updatePanel10(index)"
            >
              <div class="title">{{ event10.title }}</div>
              <div class="from">{{ event10.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>11</p>
          <div class="events">
            <div
              class="event"
              v-for="(event11, index) in event11s"
              :key="index"
              @click.stop="updatePanel11(index)"
            >
              <div class="title">{{ event11.title }}</div>
              <div class="from">{{ event11.start_time }}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td @click="newPanel">
          <p>12</p>
          <div class="events">
            <div
              class="event"
              v-for="(event12, index) in event12s"
              :key="index"
              @click.stop="updatePanel12(index)"
            >
              <div class="title">{{ event12.title }}</div>
              <div class="from">{{ event12.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>13</p>
          <div class="events">
            <div
              class="event"
              v-for="(event13, index) in event13s"
              :key="index"
              @click.stop="updatePanel13(index)"
            >
              <div class="title">{{ event13.title }}</div>
              <div class="from">{{ event13.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>14</p>
          <div class="events">
            <div
              class="event"
              v-for="(event14, index) in event14s"
              :key="index"
              @click.stop="updatePanel14(index)"
            >
              <div class="title">{{ event14.title }}</div>
              <div class="from">{{ event14.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>15</p>
          <div class="events">
            <div
              class="event"
              v-for="(event15, index) in event15s"
              :key="index"
              @click.stop="updatePanel15(index)"
            >
              <div class="title">{{ event15.title }}</div>
              <div class="from">{{ event15.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>16</p>
          <div class="events">
            <div
              class="event"
              v-for="(event16, index) in event16s"
              :key="index"
              @click.stop="updatePanel16(index)"
            >
              <div class="title">{{ event16.title }}</div>
              <div class="from">{{ event16.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>17</p>
          <div class="events">
            <div
              class="event"
              v-for="(event17, index) in event17s"
              :key="index"
              @click.stop="updatePanel17(index)"
            >
              <div class="title">{{ event17.title }}</div>
              <div class="from">{{ event17.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>18</p>
          <div class="events">
            <div
              class="event"
              v-for="(event18, index) in event18s"
              :key="index"
              @click.stop="updatePanel18(index)"
            >
              <div class="title">{{ event18.title }}</div>
              <div class="from">{{ event18.start_time }}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td @click="newPanel">
          <p>19</p>
          <div class="events">
            <div
              class="event"
              v-for="(event19, index) in event19s"
              :key="index"
              @click.stop="updatePanel19(index)"
            >
              <div class="title">{{ event19.title }}</div>
              <div class="from">{{ event19.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>20</p>
          <div class="events">
            <div
              class="event"
              v-for="(event20, index) in event20s"
              :key="index"
              @click.stop="updatePanel20(index)"
            >
                <div class="title">{{ event20.title }}</div>
                <div class="from">{{ event20.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>21</p>
          <div class="events">
            <div
              class="event"
              v-for="(event21, index) in event21s"
              :key="index"
              @click.stop="updatePanel21(index)"
            >
                <div class="title">{{ event21.title }}</div>
                <div class="from">{{ event21.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>22</p>
          <div class="events">
            <div
              class="event"
              v-for="(event22, index) in event22s"
              :key="index"
              @click.stop="updatePanel22(index)"
            >
                <div class="title">{{ event22.title }}</div>
                <div class="from">{{ event22.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>23</p>
          <div class="events">
            <div
              class="event"
              v-for="(event23, index) in event23s"
              :key="index"
              @click.stop="updatePanel23(index)"
            >
                <div class="title">{{ event23.title }}</div>
                <div class="from">{{ event23.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>24</p>
          <div class="events">
            <div
              class="event"
              v-for="(event24, index) in event24s"
              :key="index"
              @click.stop="updatePanel24(index)"
            >
                <div class="title">{{ event24.title }}</div>
                <div class="from">{{ event24.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>25</p>
          <div class="events">
            <div
              class="event"
              v-for="(event25, index) in event25s"
              :key="index"
              @click.stop="updatePanel25(index)"
            >
                <div class="title">{{ event25.title }}</div>
                <div class="from">{{ event25.start_time }}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td @click="newPanel">
          <p>26</p>
          <div class="events">
            <div
              class="event"
              v-for="(event26, index) in event26s"
              :key="index"
              @click.stop="updatePanel26(index)"
            >
                <div class="title">{{ event26.title }}</div>
                <div class="from">{{ event26.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>27</p>
          <div class="events">
            <div
              class="event"
              v-for="(event27, index) in event27s"
              :key="index"
              @click.stop="updatePanel27(index)"
            >
                <div class="title">{{ event27.title }}</div>
                <div class="from">{{ event27.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>28</p>
          <div class="events">
            <div
              class="event"
              v-for="(event28, index) in event28s"
              :key="index"
              @click.stop="updatePanel28(index)"
            >
                <div class="title">{{ event28.title }}</div>
                <div class="from">{{ event28.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>29</p>
          <div class="events">
            <div
              class="event"
              v-for="(event29, index) in event29s"
              :key="index"
              @click.stop="updatePanel29(index)"
            >
                <div class="title">{{ event29.title }}</div>
                <div class="from">{{ event29.start_time }}</div>
            </div>
          </div>
        </td>
        <td @click="newPanel">
          <p>30</p>
          <div class="events">
            <div
              class="event"
              v-for="(event30, index) in event30s"
              :key="index"
              @click.stop="updatePanel30(index)"
            >
                <div class="title">{{ event30.title }}</div>
                <div class="from">{{ event30.start_time }}</div>
            </div>
          </div>
        </td>
        <td class="empty"></td>
        <td class="empty"></td>
      </tr>
    </table>

  </div>

  <div
    id="info-panel"
    v-bind:class="{ open: opened, new: isNew, update: updated }"
  >
    <div class="close" @click="close">x</div>

    <form>
      <div class="title">
        <label for="">Event</label>
        <br />
        <input type="text" name="title" ref="title" v-model="oneEvent.title" />
      </div>
      <div class="time-picker">
        <div class="selected-date">
          <span class="month">9</span>
          /
          <!-- <span class="date">{{this.click}}</span> -->
          <input type="number" v-model="oneEvent.date">
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
    </form>

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
      opened: false,
      isNew: false,
      updated: false,
      event1s: ['1',],
      event2s:['2',],
      event3s:['3',],
      event4s:['4',],
      event5s:['5',],
      event6s:['6',],
      event7s:['7',],
      event8s:['8',],
      event9s:['9',],
      event10s:['10',],
      event11s:['11',],
      event12s:['12',],
      event13s:['13',],
      event14s:['14',],
      event15s:['15',],
      event16s:['16',],
      event17s:['17',],
      event18s:['18',],
      event19s:['19',],
      event20s:['20',],
      event21s:['21',],
      event22s:['22',],
      event23s:['23',],
      event24s:['24',],
      event25s:['25',],
      event26s:['26',],
      event27s:['27',],
      event28s:['28',],
      event29s:['29',],
      event30s:['30',],
      oneEvent: {
        date:null,
        title: null,
        start_time: null,
        end_time: null,
        description: null,
      },
      cloneEvent: null,
      eventsId: null,
      click:null,
    };
  },
  methods: {
    newPanel() {
      this.opened = true;
      this.isNew = true;
      this.updated = false;
      this.cloneEvent = null;
      this.oneEvent = {
        date:null,
        title: null,
        start_time: null,
        end_time: null,
        description: null,
      };
      this.$refs.title.focus();
    },
    updatePanel1(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event1s[index] && this.event1s[index].date == this.event1s[0]){
        this.oneEvent = this.event1s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel2(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event2s[index]){
        this.oneEvent = this.event2s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel3(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event3s[index]){
        this.oneEvent = this.event3s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel4(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event4s[index]){
        this.oneEvent = this.event4s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel5(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event5s[index]){
        this.oneEvent = this.event5s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel6(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event6s[index]){
        this.oneEvent = this.event6s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel7(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event7s[index]){
        this.oneEvent = this.event7s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel8(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event8s[index]){
        this.oneEvent = this.event8s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel9(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event9s[index]){
        this.oneEvent = this.event9s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel10(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event10s[index]){
        this.oneEvent = this.event10s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel11(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event11s[index]){
        this.oneEvent = this.event11s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel12(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event12s[index]){
        this.oneEvent = this.event12s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel13(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event13s[index]){
        this.oneEvent = this.event13s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel14(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event14s[index]){
        this.oneEvent = this.event14s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel15(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event15s[index]){
        this.oneEvent = this.event15s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel16(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event16s[index]){
        this.oneEvent = this.event16s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel17(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event17s[index]){
        this.oneEvent = this.event17s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel18(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event18s[index]){
        this.oneEvent = this.event18s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel19(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event19s[index]){
        this.oneEvent = this.event19s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel20(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event20s[index]){
        this.oneEvent = this.event20s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel21(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event21s[index]){
        this.oneEvent = this.event21s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel22(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event22s[index]){
        this.oneEvent = this.event22s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel23(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event23s[index]){
        this.oneEvent = this.event23s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel24(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event24s[index]){
        this.oneEvent = this.event24s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel25(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event25s[index]){
        this.oneEvent = this.event25s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel26(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event26s[index]){
        this.oneEvent = this.event26s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel27(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event27s[index]){
        this.oneEvent = this.event27s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel28(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event28s[index]){
        this.oneEvent = this.event28s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel29(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event29s[index]){
        this.oneEvent = this.event29s[index];
      }
      this.$refs.title.focus();
    },
    updatePanel30(index) {
      this.opened = true;
      this.updated = true;
      this.isNew = false;
      this.eventsId = index;
      if(this.event30s[index]){
        this.oneEvent = this.event30s[index];
      }
      this.$refs.title.focus();
    },
    close() {
      this.opened = false;
    },
    create() {
      if(this.oneEvent.date == this.event1s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event1s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event2s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event2s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event3s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event3s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event4s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event4s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event5s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event5s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event6s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event6s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event7s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event7s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event8s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event8s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event9s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event9s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event10s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event10s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event11s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event11s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event12s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event12s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event13s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event13s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event14s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event14s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event15s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event15s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event16s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event16s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event17s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event17s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event18s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event18s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event19s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event19s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event20s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event20s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event21s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event21s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event22s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event22s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event23s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event23s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event24s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event24s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event25s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event25s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event26s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event26s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event27s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event27s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event28s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event28s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event29s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event29s.push(this.cloneEvent);
      }
      if(this.oneEvent.date == this.event30s[0]){
        this.cloneEvent = Object.assign({}, this.oneEvent);
        this.event30s.push(this.cloneEvent);
      }

      this.date = null;
      this.close();
    },
    update() {
      this.close();
    },
    deleteE() {
      if(this.oneEvent.date == this.event1s[0]){
        this.event1s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event2s[0]){
        this.event2s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event3s[0]){
        this.event4s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event4s[0]){
        this.event4s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event5s[0]){
        this.event5s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event6s[0]){
        this.event6s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event7s[0]){
        this.event7s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event8s[0]){
        this.event8s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event9s[0]){
        this.event9s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event10s[0]){
        this.event10s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event11s[0]){
        this.event11s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event12s[0]){
        this.event12s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event13s[0]){
        this.event13s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event14s[0]){
        this.event14s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event15s[0]){
        this.event15s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event16s[0]){
        this.event16s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event17s[0]){
        this.event17s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event18s[0]){
        this.event18s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event19s[0]){
        this.event19s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event20s[0]){
        this.event20s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event21s[0]){
        this.event21s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event22s[0]){
        this.event22s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event23s[0]){
        this.event23s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event24s[0]){
        this.event24s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event25s[0]){
        this.event25s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event26s[0]){
        this.event26s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event27s[0]){
        this.event27s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event28s[0]){
        this.event28s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event29s[0]){
        this.event29s.splice(this.eventsId, 1);
      }
      if(this.oneEvent.date == this.event30s[0]){
        this.event30s.splice(this.eventsId, 1);
      }
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

#calendar table {
  width: 100%;
  border-collapse: collapse;
}

td{
  width:14.28vw;
  height: 15vh;
  border: 1px solid #ccc;
  position: relative;
}

td:hover{
  background: rgba(109, 250, 255, 0.199);
  cursor: pointer;
}

p{
  margin-top: 2px;
  margin-bottom: 0;
  position: absolute;
  top: 0px;
}


.date-block {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  height: 15vh;
  padding: 4px;
}

.empty {
  background: #eee;
}

.event {
  display: flex;
  margin-bottom: 2px;
  border-radius: 12px;
  text-align: center;
  background: rgba(0, 183, 255, 0.452);
  color: rgb(0, 0, 0);
}
.event:hover{
  transform: scale(1.05);
  transition: 0.2s ease all;
}

.title,
.from {
  flex: 0 0 50%;
}

/* info-panel */
#info-panel {
  display: none;
  position: absolute;
  top: 25%;
  right: 37%;
  width: 25vw;
  background: white;
  border: 1px solid #ccc;
}

#info-panel.open {
  display: block;
}

#info-panel .close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

#info-panel label {
  font-size: 0.8rem;
  color: #aaa;
}

#info-panel .title,
#info-panel .time-picker {
  border-bottom: 1px solid #ccc;
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
</style>

