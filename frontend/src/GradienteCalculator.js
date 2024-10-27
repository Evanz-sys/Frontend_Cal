import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function GradienteCalculator() {
    const [result, setResult] = useState(null);

    const calcularGradiente = async (x, y) => {
        try {
            const response = await axios.post('/resultado', { x, y });
            setResult(response.data);
        } catch (error) {
            console.error('Error al calcular el gradiente:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const x = parseFloat(e.target.x.value);
        const y = parseFloat(e.target.y.value);
        calcularGradiente(x, y);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="x" placeholder="Valor de x" step="any" required />
                <input type="number" name="y" placeholder="Valor de y" step="any" required />
                <button type="submit">Calcular</button>
            </form>
            {result && (
                <div>
                    <p>Gradiente X: {result.gradiente_x}</p>
                    <p>Gradiente Y: {result.gradiente_y}</p>
                    <p>Cambio Temporal: {result.cambio_temp}</p>
                    <p>Dirección Constante X: {result.direccion_constante_x}</p>
                    <p>Dirección Constante Y: {result.direccion_constante_y}</p>
                </div>
            )}
        </div>
    );
}

export default GradienteCalculator;
