const mongoose = require('mongoose');
const Role = require('../../server/models/Role'); // Adjust the path if necessary

const predefinedRoles = [
  { roleName: 'Labour', description: 'Labour role, performs jobs' },
  { roleName: 'Customer', description: 'Customer role, posts jobs' },
  { roleName: 'Manager', description: 'Manager role, manages bookings' },
  { roleName: 'Admin', description: 'Admin role, manages the platform' }
];

async function seedRoles() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_db_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database.');

    for (const roleData of predefinedRoles) {
      const existingRole = await Role.findOne({ roleName: roleData.roleName });
      
      if (!existingRole) {
        await Role.create(roleData);
        console.log(`Role '${roleData.roleName}' created.`);
      } else {
        console.log(`Role '${roleData.roleName}' already exists.`);
      }
    }

    console.log('Seeding completed.');
  } catch (error) {
    console.error('Error during seeding roles:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedRoles();
