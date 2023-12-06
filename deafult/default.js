// Function to create and animate bouncing balls
let collision = 0;

function createBall() {
    // Create a new ball element
    const ballContainer = document.getElementById('ballContainer');
    const ball = document.createElement('div');
    ball.className = 'ball';
    ballContainer.appendChild(ball);

    // Set initial position randomly within the window
    const margin = 50; // Margin from the edges
    let posX = Math.random() * (window.innerWidth - 2 * margin) + margin;
    let posY = Math.random() * (window.innerHeight - 2 * margin) + margin;
    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;

    // Set a random color for the ball
    ball.style.backgroundColor = getRandomColor();

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
        collision += 1;
      }
      if (posY < 0 || posY > window.innerHeight - ball.clientHeight) {
        velY = -velY; // Reverse the vertical velocity
        collision += 1;
      }

      // Update the ball's position on the screen
      ball.style.left = `${posX}px`;
      ball.style.top = `${posY}px`;

      document.getElementById("Collisions").innerHTML = collision;
      // Repeat the update using requestAnimationFrame for smooth animation
      requestAnimationFrame(update);
    }

    // Start the animation loop
    update();
  }

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }