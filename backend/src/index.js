"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/products', productRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});
// Database Connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
mongoose_1.default.connect(mongoUri)
    .then(() => {
    console.log('MongoDB Connected');
    if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
})
    .catch((err) => {
    console.error('Database connection error:', err);
});
exports.default = app;
//# sourceMappingURL=index.js.map