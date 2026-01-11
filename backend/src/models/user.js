import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['super_admin', 'manager', 'employee', 'viewer'],
        default: 'viewer'
    },
    department: { type: String },
    status: { 
        type: String, 
        enum: ['active', 'inactive'],
        default: 'active'
    },
    permissions: [{
        resource: String,
        actions: [String] // ['view', 'create', 'update', 'delete']
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);