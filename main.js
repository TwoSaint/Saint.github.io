// Function to create and animate bouncing balls
let collision = 0;
let ballCount = 0;

// Variable to store the speed multiplier
let speedMultiplier = 5;

// Function to update the speed based on the slider value
function updateSpeed() {
  const speedSlider = document.getElementById('speedSlider');
  speedMultiplier = parseFloat(speedSlider.value);
}

function createBall() {
  ballCount += 1;

  // Create a new ball element
  const ballContainer = document.getElementById('ballContainer');
  const ball = document.createElement('div');
  ball.className = 'ball';
  ballContainer.appendChild(ball);

  // Set initial position randomly within the window
  const margin = 50; // Margin from the edges
  let posX = Math.random() * (window.innerWidth - 2 * margin) + margin;
  let posY = Math.random() * (window.innerHeight - 2 * margin) + margin;
  let posW = posX - 50;
  let posZ = posY - 50;

  // Set a random color for the ball
  ball.style.backgroundColor = getRandomColor();

  // Variables for velocity
  let velX = (Math.random() - 0.77) * 5;
  let velY = (Math.random() - 0.77) * 5;

  // Variable to handle continuous following
  let isFollowing = false;

  // Event listeners for mouse interactions
  ball.addEventListener('mousedown', toggleFollowing);

  // Update ball position and handle bouncing off walls
  function update() {
    if (isFollowing) {
      // Teleport the ball to the mouse position
      posX = mouseX - 25;
      posY = mouseY - 25;
    } else {
      // Bounce off the walls if the ball reaches the window boundaries
      if (posX < 0 || posX > window.innerWidth - ball.clientWidth) {
        velX = -velX; // Reverse the horizontal velocity
        collision += 1;
      }
      if (posY < 0 || posY > window.innerHeight - ball.clientHeight) {
        velY = -velY; // Reverse the vertical velocity
        collision += 1;
      }
      //delete off screen balls
      if (posY > window.innerHeight - 1 || posX > window.innerwidth - 1) {
        ballContainer.removeChild(ball);
        ballCount -= 1;
      }
      if (posY > window.innerHeight + 1 || posX > window.innerwidth + 1) {
        ballContainer.removeChild(ball);
        ballCount -= 1;
      }

      // Update the ball's position based on velocity
      posX += velX * speedMultiplier;
      posY += velY * speedMultiplier;

      // Update collision count
      document.getElementById('Collisions').innerHTML = collision;
      document.getElementById('ballCount').innerHTML = ballCount;
    }

    // Update the ball's position on the screen
    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;

    // Repeat the update using requestAnimationFrame for smooth animation
    requestAnimationFrame(update);
  }

  // Start the animation loop
  update();

  // Function to toggle continuous following
  function toggleFollowing() {
    isFollowing = !isFollowing;

    // If following, update mouse coordinates
    if (isFollowing) {
      posX = mouseX - 25;
      posY = mouseY - 25;
      velX = (Math.random() - 0.5) * 15;
      velY = (Math.random() - 0.5) * 15;
    }
  }
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

// Variables to store mouse coordinates
let mouseX, mouseY;

// Event listener for mousemove to update mouse coordinates
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});
