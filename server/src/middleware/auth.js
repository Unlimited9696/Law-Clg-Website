const jwt = require('jsonwebtoken');

// Verify token middleware
exports.verifyToken = (req, res, next) => {
  // In development mode, bypass token verification
  if (process.env.NODE_ENV === 'development') {
    req.user = { username: 'admin', role: 'admin' };
    next();
    return;
  }

  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user from payload
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid token. Authorization denied.'
    });
  }
};

// Admin role check middleware
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin privileges required.'
    });
  }
}; 