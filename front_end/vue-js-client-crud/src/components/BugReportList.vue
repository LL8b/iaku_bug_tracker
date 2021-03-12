<template>
  <div class="list_row">
    <div class="col-md-8">
      <div class="input-group mb-3"><br>
        <input type="text" class="form-control" id="search_bar" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="component_button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div >
     
 
      


      <!--live-->
      <ul id="report_list" >
        <li 
          :class="{ active: index == currentIndex }"
          v-for="(bug_report, index) in bug_reports"
          :key="index"
          @click="setActiveBugReport(bug_report, index)"
        >
          {{ bug_report.title }}
        </li>
      </ul>

      <button id="component_button" @click="removeAllBugReports">
        Remove All
      </button>
    </div>
    
     <div   >
      <div v-if="currentBugReport">
        <h4>Bug Report</h4>
        <div id="report_view">
          <label id="label"><strong>Title:</strong></label> {{ currentBugReport.title }}
        </div><br>
        <div>
          <label id="label"><strong>Issue:</strong></label> {{ currentBugReport.issue }}
        </div><br>
        <div>
          <label id="label"><strong>Status:</strong></label> {{ currentBugReport.resolution }}
        </div><br>
        <div>
          <label id="label"><strong>Assigned to:</strong></label> {{ currentBugReport.assigned_to }}
        </div><br>
        <div>
          <label id="label"><strong>Published:</strong></label> {{ currentBugReport.published ? "Published" : "Pending" }}
        </div><br>

        <a class="badge badge-warning" id="component_button"
          :href="'/bug_reports/' + currentBugReport.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Select a Report...</p>
      </div><br>
    </div>

  </div>
</template>

<script>


import BugReportDataService from "../services/BugReportDataService";



export default {
  name: "bug_reports-list",
  data() {
    return {
      bug_reports: [],
      currentBugReport: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {

    retrieveBugReports() {
      BugReportDataService.getAll()
        .then(response => {
          this.bug_reports = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveBugReports();
      this.currentBugReport = null;
      this.currentIndex = -1;
    },

    setActiveBugReport(bug_report, index) {
      this.currentBugReport = bug_report;
      this.currentIndex = index;
    },

    removeAllBugReports() {
      BugReportDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      BugReportDataService.findByTitle(this.title)
        .then(response => {
          this.bug_reports = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveBugReports();
    
    
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>