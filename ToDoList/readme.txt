install ejs using : npm i ejs

res.send(); // sends all the res.write(); fucntionsdata all at once.

package dependencies are stored in package.json

// <% %> this is  known as scriplet tag useed to add control flow..
//...statements in a ejs file


kuch iss tarah proper spaces deke implement karna hota hai

<% if (kindOfDay === "Saturday" || kindOfDay === "Sunday") { %>
    <h1 style="color: tomato;">It's a <%= kindOfDay %> </h1>
<% } else { %>
    <h1 style="color: turquoise;">It's a <%= kindOfDay %> </h1>
<% } %>