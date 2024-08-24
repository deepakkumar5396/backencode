// migrations/20240803000000-create_users_collection.js
module.exports = {
    async up(db, client) {
      await db.createCollection("users", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "phone"],
            properties: {
              name: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              email: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              phone: {
                bsonType: "string",
                description: "must be a string and is required"
              }
            }
          }
        }
      });
    },
  
    async down(db, client) {
      await db.collection("users").drop();
    }
  };
  