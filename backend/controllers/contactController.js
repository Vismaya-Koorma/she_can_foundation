const db = require('../db');

/**
 * Handles incoming contact form submissions
 * Route: POST /api/contact
 */
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Validate empty fields
    if (!name || !name.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Full Name is required.' 
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email Address is required.' 
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Message is required.' 
      });
    }

    // 2. Validate email format using a standard regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid Email Address.' 
      });
    }

    // 3. Insert submitted form data into MySQL database
    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    const values = [name.trim(), email.trim(), message.trim()];

    // Execute the database statement using await (thanks to the promisePool in db.js)
    const [result] = await db.execute(query, values);

    // 4. Return success response
    return res.status(201).json({
      success: true,
      message: 'Form Submitted Successfully',
      data: {
        id: result.insertId,
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
      }
    });

  } catch (error) {
    console.error('Error inserting message into MySQL:', error);

    // Return a beginner-friendly database connection error hint
    let errorMessage = 'An error occurred while saving your message. Please try again.';
    if (error.code === 'ECONNREFUSED' || error.code === 'PROTOCOL_CONNECTION_LOST') {
      errorMessage = 'Database connection failed. Is your MySQL server running?';
    }

    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message
    });
  }
};

/**
 * Fetches all contact form messages
 * Route: GET /api/messages
 */
exports.getAllMessages = async (req, res) => {
  try {
    const query = 'SELECT * FROM contact_messages ORDER BY created_at DESC';
    const [messages] = await db.execute(query);

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error('Error fetching messages from MySQL:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch messages. Please check your database connection.',
      error: error.message
    });
  }
};
