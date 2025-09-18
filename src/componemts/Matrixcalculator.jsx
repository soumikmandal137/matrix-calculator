import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  Container,
} from "@mui/material";

const MatrixCalculator = () => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [matrixResult, setMatrixResult] = useState([]);

  const generateMatrices = () => {
    const emptyMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );
    setMatrixA(JSON.parse(JSON.stringify(emptyMatrix)));
    setMatrixB(JSON.parse(JSON.stringify(emptyMatrix)));
    setMatrixResult([]);
  };

  const handleChange = (matrix, setMatrix, i, j, value) => {
    const newMatrix = matrix.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === i && colIndex === j ? Number(value) : cell
      )
    );
    setMatrix(newMatrix);
  };

  const addMatrices = () => {
    if (!matrixA.length || !matrixB.length) return;
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      alert("Matrices must have the same dimensions");
      return;
    }
    const result = matrixA.map((row, i) =>
      row.map((cell, j) => cell + matrixB[i][j])
    );
    setMatrixResult(result);
  };

  // Render matrix with colorful cells
  const renderMatrix = (matrix, title, setMatrix, type = "A") => {
    const colors = {
      A: "#d0f0fd",
      B: "#fde0d0",
      Result: "#d0fdd8",
    };
    return (
      <Paper elevation={6} sx={{ p: 2, m: 2, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
        <Table sx={{ borderCollapse: "separate", borderSpacing: "4px" }}>
          <TableBody>
            {matrix.map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell
                    key={j}
                    sx={{
                      backgroundColor: colors[type],
                      borderRadius: "6px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#333",
                      width: "60px",
                      height: "50px",
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#ffeaa7",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {setMatrix ? (
                      <TextField
                        value={cell}
                        onChange={(e) =>
                          handleChange(matrix, setMatrix, i, j, e.target.value)
                        }
                        size="small"
                        type="number"
                        inputProps={{
                          style: {
                            textAlign: "center",
                            width: "50px",
                            height: "35px",
                            fontWeight: "bold",
                          },
                        }}
                      />
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h1" sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}>
         Matrix Calculator
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <TextField
            label="Rows"
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Columns"
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={generateMatrices}>
            Generate Matrices
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={addMatrices}>
            Add Matrices
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
        {matrixA.length > 0 && <Grid item>{renderMatrix(matrixA, "Matrix A", setMatrixA, "A")}</Grid>}
        {matrixB.length > 0 && <Grid item>{renderMatrix(matrixB, "Matrix B", setMatrixB, "B")}</Grid>}
        {matrixResult.length > 0 && (
          <Grid item>{renderMatrix(matrixResult, "Result (A + B)", null, "Result")}</Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MatrixCalculator;
