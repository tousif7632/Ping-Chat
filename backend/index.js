const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.post('/ping', async (req, res, next) => {
  try {
    const { userId, message } = req.body;
    
    // Validations
    if (!userId || typeof userId !== 'string') {
      throw new Error('userId must be a non-empty string');
    }
    if (!message || typeof message !== 'string') {
      throw new Error('message must be a non-empty string');
    }

    res.json({ 
      ok: true, 
      ts: new Date().toISOString() 
    });
  } catch (error) {
    next(error);
  }
});

// get all pings
app.get('/pings', async (req, res, next) => {
  try {
    res.json({ 
      ok: true, 
      pings: [] 
    });
  } catch (error) {
    next(error);
  }
});

// Error middleware
app.use((err, req, res, next) => {
  res.status(400).json({ 
    ok: false, 
    error: err.message 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));