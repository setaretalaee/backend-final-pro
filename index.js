// const express = require('express');
// const cors = require('cors');  
// const { neon } = require('@neondatabase/serverless');
// // const bcrypt = require('bcrypt'); 
//   // "bcryptjs": "^3.0.2",

// const app = express();


// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:5173','https://your-production-domain.com'], 
//     methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
//     allowedHeaders: 'X-Requested-With, Content-Type',
//     credentials: true
// }));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const DATABASE_URL = 'postgresql://neondb_owner:npg_Hd5x6ZilDrwo@ep-cool-scene-a8fsiw9y-pooler.eastus2.azure.neon.tech/neondb?sslmode=require';

// const sql = neon(DATABASE_URL);

// app.get('/hats', async (req, res) => {
//     try {
//         const hats = await sql`SELECT * FROM hats`;
//         res.send(hats);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

// app.get('/ShoesWomen', async (req, res) => {
//     try {
//         const ShoesWomen = await sql`SELECT * FROM shoes WHERE gender = 'Women'`;
//         res.send(ShoesWomen);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

// app.get('/people', async (req, res) => {
//     try {
//       console.log('Fetching data from database...');
//       const people = await sql`SELECT * FROM people`; 
//       console.log('Data fetched:', people); 
//       res.send(people); 
//     } catch (error) {
//       console.error('Database error:', error);
//       res.status(500).send('Error fetching data from database');
//     }
//   });

// app.get('/ShoesMen', async (req, res) => {
//     try {
//         const ShoesMen = await sql`SELECT * FROM shoes WHERE gender = 'Men'`;
//         res.send(ShoesMen);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

// app.get('/DressWomen', async (req, res) => {
//     try {
//         const DressWomen = await sql`SELECT * FROM dresses WHERE gender = 'Women'`;
//         res.send(DressWomen);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

// app.get('/DressMen', async (req, res) => {
//     try {
//         const DressMen = await sql`SELECT * FROM dresses WHERE gender = 'Men'`;
//         res.send(DressMen);
//     } catch (error) {
//         console.error('Database error:', error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

// app.post('/People', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         const result = await sql`
//             INSERT INTO people (email, password) 
//             VALUES (${email}, ${password})
//             RETURNING *;
//         `;
//         console.log('User added to database:', result[0]);
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         console.error('Error inserting data into database:', error);
//         res.status(500).json({ message: 'Registration failed', error: error });
//     }
// });



//   // INSERT INTO people (email, password) 
//             // VALUES (${email}, ${password})
//             // RETURNING *;




// // app.post('/delete', async (req, res) => {
// //     const { id } = req.body;

// //     if (!id) {
// //         return res.status(400).json({ message: 'ID is required' });
// //     }

// //     try {
// //         const result = await sql`
// //           DELETE FROM all_items WHERE id = ${id};
// //         `;
// //         console.log('User added to database:', result[0]);
// //         res.status(201).json({ message: 'User registered successfully' });
// //     } catch (error) {
// //         console.error('Error inserting data into database:', error);
// //         res.status(500).json({ message: 'Registration failed', error: error });
// //     }
// // });

// // app.post('/delete', async (req, res) => {
// //     const { id } = req.body;
// //     if (!id) {
// //         return res.status(400).json({ message: 'ID is required' });
// //     }

// //     try {
// //         const result = await sql`
// //             DELETE FROM all_items WHERE id = ${id};
// //         `;
// //         if (result.affectedRows > 0) {
// //             res.status(200).json({ message: 'Item deleted successfully' });
// //         } else {
// //             res.status(404).json({ message: 'ID not found' });
// //         }
// //     } catch (error) {
// //         console.error('Error deleting data from database:', error);
// //         res.status(500).json({ message: 'Error deleting item', error: error });
// //     }
// // });
// app.post('/Delete', async (req, res) => {
//     const { id } = req.body;
//     if (!id) {
//         return res.status(400).json({ message: 'ID is required' });
//     }

//     try {
//         const result = await sql`
//             DELETE FROM all_items WHERE id = ${id};
//         `;
        
//         console.log('Result:', result);  

//         if (result.affectedRows > 0) {
//             res.status(200).json({ message: 'Item deleted successfully' });
//         } else {
//             res.status(404).json({ message: 'ID not found' });
//         }
//     } catch (error) {
//         console.error('Error deleting data from database:', error);
//         res.status(500).json({ message: 'Error deleting item', error: error.message });  
//     }
// });
























// app.post('/AdminHats', async (req, res) => {
//     const { name, price, size, color, gender } = req.body;

//     if (!name || !price || !size || !color || !gender) {
//         return res.status(400).json({ message: 'All fields are required for Hats' });
//     }

//     try {
//         const result = await sql`
//             INSERT INTO hats (name, price, size, color, gender)
//             VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
//             RETURNING *;
//         `;
//         console.log('Hat added to database:', result[0]);
//         res.status(201).json({ message: 'Hat added successfully' });
//     } catch (error) {
//         console.error('Error inserting data into database:', error);
//         res.status(500).json({ message: 'Failed to add hat', error: error });
//     }
// });



// app.post('/submitOrder', async (req, res) => {
//     const { userId, productIds } = req.body;

//     if (!userId || !Array.isArray(productIds) || productIds.length === 0) {
//         return res.status(400).json({ message: 'User ID and at least one product ID are required' });
//     }

//     try {
//         for (const productId of productIds) {
//             await sql`
//                 INSERT INTO person_items (userId, productId)
//                 VALUES (${userId}, ${productId});
//             `;
//         }

//         console.log('Order added to database:', { userId, productIds });
//         res.status(201).json({ message: 'Order added successfully' });

//     } catch (error) {
//         console.error('Error inserting data into database:', error);
//         res.status(500).json({ message: 'Failed to add order', error: error.message });
//     }
// });


// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         console.log('Login attempt for email:', email);

//         const user = await sql`
//             SELECT user_id, email, password FROM people WHERE email = ${email};
//         `;

//         if (user.length === 0) {
//             console.log('User not found for email:', email);
//             return res.status(404).json({ message: 'User not found' });
//         }

//         if (user[0].password !== password) {
//             console.log('Incorrect password for email:', email);
//             return res.status(401).json({ message: 'Incorrect password' });
//         }

//         console.log('Login successful, User ID:', user[0].user_id);

//         res.status(200).json({ message: 'Login successful', userId: user[0].user_id });

//     } catch (error) {
//         console.error('Error during login:', error.message, error.stack);
//         res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// });


// app.post('/adminShoes', async (req, res) => {
//     const { name, price, size, color, gender } = req.body;

//     if (!name ) {
//         return res.status(400).json({ message: 'All fields are required for Shoes' });
//     }

//     try {
//         const result = await sql`
//             INSERT INTO shoes (name, price, size, color, gender)
//             VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
//             RETURNING *;
//         `;
//         console.log('Shoe added to database:', result[0]);
//         res.status(201).json({ message: 'Shoe added successfully' });
//     } catch (error) {
//         console.error('Error inserting data into database:', error);
//         res.status(500).json({ message: 'Failed to add shoe', error: error });
//     }
// });

// app.post('/adminDress', async (req, res) => {
//     const { name, price, size, color, gender } = req.body;

//     if (!name || !price || !size || !color || !gender) {
//         return res.status(400).json({ message: 'All fields are required for Dresses' });
//     }

//     try {
//         const result = await sql`
//             INSERT INTO dresses (name, price, size, color, gender)
//             VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
//             RETURNING *;
//         `;
//         console.log('Dress added to database:', result[0]);
//         res.status(201).json({ message: 'Dress added successfully' });
//     } catch (error) {
//         console.error('Error inserting data into database:', error);
//         res.status(500).json({ message: 'Failed to add dress', error: error });
//     }
// });






  
  
  
  
  
  
  
  
  
  
  



  

// // const port = 3000;
// // app.listen(port, () => {
// //     console.log(`My app listening at http://localhost:${port}`);
// // });




// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










const express = require('express');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');
const crypto = require('crypto');

const app = express();

// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:5173', 'https://your-production-domain.com'],
//     methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
//     allowedHeaders: 'X-Requested-With, Content-Type',
//     credentials: true
// }));

// const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'https://trendify-react.onrender.com', 'https://your-production-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DATABASE_URL = 'postgresql://neondb_owner:npg_Hd5x6ZilDrwo@ep-cool-scene-a8fsiw9y-pooler.eastus2.azure.neon.tech/neondb?sslmode=require';
const sql = neon(DATABASE_URL);

app.post('/People', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');  

        const result = await sql`
            INSERT INTO people (email, password, salt) 
            VALUES (${email}, ${hash}, ${salt})
            RETURNING *;
        `;
        console.log('User added to database:', result[0]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error inserting data into database:', error);
        res.status(500).json({ message: 'Registration failed', error: error });
    }
});

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         const user = await sql`
//             SELECT user_id, email, password, salt FROM people WHERE email = ${email};
//         `;

//         if (user.length === 0) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const hash = crypto.createHmac('sha256', user[0].salt).update(password).digest('hex');

//         if (hash !== user[0].password) {
//             return res.status(401).json({ message: 'Incorrect password' });
//         }

//         res.status(200).json({ message: 'Login successful', userId: user[0].user_id });
//     } catch (error) {
//         console.error('Error during login:', error.message, error.stack);
//         res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// });


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await sql`
            SELECT user_id, email, password, salt FROM people WHERE email = ${email};
        `;
        console.log('User retrieved:', user);

        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const hash = crypto.createHmac('sha256', user[0].salt).update(password).digest('hex');
        console.log('Generated hash:', hash);

        if (hash !== user[0].password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful', userId: user[0].user_id });
    } catch (error) {
        console.error('Error during login:', error.message, error.stack);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});



app.get('/hats', async (req, res) => {
    try {
        const hats = await sql`SELECT * FROM hats`;
        res.send(hats);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/ShoesWomen', async (req, res) => {
    try {
        const ShoesWomen = await sql`SELECT * FROM shoes WHERE gender = 'Women'`;
        res.send(ShoesWomen);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/people', async (req, res) => {
    try {
        console.log('Fetching data from database...');
        const people = await sql`SELECT * FROM people`; 
        console.log('Data fetched:', people); 
        res.send(people); 
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/ShoesMen', async (req, res) => {
    try {
        const ShoesMen = await sql`SELECT * FROM shoes WHERE gender = 'Men'`;
        res.send(ShoesMen);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/DressWomen', async (req, res) => {
    try {
        const DressWomen = await sql`SELECT * FROM dresses WHERE gender = 'Women'`;
        res.send(DressWomen);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.get('/DressMen', async (req, res) => {
    try {
        const DressMen = await sql`SELECT * FROM dresses WHERE gender = 'Men'`;
        res.send(DressMen);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching data from database');
    }
});

app.post('/Delete', async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const result = await sql`
            DELETE FROM all_items WHERE id = ${id};
        `;

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'ID not found' });
        }
    } catch (error) {
        console.error('Error deleting data from database:', error);
        res.status(500).json({ message: 'Error deleting item', error: error.message });
    }
});

app.post('/AdminHats', async (req, res) => {
    const { name, price, size, color, gender } = req.body;

    if (!name || !price || !size || !color || !gender) {
        return res.status(400).json({ message: 'All fields are required for Hats' });
    }

    try {
        const result = await sql`
            INSERT INTO hats (name, price, size, color, gender)
            VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
            RETURNING *;
        `;
        console.log('Hat added to database:', result[0]);
        res.status(201).json({ message: 'Hat added successfully' });
    } catch (error) {
        console.error('Error inserting data into database:', error);
        res.status(500).json({ message: 'Failed to add hat', error: error });
    }
});

app.post('/adminShoes', async (req, res) => {
    const { name, price, size, color, gender } = req.body;

    if (!name ) {
        return res.status(400).json({ message: 'All fields are required for Shoes' });
    }

    try {
        const result = await sql`
            INSERT INTO shoes (name, price, size, color, gender)
            VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
            RETURNING *;
        `;
        console.log('Shoe added to database:', result[0]);
        res.status(201).json({ message: 'Shoe added successfully' });
    } catch (error) {
        console.error('Error inserting data into database:', error);
        res.status(500).json({ message: 'Failed to add shoe', error: error });
    }
});

app.post('/adminDress', async (req, res) => {
    const { name, price, size, color, gender } = req.body;

    if (!name || !price || !size || !color || !gender) {
        return res.status(400).json({ message: 'All fields are required for Dresses' });
    }

    try {
        const result = await sql`
            INSERT INTO dresses (name, price, size, color, gender)
            VALUES (${name}, ${price}, ${size}, ${color}, ${gender})
            RETURNING *;
        `;
        console.log('Dress added to database:', result[0]);
        res.status(201).json({ message: 'Dress added successfully' });
    } catch (error) {
        console.error('Error inserting data into database:', error);
        res.status(500).json({ message: 'Failed to add dress', error: error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



























