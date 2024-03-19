db.Teachers.find({ subject: "Math" }); // Math teachers
db.Teachers.find({ experience: { $gt: 10 } }); // Teachers with more than 10 years of experience
