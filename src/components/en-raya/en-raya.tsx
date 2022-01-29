import { Box, Typography, IconButton, Grid, Button } from "@mui/material";
import { useState } from "react";
import UseStyles from "../../static/styles/use-styles";
import { RadioButtonUnchecked } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const EnRaya = () => {
  const classes = UseStyles();
  const [tablero, setTablero] = useState<Array<string>>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turno, setTurno] = useState<boolean>(false);
  const [jugadorGanador, setJugadorGAnador] = useState<string>("");
  const [jugando, setJugando] = useState<boolean>(true);
  const patronesGanadores = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let ganador = "";
  const reiniciarTablero = () => {
    setTablero(["", "", "", "", "", "", "", "", ""]);
  };
  const tableroGanador = (jugadaGanadora: number[]) => {
    let copiaTablero = tablero;
    for (let i = 0; i < tablero.length; i++) {
      if (
        i == jugadaGanadora[0] ||
        i == jugadaGanadora[1] ||
        i == jugadaGanadora[2]
      ) {
        copiaTablero[i] = ganador;
      } else {
        copiaTablero[i] = "";
      }
    }
    console.log(copiaTablero, ganador);
    setTablero(copiaTablero);
  };
  const jugada = (index: number) => {
    if (jugando) {
      if (tablero[index] === "") {
        let copiaTablero = tablero;
        if (turno) {
          copiaTablero[index] = "o";
          setTablero(copiaTablero);
          verJuego("o");
        } else {
          copiaTablero[index] = "x";
          setTablero(copiaTablero);
          verJuego("x");
        }
        setTurno(!turno);
      }
    }
  };

  const verJuego = (jugador: string) => {
    for (let i = 0; i < patronesGanadores.length; i++) {
      if (
        tablero[patronesGanadores[i][0]] == jugador &&
        tablero[patronesGanadores[i][1]] == jugador &&
        tablero[patronesGanadores[i][2]] == jugador
      ) {
        ganador = jugador;
        setJugadorGAnador(ganador);
        setJugando(false);
        mostrarGanador(patronesGanadores[i]);
      }
    }
  };

  const mostrarGanador = (jugadaGanadora: number[]) => {
    setTimeout(function () {
      tableroGanador(jugadaGanadora);
    }, 500);
    setTimeout(function () {
      reiniciarTablero();
    }, 1000);
    setTimeout(function () {
      tableroGanador(jugadaGanadora);
    }, 1500);
    setTimeout(function () {
      reiniciarTablero();
    }, 2000);
    setTimeout(function () {
      tableroGanador(jugadaGanadora);
    }, 2500);
    setTimeout(function () {
      reiniciarTablero();
      if (ganador === "x") {
        setTurno(false);
      } else {
        setTurno(true);
      }
      setJugando(true);
    }, 3000);
  };

  return (
    <Box className={classes.body}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color={"#839597"}>
          En Raya
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>

          <Grid item xs={4}>
            <Grid container spacing={0.2}>
              {tablero &&
                tablero.map((c, index) => (
                  <Grid item key={index} xs={4}>
                    <Box>
                      <Button
                        variant="text"
                        className={classes.cell}
                        onClick={() => jugada(index)}
                      >
                        {c === "" ? null : c === "o" ? (
                          <RadioButtonUnchecked />
                        ) : (
                          <CloseIcon />
                        )}
                      </Button>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        {jugadorGanador === "" ? null : (
          <Typography variant="h2" color={"#839597"}>
            Ganador: {jugadorGanador.toUpperCase()}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default EnRaya;
