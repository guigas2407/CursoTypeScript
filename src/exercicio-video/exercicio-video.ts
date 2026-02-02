interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(elements: VideoPlayerElements) {
    this.videoPlayer = elements.videoPlayer;
    this.playButton = elements.playButton;
    this.stopButton = elements.stopButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    });
    this.stopButton.addEventListener("click", () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = "Play";
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "Pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = "Play";
    }
  }

  stop(): void {
    this.videoPlayer.pause();
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector("#video") as HTMLVideoElement,
  playButton: document.querySelector("#play") as HTMLButtonElement,
  stopButton: document.querySelector("#stop") as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
