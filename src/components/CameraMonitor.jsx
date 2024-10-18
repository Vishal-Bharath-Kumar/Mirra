import React from "react";
import swal from "sweetalert";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { ToastContainer } from "react-toastify";

export default class CameraMonitor extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
            width: 500,
            height: 300,
          },
        })
        .then((stream) => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, ) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then((values) => {
          this.detectFrame(this.videoRef.current, values[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      if (this.canvasRef.current) {
        this.renderPredictions(predictions);
        requestAnimationFrame(() => {
          this.detectFrame(video, model);
        });
      } else {
        return false;
      }
    });
  };

  renderPredictions = (predictions) => {
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
    //   const x = prediction.bbox[0];
    //   const y = prediction.bbox[1];
    //   const width = prediction.bbox[2];
    //   const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
    //   ctx.strokeRect(x, y, width, height);
      // Draw the label background.
    //   ctx.fillStyle = "#00FFFF";
    //   const textWidth = ctx.measureText(prediction.class).width;
    //   const textHeight = parseInt(font, 10); // base 10
    //   ctx.fillRect(x, y, textWidth + 8, textHeight + 8);
      var multiple_face = 0;
      for (let i = 0; i < predictions.length; i++) {
        if (prediction.class === "person") {
          multiple_face = multiple_face + 1;
          if (multiple_face >= 2) {
            swal(
              "Multiple Face Detection",
              "one person should be in the frame.",
              "warning"
            );
          }
        }
        if(predictions[i].class !== "person") {
          swal("Face Not Visible","Stay close to the camera.", "warning");
        }
      }

    });

    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      ctx.fillStyle = "#000000";

      if (
        prediction.class === "person"
      ) {
        ctx.fillText(prediction.class, x, y);
      }
    });

  };
  render() {
    return (
      <div className="camera-monitor">
        <video
          id="mlVideo"
          className="size"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
          width="340"
          height="300"
        />
        <canvas
          id="mlCanvas"
          className="size"
          ref={this.canvasRef}
          width="300"
          height="100"
        />
        <ToastContainer />
      </div>
    );
  }
}