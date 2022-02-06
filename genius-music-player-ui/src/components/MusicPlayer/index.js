import React from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  return (
    <div className="music-player-wrapper">
      <div class="music-player">
      <div class="controls--actions">
            <i class="fa fa-retweet actions--repeat" />
            <i class="fa fa-backward actions--back" />
            <i class="fa fa-pause actions--back" />
            <i class="fa fa-forward actions--forward" />
          </div>
        <div class="song-meta">
          <div className="song-details">
            <div className="music-player--banner" />
            <div class="song-info--title">Is This Love</div>
            <div class="song-info--artist">Bob Marley</div>
          </div>

        </div>

        <div class="music-player--progress">
          <progress class="progress--progress-bar" value="43" max="100" />
          <div class="progress--time">1:37</div>
          <div class="progress--time progress--time__end">3:52</div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
