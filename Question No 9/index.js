db.Students.find({ age: { $gt: 15 } }); // Students older than 15
db.Students.find({ grade: 10 }); // Students in grade 10
