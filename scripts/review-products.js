document.addEventListener("DOMContentLoaded", () => {

  // Product array
  const products = [
    { id: 1, name: "Smartphone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Headphones" }
  ];

  const productSelect = document.getElementById("product");
  const reviewForm = document.getElementById("reviewForm");
  const reviewsDiv = document.getElementById("reviews");

  /* ---------------------------
     Load products into select
  ---------------------------- */
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  /* ---------------------------
     LocalStorage helpers
  ---------------------------- */
  function getReviews() {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  }

  function saveReviews(reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }

  /* ---------------------------
     Render reviews (review.html)
  ---------------------------- */
  function renderReviews() {
    if (!reviewsDiv) return;

    reviewsDiv.innerHTML = "";

    const reviews = getReviews();

    reviews.forEach(review => {
      const div = document.createElement("div");
      div.className = "review";
      div.innerHTML = `
        <strong>${review.product}</strong><br>
        ${"★".repeat(review.rating)}<br>
        <em>${review.name || "Anonymous"}</em>
        <p>${review.comment || ""}</p>
      `;
      reviewsDiv.appendChild(div);
    });
  }

  /* ---------------------------
     Form submit (index.html)
  ---------------------------- */
  if (reviewForm) {
    reviewForm.addEventListener("submit", event => {
      event.preventDefault();

      const ratingInput = document.querySelector('input[name="rating"]:checked');

      if (!ratingInput) {
        alert("Please select a rating.");
        return;
      }

      const review = {
        product: productSelect.value,
        rating: Number(ratingInput.value),
        comment: document.getElementById("comment").value,
        name: document.getElementById("name").value
      };

      const reviews = getReviews();
      reviews.push(review);
      saveReviews(reviews);

      reviewForm.reset();
    });
  }

  /* ---------------------------
     Initial render
  ---------------------------- */
  renderReviews();

});
