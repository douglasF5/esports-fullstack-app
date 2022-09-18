import express from "express";
const app = express();
const PORT = 3333;
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Ad 1' },
        { id: 2, name: 'Ad 2' },
        { id: 3, name: 'Ad 3' },
        { id: 4, name: 'Ad 4' },
    ]);
});
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
