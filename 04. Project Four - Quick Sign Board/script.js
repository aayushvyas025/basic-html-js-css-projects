document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const colorPicker = document.getElementById("colorPicker");
  const boardBackground = document.getElementById("BackgroundColor");
  const penFontSize = document.getElementById("penSize");
  const clearBtn = document.getElementById("clearBtn");
  const saveWithDownloadBtn = document.getElementById("saveWithDownloadBtn");
  const previousStateBtn = document.getElementById("previousStateBtn");
  const signBoard = document.getElementById("signBoard");
  const ctx = signBoard.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;


  // Event Listener
  colorPicker.addEventListener("change", (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
  });

  function getMousePos(event) {
    const rect = signBoard.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (signBoard.width / rect.width),
      y: (event.clientY - rect.top) * (signBoard.height / rect.height),
    };
  }

  signBoard.addEventListener("mousedown", (event) => {
    isDrawing = true;
    const position = getMousePos(event);
    lastX = position.x;
    lastY = position.y;
  });

  signBoard.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;
    const position = getMousePos(event);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
    lastX = position.x;
    lastY = position.y;
  });

  signBoard.addEventListener("mouseup", () => (isDrawing = false));
  signBoard.addEventListener("mouseleave", () => (isDrawing = false));
});
