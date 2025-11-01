// ================================
// PART 2: JAVASCRIPT FUNCTIONS — SCOPE, PARAMETERS, RETURN VALUES
// ================================

/**
 * Calculates annual staking reward based on SOL amount and APR.
 * Demonstrates: parameters, return value, local scope.
 */
function calculateStakingReward(solAmount, apr) {
  // Local variables — not accessible outside this function
  const decimalApr = apr / 100;
  const reward = solAmount * decimalApr;
  return parseFloat(reward.toFixed(4)); // Return formatted number
}

/**
 * Validates if a number is positive and finite.
 * Reusable validation helper.
 */
function isValidNumber(value) {
  return typeof value === 'number' && value >= 0 && isFinite(value);
}

/**
 * Toggles a CSS class on an element to trigger animation.
 * Demonstrates: parameterized DOM control, reusability.
 */
function triggerAnimation(element, className, shouldAdd = true) {
  if (shouldAdd) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

// ================================
// PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT
// ================================

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const animateBoxBtn = document.getElementById('animateBoxBtn');
const animatedBox = document.getElementById('animatedBox');
const flipCard = document.getElementById('flipCard');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const loadingSpinner = document.getElementById('loadingSpinner');
const rewardForm = document.getElementById('rewardForm');
const rewardResult = document.getElementById('rewardResult');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Animate Box Button
animateBoxBtn.addEventListener('click', () => {
  triggerAnimation(animatedBox, 'animate');
  setTimeout(() => {
    animatedBox.classList.remove('animate');
  }, 2000);
});

// Card Flip
flipCard.addEventListener('click', () => {
  const card = flipCard.querySelector('.card');
  card.classList.toggle('flipped');
});

// Modal Control
openModalBtn.addEventListener('click', () => {
  triggerAnimation(modalOverlay, 'active', true);
  triggerAnimation(loadingSpinner, 'active', true);

  // Simulate async operation (e.g., wallet connection)
  setTimeout(() => {
    triggerAnimation(loadingSpinner, 'active', false);
  }, 2500);
});

closeModalBtn.addEventListener('click', () => {
  triggerAnimation(modalOverlay, 'active', false);
});

// Form Submission with Function Logic
rewardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const solInput = parseFloat(document.getElementById('solAmount').value);
  const aprInput = parseFloat(document.getElementById('apr').value);

  // Validation using helper function
  if (!isValidNumber(solInput) || !isValidNumber(aprInput)) {
    rewardResult.textContent = '❌ Please enter valid numbers.';
    rewardResult.style.backgroundColor = '#ffebee';
    rewardResult.classList.add('show');
    return;
  }

  // Use calculation function
  const reward = calculateStakingReward(solInput, aprInput);

  // Display result
  rewardResult.innerHTML = `
    🎉 Estimated Annual Reward: <strong>${reward} SOL</strong>
    <br><small>at ${aprInput}% APR</small>
  `;
  rewardResult.style.backgroundColor = '#e8f5e9';
  rewardResult.classList.add('show');
});

// ================================
// PART 1: CSS ANIMATIONS ARE TRIGGERED VIA JS ABOVE
// All hover/fade/slide effects are defined in CSS
// JS adds/removes classes to activate them
// ================================
