
export default {
    data() {
      return {
                activeStep: 1,
                steps: [],
                isvalidDateTimePicker: true,
                isvalidExpireDateTimePicker: true,
                emailexistsv:false,
                usernameexistsv:false,
                oldusername:"",
                oldemail:""
            }
    },
    computed: {
      stepsLength() {
        return this.steps.length
      },
      isLastStep() {
        return this.activeStep === this.stepsLength
      },
      isFirstStep() {
        return this.activeStep === 1
      },
      progress() {
        return `${100 / this.stepsLength * this.activeStep}%`
      },
      activeComponent() {
        return this.steps[this.activeStep - 1]
      },
      isDateTimeValid(){
        return this.isvalidDateTimePicker 
      },
      isDateTimeExpireValid(){
        return this.isvalidExpireDateTimePicker 
      }
    },

    methods: {
      nextStep() {
        this.activeStep++
      },
      previousStep() {
        this.activeStep--
      },
      navigateTo(step) {
        this.activeStep = step
      },
      activeComponentClass(step) {
        return this.activeStep === step ? 'is-active' : ''
      },

  
      ValidateDOB(field) {
  
        //Get the date from the TextBox.
        var dateString = this.form[field];
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  
        let date = new Date(dateString)
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
  
        dateString = day + '/' + month + '/' + year;
        //Check whether valid dd/MM/yyyy Date Format.
        if (regex.test(dateString)) { 
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();
          
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                this.isvalidDateTimePicker = false;
                this.emitAgentValue(null,field,false)
                return false;
            }
  
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
  
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                  this.isvalidDateTimePicker = false;
                  this.emitAgentValue(null,field,false)
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                      this.isvalidDateTimePicker = false;
                      this.emitAgentValue(null,field,false)
                        return false;
                    }
                }
            }
            this.isvalidDateTimePicker = true;
            this.emitAgentValue(null,field,true)
             return true;
        } else {
          this.isvalidDateTimePicker = true;
          this.emitAgentValue(null,field,true)
            return true;
        }
  
    },
  
    ValidateExpiryDate(field) {
  
      //Get the date from the TextBox.
      var dateString = this.form[field];
      var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  
      let date = new Date(dateString)
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
  
      dateString = day + '/' + month + '/' + year;
      //Check whether valid dd/MM/yyyy Date Format.
      if (regex.test(dateString)) { 
          var parts = dateString.split("/");
          var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
          var dtCurrent = new Date();
  
          if (dtDOB.getFullYear() - dtCurrent.getFullYear() < 0) {
              this.isvalidExpireDateTimePicker = false;
              this.emitAgentValue(null,field,false)
              return false;
          }
  
          if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 0) {
              //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
              if (dtCurrent.getMonth() > dtDOB.getMonth()) {
                this.isvalidExpireDateTimePicker = false;
                this.emitAgentValue(null,field,false)
                  return false;
              }
              if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                  //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                  if (dtCurrent.getDate() >= dtDOB.getDate()) {
                    this.isvalidExpireDateTimePicker = false;
                    this.emitAgentValue(null,field,false)
                      return false;
                  }
              }
          }
          this.isvalidExpireDateTimePicker = true;
          this.emitAgentValue(null,field,true)
           return true;
      } else {
        this.isvalidExpireDateTimePicker = true;
        this.emitAgentValue(null,field,true)
          return true;
      }
  
  },
  
    uuid()
    {
            function randomDigit() {
                    if (crypto && crypto.getRandomValues) {
                    var rands = new Uint8Array(1);
                    crypto.getRandomValues(rands);
                    return (rands[0] % 16).toString(16);
                    } else {
                    return ((Math.random() * 16) | 0).toString(16);
                    }
            }
            var crypto = window.crypto || window.msCrypto;
            return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, randomDigit);
    }
  
    }
  }
  