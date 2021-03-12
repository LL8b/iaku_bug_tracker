import http from "../http-common";

class BugReportDataService {
  getAll() {
    return http.get("/bug_reports");
  }

  get(id) {
    return http.get(`/bug_reports/${id}`);
  }

  create(data) {
    return http.post("/bug_reports", data);
  }

  update(id, data) {
    return http.put(`/bug_reports/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bug_reports/${id}`);
  }

  deleteAll() {
    return http.delete(`/bug_reports`);
  }

  findByTitle(title) {
    return http.get(`/bug_reports?title=${title}`);
  }
}

export default new BugReportDataService();