const db = require('../db');

/**
 * Handle new volunteer joining form submissions
 * Stores data in the 'volunteers' table.
 */
exports.submitJoinForm = async (req, res) => {
  try {
    const { name, email, interest, message } = req.body;

    // Basic validation
    if (!name || !email || !interest || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required. Please fill out the entire form.'
      });
    }

    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // SQL query to insert form data
    const query = 'INSERT INTO volunteers (name, email, interest, message) VALUES (?, ?, ?, ?)';
    
    // Using the promise-based pool from db.js
    const [result] = await db.execute(query, [name, email, interest, message]);

    return res.status(201).json({
      success: true,
      message: 'Thank you for joining us! We will contact you soon.',
      data: {
        id: result.insertId,
        name,
        interest
      }
    });

  } catch (error) {
    console.error('Error submitting volunteer form:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

/**
 * Retrieve all volunteer submissions
 * Useful for an admin dashboard feature.
 */
exports.getAllVolunteers = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM volunteers ORDER BY created_at DESC');
    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error while fetching data.'
    });
  }
};
