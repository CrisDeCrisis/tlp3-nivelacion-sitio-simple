import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {

    try {
        const inputText = req.body;

        if (!inputText) {
            return res.status(400).json({ message: 'Debe completar el campo' });
        };

        res.status(200).send(inputText);
    } catch (error) {

        res.status(500).json({ message: 'Ocurrio un error en el servidor' });

    };
});

app.listen(PORT, () => {
    console.log(`El servidor está activo en el puerto: ${PORT}`);
});