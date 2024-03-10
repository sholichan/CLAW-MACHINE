import 'phaser'
import Phaser, { Game as GameType } from "phaser";
import { useEffect, useState } from 'react';
import PreloadScene from './scenes/preloadScene';
import MainScene from './scenes/MainScene';

const DEFAULT_WIDTH = 375
const DEFAULT_HEIGHT = 667

const Game = () => {
  const [game, setGame] = useState<GameType>()
  useEffect(() => {
    if (!game) {
      const initPhaser = async () => {
        const PhaserGame = new Phaser.Game({
          type: Phaser.AUTO,
          antialias:true,
          backgroundColor: '#ffffff',
          scale: {
            parent: 'phaser-game',
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT
          },
          scene: [
            PreloadScene,
            MainScene,
          ],
          physics: {
            default: 'arcade',
            arcade: {
              debug: false,
              gravity: {x:0, y: 500 }
            },
          //   matter: {
          //     debug: true,
          //     gravity: { y: 0.5 }
          // }
          }
        });
        setGame(PhaserGame)
      }
      initPhaser();
    }

  }, [game])
  return <div id="phaser-game" key={"phaser-game"}></div>;
}
export default Game; 