// Function to create and animate a bouncing ball
function createBall() {
    // Create a new ball element
    const ball = document.createElement('div');
    ball.className = 'ball';
    document.body.appendChild(ball);

    // Set initial position randomly within the window
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;

    // Set initial velocity with random speed and direction
    let velX = (Math.random() - 0.5) * 10;
    let velY = (Math.random() - 0.5) * 10;

    // Update ball position and handle bouncing off walls
    function update() {
      // Update position based on velocity
      posX += velX;
      posY += velY;

      // Bounce off the walls if the ball reaches the window boundaries
      if (posX < 0 || posX > window.innerWidth - ball.clientWidth) {
        velX = -velX; // Reverse the horizontal velocity
      }
      if (posY < 0 || posY > window.innerHeight - ball.clientHeight) {
        velY = -velY; // Reverse the vertical velocity
      }

      // Update the ball's position on the screen
      ball.style.left = `${posX}px`;
      ball.style.top = `${posY}px`;

      // Repeat the update using requestAnimationFrame for smooth animation
      requestAnimationFrame(update);
    }

    // Start the animation loop
    update();
}