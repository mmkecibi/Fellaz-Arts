<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn color="primary" dark @click.stop="setDialogToDay">
            {{ $t("New Event") }}
          </v-btn>
          <v-btn outlined class="mr-4" @click="setToday"> {{ $t("Today") }} </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-dialog bottom right>
            <template v-slot:activator="{ on }">
              <v-btn outlined v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>{{ $t("Day") }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>{{ $t("Week") }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>{{ $t("Month") }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 {{ $t("days") }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-dialog>
        </v-toolbar>
      </v-sheet>

      <v-dialog  v-model="dialogDate" max-width="1080">
        <v-card>
          <v-btn style="float:right"
            color="primary cardactionclose"
            class="mr-4"
            @click.stop="dialogDate = false"
          >
            {{ $t("Close") }}
          </v-btn>
         <v-btn style="float:left"
            color="primary "
            class="mr-4 eventtype"

          >
            <select v-model="eventtype" class="event-type minimal" >
                <option v-for="(item, key) in eventtyps" :key="key" :value="item">{{ item.name }}</option>
            </select>
                  {{ $t("Event Type") }}   
         </v-btn>
          <v-container>

    <v-form @submit.prevent="addEvent">

    <router-link :to="localePath('/ManageClient/Client/AddClient')">
        <button type="button" class="btn btn-success add-btn btn-lg">{{$t("Add a new Client")}}</button>
    </router-link>

    <div  class="form-area" novalidate="novalidate" autocomplete="off">
  <div class="row">
      <div class="col-md-10">
          <div class="styled-input wide multi">
              <div class="first-name" >
                  <input type="text" name="name" v-model="search.name" autocomplete="off"  :placeholder= 'this.$t("Name")'  data-placeholder-focus="false"  @click="emitFormData('name')" />
              </div>
              <div class="last-name" >
                  <input type="text" v-model="search.email" autocomplete="off"  :placeholder= 'this.$t("Email")'  data-placeholder-focus="false"  @click="emitFormData('email')" />
              </div>
              <div class="city" >
                  <input type="text"  v-model="search.phone"  v-mask="'(999) 999-9999'"  autocomplete="off"  :placeholder= 'this.$t("Phone")'   data-placeholder-focus="false"  @click="emitFormData('phone')" />
              </div>

          </div>
      </div>
      <div class="col-md-2 no-pad-left-10">
          <button type="submit" class="primary-btn serach-btn" @click.prevent="submit_btn"><i class="fas fa-search"  ></i></button>
      </div>
  </div>
</div >

<div v-if="isclient">
       <table class="table-area">
          <tr>
            <th>{{$t("name")}}</th>
          </tr>
          <tr >
            <td>
                <span v-if="client.photo">
                        <img :src="`${client.photo}`" :alt="client.lastname" class="product-img" />
                </span>
                <span v-else >
                        <img v-if="client.gender == 'm'"  src="/products/men-avatar.png" class="product-img" />
                        <img v-else  src="/products/women-avatar.png" class="product-img" />
                </span>
              <h5 class="product-name">{{ client.firstname + ' ' + client.lastname }}</h5>
            </td>
          </tr>
       </table>


    <div class="col-md-8">
      <div class="form-group">
        <label class="floatleft">{{ $t("eventname") }} *</label>
        <input
          v-model.trim="name"
          class="form-control"
          type="text"
          placeholder=""
        />
      </div>
    </div>

      <div class="col-md-8">
      <div class="form-group">
        <label class="floatleft">{{ $t("eventtask") }} *</label>
          <v-textarea
              v-model.trim="details"
          ></v-textarea>
      </div>
    </div>

      <div class="col-md-8">
      <div class="form-group">
                  <label style="font-size: 1rem; color: #707728"  class="floatleft">{{
                    $t("Start date")
                  }}</label>
                  <datetime
                    type="datetime"
                    class="input is-large"
                    placeholder="yyyy-MM-dd HH:mm"
                    value-zone="LOCAL"
                    zone="LOCAL"
                    format="yyyy-MM-dd HH:mm"
                    :phrases="{ ok: 'Continue', cancel: 'Exit' }"
                    :hour-step="1"
                    :minute-step="5"
                    :week-start="7"
                    use12-hour
                    auto
                    v-model.trim="tstart"
                    @input="($event) => ValidateEndDate()"
                  ></datetime>
                </div>
              </div>
      <div class="col-md-8">
      <div class="form-group">
                  <label  style="font-size: 1rem; color: #707728"  class="floatleft">{{
                    $t("End date")
                  }}</label>
                  <datetime
                    type="datetime"
                    class="input is-large"
                    placeholder="yyyy-MM-dd HH:mm"
                    value-zone="LOCAL"
                    zone="LOCAL"
                    format="yyyy-MM-dd HH:mm"
                    :phrases="{ ok: 'Continue', cancel: 'Exit' }"
                    :hour-step="1"
                    :minute-step="5"
                    :week-start="7"
                    use12-hour
                    auto
                    v-model.trim="tend"
                    @input="($event) => ValidateEndDate()"
                  ></datetime>
                </div>
              </div>
      <div class="col-md-8">
      <div class="form-group">

        <label class="floatleft">{{ $t("color") }} *</label>
        <input
          v-model.trim="color"
          class="form-control"
          type="color"
          placeholder=""
        />
        </div>
        </div>

</div> 
              <v-checkbox v-if="isclient"
                v-model="repeatevent"
                :label='this.$t("custom")'
                color="red"
              ></v-checkbox>
              <v-card v-if="repeatevent == true">
                <v-card>
                  <p class="floatleft">{{ $t("Repeat every") }}</p>

                <div class="col-md-8">
                <div class="form-group">

                    <label class="floatleft">{{ $t("event number of repetion") }} *</label>
                    <input
                    v-model.trim="intervalby"
                    class="form-control"
                    type="number"
                    placeholder=""
                    />
                    </div>
                    </div>

                <div class="col-md-6">
                <div class="form-group">
                    <label class="floatleft">{{$t('Repeatby')}}</label>
                    <select class="form-control minimal" v-model="defaultselectedrepeatby">
                    <option  :key="2" :value="2">week</option>
                    <option v-for="calitem of repeatedbyitems" :key="calitem.value" :value="calitem.value">{{calitem['name']}}</option>
                    </select>
                </div>
                </div>

                </v-card>
                <p class="floatleft">{{ $t("Repeat on") }}</p>

                <v-avatar ref="suday" class="suday" @click.stop="slectday('suday')">
                  <span class="white--text headline">{{ $t("Sunday") }}</span>
                </v-avatar>
                <v-avatar ref="moday" class="moday" @click.stop="slectday('moday')">
                  <span class="white--text headline">{{ $t("Monday") }}</span>
                </v-avatar>
                <v-avatar ref="thday" class="thday" @click.stop="slectday('thday')">
                  <span class="white--text headline">{{ $t("Tuesday") }}</span>
                </v-avatar>
                <v-avatar ref="weday" class="weday" @click.stop="slectday('weday')">
                  <span class="white--text headline">{{ $t("Wednesday") }}</span>
                </v-avatar>
                <v-avatar ref="tuday" class="tuday" @click.stop="slectday('tuday')">
                  <span class="white--text headline">{{ $t("Thursday") }}</span>
                </v-avatar>
                <v-avatar ref="frday" class="frday" @click.stop="slectday('frday')">
                  <span class="white--text headline">{{ $t("Friday") }}</span>
                </v-avatar>
                <v-avatar ref="sday" class="sday" @click.stop="slectday('sday')">
                  <span class="white--text headline">{{ $t("Saturday") }}</span>
                </v-avatar>

                <p class="floatleft">{{ $t("Ends") }}</p>

                <v-radio-group v-model="endschoice">
                  <v-radio :label='this.$t("never")' value="0"></v-radio>
                  <v-radio :label='this.$t("on")' value="1"></v-radio>
                  <div class="field">
                    <div class="control">
                      <label style="font-size: 1rem; color: #707728">{{
                        $t("limited date")
                      }}</label>
                      <datetime
                        type="datetime"
                        class="input is-large"
                        placeholder="yyyy-MM-dd HH:mm"
                        value-zone="LOCAL"
                        zone="LOCAL"
                        format="yyyy-MM-dd HH:mm"
                        :phrases="{ ok: 'Continue', cancel: 'Exit' }"
                        :hour-step="1"
                        :minute-step="5"
                        :week-start="7"
                        use12-hour
                        auto
                        v-model.trim="limited"
                        @input="($event) => ValidateEndDate()"
                      ></datetime>
                    </div>
                  </div>

                  <v-radio :label='this.$t("after")' value="2"></v-radio>
                  <v-text-field
                    v-if="endschoice == 2"
                    v-model="counter"
                    type="number"
                    label="event number of repetion"
                  ></v-text-field>
                </v-radio-group>
              </v-card>
              <v-btn v-if="isclient"
                type="submit"
                color="primary"
                class="mr-4"
                @click.stop="dialogDate = false"
              >
                {{ $t("create event") }}
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="setDialogDate"
          @change="updateRange"
        ></v-calendar>
        <v-dialog
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          :position-x="0"
          :position-y="0"
          absolute
          offset-y
        >
          <v-card color="grey lighten-4" :width="350" flat>

              <div class="flex-grow-1 photo ">
                <span v-if="selectedEvent.photo">
                        <img :src="`${selectedEvent.photo}`" :alt="selectedEvent.lastname" class="calclient-img" />
                </span>
                <span v-else >
                        <img v-if="selectedEvent.gender == 'm'"  src="/products/men-avatar.png" class="calclient-img" />
                        <img v-else  src="/products/women-avatar.png" class="calclient-img" />
                </span>
              </div>

            <v-toolbar :color="selectedEvent.color" dark>

              <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-checkbox
                class="deleteallsame"
                v-model="allsame"
                label="delete all same"
                color="red"
              ></v-checkbox>
            </v-toolbar>

            <v-card-text>
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <form v-if="currentlyEditing !== selectedEvent.id">
                {{ selectedEvent.details }}
              </form>
              <form v-else>
                <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width: 100%"
                  :min-height="100"
                  placeholder="add note"
                >
                </textarea-autosize>
              </form>
            </v-card-text>

            <v-card-actions>
              <v-btn class="vbtnafter" text color="secondary" @click="selectedOpen = false">
                      <v-icon  style="font-size:12px;">fas fa-close</v-icon>
              </v-btn>
              <v-btn class="vbtnafter"
                v-if="currentlyEditing !== selectedEvent.id"
                text
                @click.prevent="editEvent(selectedEvent)"
              >
                <v-icon style="font-size:12px;">fas fa-edit</v-icon>
              </v-btn>
              <v-btn class="vbtnafter"
                text
                v-else
                type="submit"
                @click.prevent="updateEvent(selectedEvent)"
              >
                   <v-icon  style="font-size:12px;">fas fa-save</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-sheet>

    </v-col>
  </v-row>
</template>

<script>

import moment from "moment";
import { RRule, RRuleSet, rrulestr } from "rrule";
export default {
  data: () => ({
    today:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate(),
    focus: new Date().toUTCString(),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    name: null,
    details: null,
    start: null,
    end: null,
    tstart: null,
    tend: null,
    color: "#1976D2", // default event color
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    newevents: [],
    dialog: false,
    dialogDate: false,
    guid: null,
    dialogDelete: false,
    allsame: false,
    defaultselectedrepeatby: {
      name: "week",
      value: RRule.WEEKLY,
    },
    repeatedbyitems: [
      {
        name: "day",
        value: RRule.DAILY,
      },
      {
        name: "week",
        value: RRule.WEEKLY,
      },
      {
        name: "month",
        value: RRule.MONTHLY,
      },
      {
        name: "year",
        value: RRule.YEARLY,
      },
    ],

    //---------- Repeat days
    repeatevent: false,
    tzidby: "America/New_York",
    byweekdayarr: [],
    sday: false,
    moday: true,
    thday: false,
    weday: false,
    tuday: false,
    frday: false,
    suday: false,
    intervalby: 0,
    repeattimes: null,
    endschoice: 0,
    limited: null,
    counter: 0,
    //----------------------
    search:{
            name:null,
            email:null,
            phone:null,
            ordernumber:null,
            searchtype:null
            },

    client:null,
    isclient: false,
    eventtyps:[],
    eventtype:null
    
  }),

  props: {
    propevents: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.getEvents(); 
        this.eventtyps.push({"name":this.$t("eventnormal"),"value":"normal"})
        this.eventtyps.push({"name":this.$t("eventOrder"),"value":"order"})

        this.eventtype = this.eventtyps[0];
  },
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;
      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;
      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
  methods: {

    getEvents() {
      if (this.propevents.length > 0) {
        this.events = [];
        this.propevents.forEach((event) => {
          this.events.push({
            color: event.color,
            details: event.details,
            end: new Date(event.end),
            id: event.id,
            name: event.name,
            start: new Date(event.start),
            strattimestamp: event.starttimestamp,
            endtimestamp: event.endtimestamp,
            repeateventid: event.repeateventid,
            clientid: event.clientid,
            eventtype: event.eventtype,
            photo: event.photo
          });
        });
      }
    },
    initeventcreationdata() {
      this.repeatevent = false;
      (this.name = ""),
        (this.details = ""),
        (this.tstart = ""),
        (this.tend = ""),
        (this.defaultselectedrepeatby = { name: "week", value: RRule.WEEKLY }),
        (this.intervalby = 1),
        (this.byweekdayarr = []);
    },
    setDialogToDay() {
      this.initeventcreationdata();
      this.dialogDate = true;
      var datetoday = new Date();
      this.tstart = datetoday;
      this.tend = datetoday;
    },
    setDialogDate({ date }) {
      this.initeventcreationdata();
      this.dialogDate = true;
      this.focus = date;
      var dt = new Date(date).toISOString().substr(0, 10);
      this.tstart = date;
      this.tend = date;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },

    async addEvent() {

      this.guid = this.generateUUID();
      let freq = 0;
      if (this.defaultselectedrepeatby.value === undefined)
        freq = this.defaultselectedrepeatby;
      else freq = this.defaultselectedrepeatby.value;

      if (this.moday) {
        this.byweekdayarr.push(RRule.MO);
      }
      if (this.sday) {
        this.byweekdayarr.push(RRule.SA);
      }
      if (this.thday) {
        this.byweekdayarr.push(RRule.TH);
      }
      if (this.weday) {
        this.byweekdayarr.push(RRule.WE);
      }
      if (this.tuday) {
        this.byweekdayarr.push(RRule.TU);
      }
      if (this.frday) {
        this.byweekdayarr.push(RRule.FR);
      }
      if (this.suday) {
        this.byweekdayarr.push(RRule.SU);
      }
      if (this.intervalby <= 0) this.intervalby = 1;

      let stdate = new Date(this.tstart);
      console.log("stdatestdate   ", stdate);
      let enddate = new Date(this.tend);
      let elimiteddate = new Date(this.limited);

      let startDay = stdate.getDate();
      let startMonth = stdate.getMonth();
      let startYear = stdate.getFullYear();
      let startMM = stdate.getHours();
      let startHH = stdate.getMinutes();

      let endDay = enddate.getDate();
      let endMonth = enddate.getMonth();
      let endYear = enddate.getFullYear();
      let endMM = enddate.getHours();
      let endHH = enddate.getMinutes();

      let untilDay = elimiteddate.getDate();
      let untilMonth = elimiteddate.getMonth();
      let untilYear = elimiteddate.getFullYear();
      let untilMM = elimiteddate.getHours();
      let untilHH = elimiteddate.getMinutes();

      let rule = null;
      if (this.name && this.tstart && this.tend) {
        if (!this.repeatevent) this.endschoice = "0";
        else {
          (this.sday = false),
            (this.moday = true),
            (this.thday = false),
            (this.weday = false),
            (this.tuday = false),
            (this.frday = false),
            (this.suday = false);
        }
        if (this.color === "") this.color = "#8f2828";

        switch (this.endschoice) {
          case "0":
            let ddst = new Date(this.tstart);
            if (new Date(this.tstart).toTimeString().includes("00:00:00")) {
              ddst.setHours(23);
              ddst.setMinutes(58);
              ddst.setSeconds(58);
            }

            let ddsend = new Date(this.tend);
            if (new Date(this.tend).toTimeString().includes("00:00:00")) {
              ddsend.setHours(23);
              ddsend.setMinutes(58);
              ddsend.setSeconds(58);
            }
            let strattimestamp = this.ConvertDatetimetoTimestamp(ddst);
            let endtimestamp = this.ConvertDatetimetoTimestamp(ddsend);

            this.newevents = [];
            this.newevents.push({
              id: this.guid + 1,
              name: this.name,
              details: this.details,
              start: ddst,
              end: ddsend,
              color: this.color,
              repeateventid: this.guid,
              strattimestamp: strattimestamp,
              endtimestamp: endtimestamp,
              clientid:this.client.id,
              eventtype:this.eventtype
            });


            this.events.push({
              id: this.guid + 1,
              name: this.name,
              details: this.details,
              start: ddst,
              end: ddsend,
              color: this.color,
              repeateventid: this.guid,
              strattimestamp: strattimestamp,
              endtimestamp: endtimestamp,
              clientid:this.client.id,
              eventtype:this.eventtype
            });
            break;
          case "1":
            rule = new RRule({
              freq: freq,
              dtstart: new Date(startYear, startMonth, startDay, startHH, startMM, 0),
              until: new Date(untilYear, untilMonth, untilDay, untilHH, untilMM, 0),
              tzid: this.tzidby,
              interval: this.intervalby,
              byweekday: this.byweekdayarr,
              wkst: RRule.MO,
            }).all();

      this.newevents = [];
            if (rule.length > 0) {
              for (var i = 0; i < rule.length; i++) {
                let ddst = rule[i];
                if (new Date(rule[i]).toTimeString().includes("00:00:00")) {
                  ddst.setHours(23);
                  ddst.setMinutes(58);
                  ddst.setSeconds(58);
                }
                let enddt = new Date(rule[i]);
                enddt.setHours(23);
                enddt.setMinutes(58);
                enddt.setSeconds(58);
                ddst.setHours(stdate.getHours());
                ddst.setMinutes(stdate.getMinutes());

                let strattimestamp = this.ConvertDatetimetoTimestamp(ddst);
                let endtimestamp = this.ConvertDatetimetoTimestamp(enddt);

                this.newevents.push({
                  id: this.guid + i + 1,
                  name: this.name,
                  details: this.details,
                  start: ddst,
                  end: enddt,
                  color: this.color,
                  repeateventid: this.guid,
                  strattimestamp: strattimestamp,
                  endtimestamp: endtimestamp,
                });


                this.events.push({
                  id: this.guid + i + 1,
                  name: this.name,
                  details: this.details,
                  start: ddst,
                  end: enddt,
                  color: this.color,
                  repeateventid: this.guid,
                  strattimestamp: strattimestamp,
                  endtimestamp: endtimestamp,
                });
              }
            }

            break;
          case "2":
            rule = new RRule({
              freq: freq,
              dtstart: new Date(startYear, startMonth, startDay, startHH, startMM, 0),
              tzid: this.tzidby,
              count: this.counter,
              interval: this.intervalby,
              byweekday: this.byweekdayarr,
              wkst: RRule.MO,
            }).all();

      this.newevents = [];
            if (rule.length > 0) {
              for (var i = 0; i < rule.length; i++) {
                let ddst = rule[i];
                if (new Date(rule[i]).toTimeString().includes("00:00:00")) {
                  ddst.setHours(23);
                  ddst.setMinutes(58);
                  ddst.setSeconds(58);
                }
                let enddt = new Date(rule[i]);
                enddt.setHours(23);
                enddt.setMinutes(58);
                enddt.setSeconds(58);
                ddst.setHours(stdate.getHours());
                ddst.setMinutes(stdate.getMinutes());

                let strattimestamp = this.ConvertDatetimetoTimestamp(ddst);
                let endtimestamp = this.ConvertDatetimetoTimestamp(enddt);

                this.newevents.push({
                  id: this.guid + i + 1,
                  name: this.name,
                  details: this.details,
                  start: ddst,
                  end: enddt,
                  color: this.color,
                  repeateventid: this.guid,
                  strattimestamp: strattimestamp,
                  endtimestamp: endtimestamp,
                });

                this.events.push({
                  id: this.guid + i + 1,
                  name: this.name,
                  details: this.details,
                  start: ddst,
                  end: enddt,
                  color: this.color,
                  repeateventid: this.guid,
                  strattimestamp: strattimestamp,
                  endtimestamp: endtimestamp,
                });
              }
            }
            break;
          default:
            break;
        }
        (this.name = ""),
          (this.details = ""),
          (this.start = ""),
          (this.end = ""),
          (this.color = ""),
          (this.defaultselectedrepeatby = { name: "week", value: RRule.WEEKLY }),
          (this.intervalby = 1),
          (this.byweekdayarr = []);
        this.emitEventsData();
      } else {
        alert("You must enter event name, start, and end time");
      }
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },
    async updateEvent(ev) {
      let updateallsameid;
      let updateallsamedetails;
      for (var i = 0; i < this.events.length; i++)
        if (this.events[i].id === ev.id) {
          updateallsameid = this.events[i].repeateventid;
          updateallsamedetails = this.events[i].details;
          break;
        }
      if (this.allsame) {
        for (var i = 0; i < this.events.length; i++) {
          if (this.events[i].repeateventid === updateallsameid) {
            this.events[i].details = updateallsamedetails;
          }
        }
      }
      this.selectedOpen = false;

      (this.selectedOpen = false), (this.currentlyEditing = null);
      this.emitEventsData();
    },

    async deleteEvent(ev) {
      let deleteallsameid;
      for (var i = 0; i < this.events.length; i++)
        if (this.events[i].id === ev) {
          deleteallsameid = this.events[i].repeateventid;
          this.events.splice(i, 1);
          break;
        }
      if (this.allsame) {
        let eventsloc = [...this.events];
        for (var i = 0; i < this.events.length; i++) {
          if (this.events[i].repeateventid === deleteallsameid) {
            eventsloc.pop(this.events[i]);
          }
        }
        this.events = [...eventsloc];
      }
      this.selectedOpen = false;
      this.emitEventsData();
    },

    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
    slectday(selectedday) {
      let colorfalse = "#308d85";
      let colortrue = "#66bb6a";
      switch (selectedday) {
        case "sday":
          if (this.sday === false) {
            this.$refs["sday"].$el.style.backgroundColor = colortrue;
            this.sday = true;
          } else {
            this.sday = false;
            this.$refs["sday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "moday":
          if (this.moday === false) {
            this.$refs["moday"].$el.style.backgroundColor = colortrue;
            this.moday = true;
          } else {
            this.moday = false;
            this.$refs["moday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "thday":
          if (this.thday === false) {
            this.$refs["thday"].$el.style.backgroundColor = colortrue;
            this.thday = true;
          } else {
            this.thday = false;
            this.$refs["thday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "weday":
          if (this.weday === false) {
            this.$refs["weday"].$el.style.backgroundColor = colortrue;
            this.weday = true;
          } else {
            this.weday = false;
            this.$refs["weday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "tuday":
          if (this.tuday === false) {
            this.$refs["tuday"].$el.style.backgroundColor = colortrue;
            this.tuday = true;
          } else {
            this.tuday = false;
            this.$refs["tuday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "frday":
          if (this.frday === false) {
            this.$refs["frday"].$el.style.backgroundColor = colortrue;
            this.frday = true;
          } else {
            this.frday = false;
            this.$refs["frday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        case "suday":
          if (this.suday === false) {
            this.$refs["suday"].$el.style.backgroundColor = colortrue;
            this.suday = true;
          } else {
            this.suday = false;
            this.$refs["suday"].$el.style.backgroundColor = colorfalse;
          }
          this.checkifalldaysarefalse();
          break;
        default:
        // code block
      }
    },
    checkifalldaysarefalse() {
      if (
        !this.sday &&
        !this.moday &&
        !this.thday &&
        !this.weday &&
        !this.tuday &&
        !this.frday &&
        !this.suday
      ) {
        this.$refs["moday"].$el.style.backgroundColor = "#66bb6a";
        this.moday = true;
      }
    },

    emitEventsData() {
      this.$emit("calUpdatedEvents", { data: this.newevents });
    },
    generateUUID() {
      var d = new Date().getTime();
      /* if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        */
      let newGuid = Math.floor(1000000000000000 + Math.random() * 9000000000000000)
        .toString(36)
        .substr(0, 10);
      return newGuid;
    },
    ValidateEndDate() {},
    ConvertDatetimetoTimestamp(datetimetoconvert) {
      let datetime = datetimetoconvert;
      let unixtime = Date.parse(datetime) / 1000;
      return unixtime;
    },

    emitFormData(input){
        this.isclient = false;
       if(input === "name"){
              this.search.searchtype = 'name'
              this.search.email = ''
              this.search.phone = ''
       }else
       if(input === "email"){
              this.search.searchtype = 'email'
              this.search.name = ''
              this.search.phone = ''
       }else
       if(input === "phone"){
              this.search.searchtype = 'phone'
              this.search.name = ''
              this.search.email = ''
       }
    },


    submit_btn(){
                if(this.search.searchtype  === "name"){
                      this.fnsearchbyname();
                }else
                if(this.search.searchtype  === "email"){
                      this.fnsearchbyemail();
                }else
                if(this.search.searchtype  === "phone"){
                      this.fnsearchbyphone();
                }
    },
          async fnsearchbyphone(){
        
            if(/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(this.search.phone))
            {
                this.search.phone = this.search.phone.replace('(','').replace(')','').replace('-','').replace(' ','')
                          await  this.$store
                              .dispatch("user/userclient/searchclientbyphone",this.search.phone)
                              .then((result) => {
                                  if(result.length > 0){
                                      this.isclient = true;
                                      this.client = result[0]
                                  }
                                })
                              .catch((error) => { console.log(error)});
            }
        },
      async fnsearchbyemail(){
        this.search.email = this.search.email.replace("'","").replace('"',"")

              if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.search.email))
                {
                            await  this.$store
                                .dispatch("user/userclient/searchclientbyemail",this.search.email)
                                .then((result) => {
                                  if(result.length > 0){
                                      this.isclient = true;
                                      this.client = result[0]
                                  }
                                })
                                .catch((error) => { console.log(error)});
                }
        },
      async fnsearchbyname(){
            this.search.name = this.search.name.replace("'","").replace('"',"")
            if(this.search.name != ""){
                        await  this.$store
                            .dispatch("user/userclient/searchclientbyname",this.search.name)
                            .then((result) => {

                                  if(result.length > 0){
                                      this.isclient = true;
                                      this.client = result[0]
                                  }
                                })
                            .catch((error) => { console.log(error)});
            }
        },

  },
};
</script>
<style>

.calclient-img {
    float: left;
    margin-right: 15px;
    margin-top: 18px;
    margin-bottom: 2px; 
    width: 100px;
}

.photo{
    margin: 8px;
}



.v-sheet.v-card:not(.v-sheet--outlined) {
   /* box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);*/
    padding:25px;
       /* border-radius: 4px;*/
   /* overflow-y: auto;*/
   /* pointer-events: auto;*/
  /*  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);*/
    width: 100%;
   /* z-index: inherit;*/
  /* box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);*/
}







.form-area button.serach-btn {
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border: none;
    font-size: 14px;
    background: #81B44C;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.01px;
    width: 80%;
    height: 40px;
    transition: all 0.25s ease-out;
    -webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
}


.styled-input.multi {
    height: 40px;
}
.styled-input.multi {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 2px 0;
    height: auto;
}

.styled-input {
    float: left;
    background: #fff;
    border: 1px solid #EFEFEF;
    border-radius: 3px;
    box-shadow: inset 0 -1px 4px 0 rgb(0 0 0 / 20%);
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    font-family: "Lato", sans-serif;
}

.styled-input input, .styled-input textarea, .styled-input select {
    color: #4A4A4A;
    border: 0;
    width: 90%;
    font-size: 11px;
    padding-top: 20px;
    background: transparent;
}

select.minimal {
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}

select.minimal:focus {
  background-image:
    linear-gradient(45deg, rgb(134, 176, 201) 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, rgb(130, 178, 201) 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  border-color: rgb(181, 229, 233);
  outline: 0;
}


.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0px 0px 0px -0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);
}
.input {
    border: 0px solid rgba(0, 0, 0, .09);
    border: 0px solid var(--alga-border-color);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

div.vdatetime.input.is-large{
    width: 80%;
}
input.vdatetime-input{
    width: 80%;
}

.v-textarea textarea {
    align-self: stretch;
    flex: 1 1 auto;
    line-height: 0.98rem;
    max-width: 100%;
    min-height: 32px;
    outline: none;
    padding: 0;
    width: 100%;
}

.vdatetime-fade-enter-active,.vdatetime-fade-leave-active{transition:opacity .4s}.vdatetime-fade-enter,.vdatetime-fade-leave-to{opacity:0}.vdatetime-overlay{z-index:999;position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.5);transition:opacity .5s}.vdatetime-popup{box-sizing:border-box;z-index:1000;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:340px;max-width:calc(100% - 30px);box-shadow:0 1px 3px 0 rgba(0,0,0,.3);color:#444;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;line-height:1.18;background:#fff;-webkit-tap-highlight-color:transparent}.vdatetime-popup *{box-sizing:border-box}.vdatetime-popup__header{padding:18px 30px;background:#3f51b5;color:#fff;font-size:32px}.vdatetime-popup__title{margin-bottom:8px;font-size:21px;font-weight:300}.vdatetime-popup__year{font-weight:300;font-size:14px;opacity:.7;cursor:pointer;transition:opacity .3s}.vdatetime-popup__year:hover{opacity:1}.vdatetime-popup__date{line-height:1;cursor:pointer}.vdatetime-popup__actions{padding:0 20px 10px 30px;text-align:right}.vdatetime-popup__actions__button{display:inline-block;border:none;padding:10px 20px;background:0 0;font-size:16px;color:#3f51b5;cursor:pointer;transition:color .3s}.vdatetime-popup__actions__button:hover{color:#444}.vdatetime-calendar__navigation--next:hover svg path,.vdatetime-calendar__navigation--previous:hover svg path{stroke:#888}.vdatetime-calendar__navigation,.vdatetime-calendar__navigation *{box-sizing:border-box}.vdatetime-calendar__navigation{position:relative;margin:15px 0;padding:0 30px;width:100%}.vdatetime-calendar__navigation--next,.vdatetime-calendar__navigation--previous{position:absolute;top:0;padding:0 5px;width:18px;cursor:pointer}.vdatetime-calendar__navigation--next svg,.vdatetime-calendar__navigation--previous svg{width:8px;height:13px}.vdatetime-calendar__navigation--next svg path,.vdatetime-calendar__navigation--previous svg path{transition:stroke .3s}.vdatetime-calendar__navigation--previous{left:25px}.vdatetime-calendar__navigation--next{right:25px;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.vdatetime-calendar__current--month{text-align:center;text-transform:capitalize}.vdatetime-calendar__month{padding:0 20px;transition:height .2s}.vdatetime-calendar__month__day,.vdatetime-calendar__month__weekday{display:inline-block;width:14.28571%;line-height:36px;text-align:center;font-size:15px;font-weight:300;cursor:pointer}.vdatetime-calendar__month__day>span,.vdatetime-calendar__month__weekday>span{display:block;width:100%;position:relative;height:0;padding:0 0 100%;overflow:hidden}.vdatetime-calendar__month__day>span>span,.vdatetime-calendar__month__weekday>span>span{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;bottom:0;left:0;border:0;border-radius:50%;transition:background-color .3s,color .3s}.vdatetime-calendar__month__weekday{font-weight:700}.vdatetime-calendar__month__day:hover>span>span{background:#eee}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span{color:#fff;background:#3f51b5}.vdatetime-calendar__month__day--disabled{opacity:.4;cursor:default}.vdatetime-calendar__month__day--disabled:hover>span>span{color:inherit;background:0 0}.vdatetime-time-picker__list::-webkit-scrollbar-thumb{background:#ccc}.vdatetime-time-picker__list::-webkit-scrollbar-track{background:#efefef}.vdatetime-time-picker *{box-sizing:border-box}.vdatetime-time-picker{box-sizing:border-box}.vdatetime-time-picker::after{content:'';display:table;clear:both}.vdatetime-time-picker__list{float:left;width:50%;height:305px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vdatetime-time-picker__list::-webkit-scrollbar{width:3px}.vdatetime-time-picker__with-suffix .vdatetime-time-picker__list{width:33.3%}.vdatetime-time-picker__item{padding:10px 0;font-size:20px;text-align:center;cursor:pointer;transition:font-size .3s}.vdatetime-time-picker__item:hover{font-size:32px}.vdatetime-time-picker__item--selected{color:#3f51b5;font-size:32px}.vdatetime-time-picker__item--disabled{opacity:.4;cursor:default;font-size:20px!important}.vdatetime-year-picker__list::-webkit-scrollbar-thumb{background:#ccc}.vdatetime-year-picker__list::-webkit-scrollbar-track{background:#efefef}.vdatetime-year-picker *{box-sizing:border-box}.vdatetime-year-picker{box-sizing:border-box}.vdatetime-year-picker::after{content:'';display:table;clear:both}.vdatetime-year-picker__list{float:left;width:100%;height:305px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vdatetime-year-picker__list::-webkit-scrollbar{width:3px}.vdatetime-year-picker__item{padding:10px 0;font-size:20px;text-align:center;cursor:pointer;transition:font-size .3s}.vdatetime-year-picker__item:hover{font-size:32px}.vdatetime-year-picker__item--selected{color:#3f51b5;font-size:32px}.vdatetime-year-picker__item--disabled{opacity:.4;cursor:default}.vdatetime-year-picker__item--disabled:hover{color:inherit;background:0 0}.vdatetime-month-picker__list::-webkit-scrollbar-thumb{background:#ccc}.vdatetime-month-picker__list::-webkit-scrollbar-track{background:#efefef}.vdatetime-month-picker *{box-sizing:border-box}.vdatetime-month-picker{box-sizing:border-box}.vdatetime-month-picker::after{content:'';display:table;clear:both}.vdatetime-month-picker__list{float:left;width:100%;height:305px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vdatetime-month-picker__list::-webkit-scrollbar{width:3px}.vdatetime-month-picker__item{padding:10px 0;font-size:20px;text-align:center;cursor:pointer;transition:font-size .3s}.vdatetime-month-picker__item:hover{font-size:32px}.vdatetime-month-picker__item--selected{color:#3f51b5;font-size:32px}.vdatetime-month-picker__item--disabled{opacity:.4;cursor:default}.vdatetime-month-picker__item--disabled:hover{color:inherit;background:0 0}
.floatleft {
        float:left;
}
.deleteallsame {
  margin-top: 10% !important;
  margin-left: 10% !important;
  float: right !important;
  font-size: small  !important;
}
.mdi-checkbox-blank-outline{
    max-width: 20%;
    min-height: 20px;
}
.v-label {
    font-size: 10px;
    line-height: 1;
    margin-right: 2px;
    min-height: 8px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
v-btn.cardactionclose {
  background-color: rgb(111, 25, 187);
  margin-left: 4%;
  margin-top: 2%;
}
.vbtnafter {
  background-color: rgb(111, 25, 187);
  color:white !important;
  width:6%;
  height:4%!important;
}

.cardactionclosex {
  color: #eee4e4 !important;
  cursor: pointer !important;
}
.event-type {
  background-color: rgb(111, 25, 187);
  margin-left: 4%;
  margin-right: 8%;
  margin-top: 2%;
  color:white;
  font-size: 12px;
  width:250px;
}

.eventtype {
  background-color: rgb(111, 25, 187);
  margin-left: 4%;
  margin-top: 2%;
}

.eventtype {
  color: #eee4e4 !important;
  cursor: pointer !important;
}

.v-btn:not(.v-btn--outlined).primary,
.v-btn:not(.v-btn--outlined).secondary,
.v-btn:not(.v-btn--outlined).accent,
.v-btn:not(.v-btn--outlined).success,
.v-btn:not(.v-btn--outlined).error,
.v-btn:not(.v-btn--outlined).warning,
.v-btn:not(.v-btn--outlined).info {
  background-color: blueviolet;
}

.sday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.frday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.tuday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.weday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.thday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.moday {
  background-color: #66bb6a;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}
.suday {
  background-color: #308d85;
  margin-right: 4px;
  font-size: 18px;
  margin-right: 4px;
  cursor: pointer;
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 0.5;
}
.v-btn--fab.v-size--small {
  height: 20px;
  width: 20px;
}

.v-btn:not(.v-btn--round).v-size--default {
  min-width: 24px;
  padding: 0 16px;
  font-size: 12px;
  margin-right: 20px;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 4px 16px;
}
.v-toolbar__content,
.v-toolbar__extension {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
}

.v-calendar-weekly {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  margin-top: 2%;
}
.v-toolbar__title {
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (max-width: 1266px) {
  .v-toolbar__title {
    font-size: 0.8rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .v-dialog {
    border-radius: 4px;
    margin: 24px;
    overflow-y: auto;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 36%;
    z-index: inherit;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
}
}

@media screen and (max-width: 1000px) {

.v-dialog {
    border-radius: 4px;
    margin: 24px;
    overflow-y: auto;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 58%;
    z-index: inherit;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
}

@media screen and (max-width: 1000px) {
.v-sheet.v-card:not(.v-sheet--outlined) {
   /* box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);*/
    padding:25px;
       /* border-radius: 4px;*/
   /* overflow-y: auto;*/
   /* pointer-events: auto;*/
  /*  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);*/
    width: 100%;
   /* z-index: inherit;*/
  /* box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);*/
}
}


header.v-sheet.theme--dark.v-toolbar{
position:relative;
height: 58px !important;
}
  .v-calendar-weekly {
    width: 100%;
    height: 80%;
    margin-top: 18%;
  }
  .v-toolbar__content,
  .v-toolbar__extension {
    align-items: center;
    display: contents;
    position: relative;
    z-index: 0;
  }
  .v-btn__content {
    font-size: 0.48rem;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    min-width: 24px;
    padding: 0 16px;
    font-size: 8px;
    margin-top: 2%;
    margin-bottom: 8%;
  }

  .v-toolbar__title {
    font-size: 0.88rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }

  .deleteallsame {
  margin-top: 2% !important;
  margin-left: 2% !important;
  float: right !important;
  font-size: small  !important;
}
.mdi-checkbox-blank-outline{
    max-width: 2%;
    min-height: 2px;
}
.v-label {
    font-size: 10px;
    line-height: 1;
    min-height: 8px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
}
</style>
