<template>
  <div v-if="currentBugReport" id="report_view">
    <h4>Bug Report</h4>
    <form>
      <div >
        <label id="label" for="title">Title</label>
        <input type="text" id="title"
          v-model="currentBugReport.title"
        />
      </div><br>
      <!--- issue -->
   <div ><br><br>
        <label id="label" for="issue">issue</label><br>
    
      <form id="form" >
         <textarea 
          rows = "5" 
          cols = "60"
         
          class="form-control"
          id="issue"
          required
          v-model="currentBugReport.issue"
          name="issue">
            Enter details here...
         </textarea>
         
      </form>
      
      </div><br>

    
<!-- status _-->

      <div>
        <label id="label" for="resolution">Status</label>
        <input type="text"  id="resolution"
          v-model="currentBugReport.resolution"
        />
      </div><br>
      <div class="form-group">
        <label id="label" for="assigned_to">Assigned to</label>
        <input type="text" class="form-control" id="assigned_to"
          v-model="currentBugReport.assigned_to"
        />
      </div><br>

      <div class="form-group">
        <label id="label" ><strong>Published:</strong></label>
        {{ currentBugReport.published ? "Published" : "Pending" }}
      </div><br>
    </form>

    <button id="component_button" class="badge badge-primary mr-2"
      v-if="currentBugReport.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button id="component_button" v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button id="component_button" class="badge badge-danger mr-2"
      @click="deleteBugReport"
    >
      Delete
    </button>

    <button id="component_button" type="submit" class="badge badge-success"
      @click="updateBugReport"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import BugReportDataService from "../services/BugReportDataService";

export default {
  name: "bug_report",
  data() {
    return {
      currentBugReport: null,
      message: ''
    };
  },
  methods: {
    getBugReport(id) {
      BugReportDataService.get(id)
        .then(response => {
          this.currentBugReport = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentBugReport.id,
        title: this.currentBugReport.title,
        issue: this.currentBugReport.issue,
        resolution: this.currentBugReport.resolution,
        assigned_to: this.currentBugReport.assigned_to,
        published: status
      };

      BugReportDataService.update(this.currentBugReport.id, data)
        .then(response => {
          this.currentBugReport.published = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateBugReport() {
      BugReportDataService.update(this.currentBugReport.id, this.currentBugReport)
        .then(response => {
          console.log(response.data);
          this.message = 'bug report was updated!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteBugReport() {
      BugReportDataService.delete(this.currentBugReport.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "bug_reports" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getBugReport(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>