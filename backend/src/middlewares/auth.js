import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: 'Token expired',
                code: 'TOKEN_EXPIRED'
            });
        }
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export const authorize = (roles = []) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'Access denied. Insufficient permissions.' 
            });
        }
        next();
    };
};

export const checkPermission = (resource, action) => {
    return async (req, res, next) => {
        try {
            const user = await User.findById(req.user.userId).populate('permissions');
            
            const hasPermission = user.permissions.some(perm => 
                perm.resource === resource && perm.actions.includes(action)
            );

            if (!hasPermission && user.role !== 'super_admin') {
                return res.status(403).json({ 
                    message: `No permission to ${action} ${resource}` 
                });
            }
            next();
        } catch (error) {
            res.status(500).json({ message: 'Permission check failed' });
        }
    };
};