<template>
  <div id="about" class="scroll">
     <div><h3>About Iaku Bug Tracking Tool</h3></div>
     <p>* This demo is not connected to PostgreSQL, for the full experience you can download the source-code from <a href="https://github.com/rustyraygun/bug_tracker_0_2" alt="" target="_blank">GITHUB</a></p>
     <br>
     <h2>Foundations:</h2>
     <h3>Admin Content Management</h3>
     <p>The admin CMS UI is built with Vue.js, Axios, HTML, CSS, and Javascript. It's a SPA style app, with a siingle router-view, and simple local css style-sheet. </p>
     <img src="../assets/images/bug_tracker_vue_img.jpg" alt="image" width="250px"><br>

     <ul>stack:<br>
     <li>Vue-router is used to create Single-Page-App style navigation.</li>
     <li>Vue-Client sends/recieves http request, Axios is used to send data to vue components.</li>
     </ul>
     <br><br>
     
     <h3>Rest-API, Data and Routes</h3>
     <p>Express creates Rest-APIs, Express and the Database (PostgreSQL) communicate using an ORM (Sequelize). Express creates API methods automatically, at the defined route-urls (route.js).</p>
     <img src="../assets/images/bugtrackerimg.jpg" alt="image" width="450px"><br>

     <h3>Front Box</h3>
     <p>The 'Front-End' user experience was created with GDSCript, exported to a WASM file, and wrapped in HTML. The HTTPClient is used to download data, which is parsed to JSON and displayed using various Control Nodes.</p>
     <p><strong>Downloaing an Listing Bug Reports in GdScript:</strong><br>
     <ul>
     <li>1) Make request</li><br>
     <p class="code">var error = $HTTPRequest.request("api/url...")</p>
     
     <li>2) On request completed; get string from UTF8-Body , parse to JSON</li><br>
     <p class="code">if result == 0:<br>
		var json = JSON.parse(body.get_string_from_utf8())</p>
     <br>

      <li>3) Get the number of entries in the JSON file and create 'li_boxes'</li><br>
     <p class="code">var num = -1<br>
		for reports in json.result.size():<br>
			{{'\xa0'}} num += 1<br>
			{{'\xa0'}} var r = json.result[num]<br>
			{{'\xa0'}} var details = r.values()<br>
      {{'\xa0'}} var id = details[0]<br>
			{{'\xa0'}} var title = details[1]<br>
      ...<br>
      {{'\xa0'}} create_li_box(id, title, assigned_to, issue, last_updated, created_at, resolution)<br>
      func create_li_box(id, title, assigned_to, issue, last_updated, created_at, resolution):<br>
      {{'\xa0'}} var box = li_box.instance()<br>
      {{'\xa0'}} list_box.add_child(box)<br>
      {{'\xa0'}} box.id.set_text(str(id))<br>
      {{'\xa0'}} box.title.set_text(title)<br>
      ...<br>

		</p>
     </ul><br>

    

     <h3>References</h3>
     <ul>iaku bug tracker tool v0.02</ul>
     <a href="https://medium.com/@thrinz/create-on-the-fly-rest-api-using-postgres-database-functions-6d9061e66f3d" alt="" target="_blank"><li>PostgreSQL | Datavase Functions</li></a>
     <a href="https://htmlcheatsheet.com/css/" alt="" target="_blank"><li>CSS | CSS cheat sheet</li></a>
     <a href="http://codetuto.com/2015/05/using-httpclient-in-godot/" alt="" target="_blank"><li>HTTPClient | Using the HttpClient in Godot</li></a>
     <a href="https://vue-crud.github.io/" alt="" target="_blank"><li>Vue-CRUD | Vue.js</li></a>
     <a href="" alt="https://bezkoder.com/vue-node-express-postgresql/" target="_blank"><li>Vue-CRUD | Vue.js, Express, Node.js</li></a>
     <a href="" alt="https://bezkoder.com/node-express-sequelize-postgresql/" target="_blank"><li>CRUD Rest APIs | Sequelize, Express, PostgreSQL</li></a>
      <a href="https://stackoverflow.com/questions/54236825/v-bind-directives-require-an-attribute-value" alt="" target="_blank"><li>v-bind | attribute</li></a>
     <br>
     <br>
    
  </div>
</template>

<script>


export default {
  name: 'About',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

