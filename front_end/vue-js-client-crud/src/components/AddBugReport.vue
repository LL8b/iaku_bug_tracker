<template>
  <div class="submit-form">
    <div v-if="!submitted">
      

      <div class="form-group"><br><br>
        <label id="label" for="title">title</label>
        <input
          class="form-control"
          id="title"
          required
          v-model="bug_report.title"
          name="title"
        />
      </div><br>
<!-- issue form input -->
      <div class="form-group"><br><br>
        <label id="label" for="issue">issue</label><br>
    
      <form id="form" >
         <textarea 
          rows = "5" 
          cols = "60"
         
          class="form-control"
          id="issue"
          required
          v-model="bug_report.issue"
          name="issue">
            Enter details here...
         </textarea>
         
      </form>
      
      </div>
<!-- assigned to form input -->
      <div class="form-group"><br><br>
        <label id="label" for="assigned_to">Assigned To</label>
        <input
          class="form-control"
          id="assigned_to"
          required
          v-model="bug_report.assigned_to"
          name="assigned_to"
        />
      </div>
<!-- status dropdown -->
      <div class="form-group"><br><br>
      <label id="label" for="resolution">Status</label>
   <select class="form-control" @change="changeStatusTitle($event)" >
    <option value="" selected disabled>Choose</option>
    <option v-for="statusTitle in statusTitles" :value="statusTitle.id" :key="statusTitle.id">{{ statusTitle.name }}</option>
  </select>
  <br><br>
  <p><span>Selected Status Title: {{ selectedStatusTitle  }}</span></p>
</div>


<!-- _______________________________ -->      
<!-- save new report button -->      
      <button @click="saveBugReport" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBugReport">Add</button>
    </div><br><br><br><br>
  </div>
</template>

<script>
import BugReportDataService from "../services/BugReportDataService";

export default {
  name: "add-report",
  data() {
    return {
      bug_report: {
        id: null,
        title: "",
        issue: "",
        assigned_to: "",
        resolution: "",
        published: false
      },
      submitted: false,
    
       statusTitles: [
       { name: "Confirmed", id: 1 },
       { name: "In Review", id: 2 },
       { name: "In Progress", id: 3 },
       { name: "Fixed", id: 4 }
    ],
    selectedStatusTitle: null
    };
  },
  methods: {
    saveBugReport() {
      var data = {
        title: this.bug_report.title,
        issue: this.bug_report.issue,
        assigned_to: this.bug_report.assigned_to,
        resolution: this.bug_report.resolution
      };

      BugReportDataService.create(data)
        .then(response => {
          this.bug_report.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newBugReport() {
      this.submitted = false;
      this.bug_report = {};
    },

    changeStatusTitle (event) {
      this.selectedStatusTitle = event.target.options[event.target.options.selectedIndex].text
      this.bug_report.resolution = event.target.options[event.target.options.selectedIndex].text
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}