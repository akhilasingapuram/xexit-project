const jwt = require("jsonwebtoken");

const auth =
  (requiredRole = null) =>
  (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (requiredRole && decoded.role !== requiredRole)
        return res.status(403).json({ message: "Forbidden" });
      req.user = decoded;
      next();
    } catch {
      res.status(400).json({ message: "Invalid token" });
    }
  };
module.exports = auth;
