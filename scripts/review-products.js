// Product array
const products = [
  { id: 1, name: "Smartphone" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Headphones" }
];

const productSelect = document.getElementById("product");
const reviewForm = document.getElementById("reviewForm");
const reviewsDiv = document.getElementById("reviews");

// Load products into select
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Get reviews from LocalStorage
function getReviews() {
  return JSON.parse(localStorage.getItem("reviews")) || [];
}

// Save reviews to LocalStorage
function saveReviews(reviews) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Render reviews
function renderReviews() {
  reviewsDiv.innerHTML = "";
  const reviews = getReviews();

  reviews.forEach(review => {
    const div = document.createElement("div");
    div.classList.add("review");
    div.innerHTML = `
      <strong>${review.product}</strong><br>
      ${"⭐".repeat(review.rating)}<br>
      <em>${review.name}</em>
      <p>${review.comment}</p>
    `;
    reviewsDiv.appendChild(div);
  });
}

// Form submit
reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const review = {
    product: productSelect.value,
    name: document.getElementById("name").value,
    rating: Number(document.getElementById("rating").value),
    comment: document.getElementById("comment").value
  };

  const reviews = getReviews();
  reviews.push(review);
  saveReviews(reviews);

  reviewForm.reset();
  renderReviews();
});

// Initial load
renderReviews();
