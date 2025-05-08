import express from "express";
import playlist from "#db/playlist";

const app = express()

app.route('/').get((req, res) =>{
    res.send("You've reached the Playlist API!")
})

app.route('/playlist').get((req, res) =>{
    res.send(playlist)
} )

app.route('/playlist/:index').get((req, res) => {
    const index = Number(req.params.index);
  
    if (index >= 0 && index < playlist.length) {
      res.send(playlist[index]); 
    } else {
      res.status(404).send("That song does not exist in the playlist.");
    }
  });
  
  
export default app