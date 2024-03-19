db.createCollection("Employees");

db.Employees.insertMany([
  { name: "John Doe", position: "Software Engineer", salary: 60000 },
  { name: "Jane Smith", position: "Data Analyst", salary: 55000 },
  { name: "Mike Johnson", position: "UI/UX Designer", salary: 62000 },
]);

db.Employees.find();

db.Employees.drop();

("use admin");
db.dropDatabase("PWKILL");
