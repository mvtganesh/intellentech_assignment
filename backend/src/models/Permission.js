import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
    role: { 
        type: String, 
        enum: ['super_admin', 'manager', 'employee', 'viewer'],
        required: true,
        unique: true
    },
    permissions: {
        posts: {
            view: { type: Boolean, default: false },
            create: { type: Boolean, default: false },
            update: { type: Boolean, default: false },
            delete: { type: Boolean, default: false }
        },
        authors: {
            view: { type: Boolean, default: false },
            create: { type: Boolean, default: false },
            update: { type: Boolean, default: false },
            delete: { type: Boolean, default: false }
        },
        dashboard: {
            view: { type: Boolean, default: false }
        }
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Permission', permissionSchema);