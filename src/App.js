import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/main.scss';
import Square from 'Components/Square';
import { Patterns } from 'Components/Patterns';
import { useToast } from 'Components/Toast';
import "./Routes/About";

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  const { t } = useTranslation();
  let toast = useToast();

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }, [board]);

  let winnerMessage = t('winnerMessages.winnerPlayer');

  useEffect(() => {
    if (result.state !== 'none') {
      toast.open(`${winnerMessage} ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === '') {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];

      if (firstPlayer === '') return;

      let foundWinningPattern = true;

      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: 'Won' });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;

    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: t('winnerMessages.noWinner'), state: 'Tie' });
    }
  };

  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('O');
  };

  return (
    <div className="App">
      <div
        className={`winner-message ${result.state !== 'none' && 'winner-message--active'
          }`}
        style={{ color: result.winner === 'X' ? '#ff0000' : '#fff' }}
      >
        {result.winner !== 'none' && `${t('winnerMessages.winner')} ${result.winner}`}
      </div>
      <div className="board grid grid-cols-3">
        <Square
          val={board[0]}
          chooseSquare={() => {
            chooseSquare(0);
          }}
        />
        <Square
          val={board[1]}
          chooseSquare={() => {
            chooseSquare(1);
          }}
        />
        <Square
          val={board[2]}
          chooseSquare={() => {
            chooseSquare(2);
          }}
        />
        <Square
          val={board[3]}
          chooseSquare={() => {
            chooseSquare(3);
          }}
        />
        <Square
          val={board[4]}
          chooseSquare={() => {
            chooseSquare(4);
          }}
        />
        <Square
          val={board[5]}
          chooseSquare={() => {
            chooseSquare(5);
          }}
        />
        <Square
          val={board[6]}
          chooseSquare={() => {
            chooseSquare(6);
          }}
        />
        <Square
          val={board[7]}
          chooseSquare={() => {
            chooseSquare(7);
          }}
        />
        <Square
          val={board[8]}
          chooseSquare={() => {
            chooseSquare(8);
          }}
        />
      </div>
    </div>
  );
}

export default App;
