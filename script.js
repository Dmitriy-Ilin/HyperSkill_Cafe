const reviewTitle = document.getElementById('reviewTitle');
const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');
const reviewsRow = document.getElementById('reviewsRow');



document.getElementById('reviewButton').addEventListener('click', function (event) {
   event.preventDefault();

   if (reviewName.value === "") {
      reviewName.value = "Anonymous";
   }


   if (reviewTitle.value !== "" && reviewText.value !== "") {
      reviewsRow.innerHTML += `<div class="col-lg-4 col-md-6 py-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${reviewTitle.value}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${reviewText.value}</p>
                                    <footer class="blockquote-footer text-end"><i>${reviewName.value}</i></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>`;
   }
});