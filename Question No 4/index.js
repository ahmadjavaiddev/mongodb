db.Customers.updateOne(
  { name: "Alice" },
  { $set: { address: "456 Oak Avenue" } }
);
