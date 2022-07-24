<template>
  <div class="tab-content" id="main_form">
      <div class="rowcalevents">
        <div class="col-md-12">
          <form @input="emitFormData" class="course-create-form">
            <div class="">
              <div class="field">
                <div class="control">
                  <aside>xfbvfsd</aside>
                  <div data-app>
                    <Cal
                      :propevents="eventstosend"
                      @calUpdatedEvents="mergeEventsData"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import Cal from "~/components/shared/calendar";
export default {
  async fetch({ store, params }) {
    await store.dispatch("user/userclient/getEvents", store.getters['auth/authUser'].id)
  },
  components: {
    VueCtkDateTimePicker,
    Cal,
  },
  data() {
    return {
      agentavailability: {},
      events: [],
    };
  },
  computed: {
    ...mapState({
            eventstosend: (state) => state.user.userclient.userevents,
    }),

    isValid() {
      return this.events.length > 0;
    },
        ...mapGetters({              
            user: "auth/authUser",
            isAuth: "auth/isAuthenticated",
            isAdmin: "auth/isAdmin",
            userAuthority: "auth/userAuthority",
        }),
  },
  methods: {
    mergeEventsData({ data }) {
      this.events = [...this.events, ...data];

this.eventstosend = []


      data.forEach((event) => {
        let eventobj = new Object();
        eventobj.id_user = this.user.id;
        eventobj.username = this.user.username;
        eventobj.color = event.color;
        eventobj.details = event.details;
        eventobj.end = event.end;
        eventobj.start = event.start;
        eventobj.name = event.name;
        eventobj.repeateventid = event.repeateventid;
        eventobj.strattimestamp = event.strattimestamp;
        eventobj.endtimestamp = event.endtimestamp;
        eventobj.clientid = event.clientid,
        eventobj.eventtype = JSON.stringify(event.eventtype)
        this.eventstosend.push(eventobj);
      });
      console.log(" this.form.eventstosend   ", this.eventstosend);
      this.emitFormData();
    },
    emitFormData() {

         this.$store
        .dispatch("user/userclient/createClientEvents", this.eventstosend)
          .then((result) => {
            console.log("tag  result createAgent ==== local ", result);
          })
          .catch((error) => {
            console.log("tag  createAgent  error ", error);
          });
    },

    getevents(){
      let eventstosend = [];
        this.$store
        .dispatch("user/userclient/getEvents", this.user.id)
          .then((result) => {

            this.events = eventstosend;
            console.log(' this.events   ', this.events)
          })
          .catch((error) => {
            console.log("tag  getevents  error ", error);
          });
    },
    displayagentavailability() {},
    deleteAgentavailability(index) {},
    ShowAddMoreAvailability() {
      return "Add more availability";
    },
  },
 created() {
 },
  mounted() {
  },
};
</script>
<style scoped>

.rowcalevents {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-left: 18.8%;
}



@media screen and (max-width: 1400px) {
  .rowcalevents {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-left: 4.1%;
  }    
}

@media screen and (max-width: 980px) {
  .rowcalevents {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-left: -8.1%;
  }    
}

aside {
  height: 100%;
  width: 100%;
}
.tab-content{
  margin-left: 38px;
}
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.agentavailabilities {
  position: relative;
  width: 100%;
  /* -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
                    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);*/
}
.avail {
  float: left;
  width: 88%;
  height: auto;
  background: #fff;
  /*  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
                    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);*/
}
.close {
  float: left;
  width: 5%;
  cursor: pointer;
  color: rgb(218, 224, 224);
  font-size: 0.8em;
  background: rgb(28, 111, 236);
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
.close:hover {
  background: rgb(116, 48, 48);
  color: #eee;
}
.startdate {
  float: left;
  width: 80%;
  margin-right: 8px;
  height: auto;
  background: rgb(180, 248, 233);
  color: rgb(108, 112, 112);
}
.enddate {
  float: left;
  width: 80%;
  height: auto;
  background: rgb(76, 236, 183);
  color: rgb(108, 112, 112);
}
p.subtitle {
  padding-top: 1rem;
}
#VideoSection {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#video {
  background-color: #000000;
}
#canvas {
  display: none;
}
li {
  float: left;
  padding: 5px;
}
</style>
