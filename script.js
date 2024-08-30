function handleemail(event) {
    event.preventDefault();
    console.log(event);
    console.log("Thanks for the Subscription!");
    alert("Thanks for the Subscription!");
}


document.addEventListener('DOMContentLoaded', function () {
    const seeMoreButton = document.querySelector('.see-more');
    const seeLessButton = document.querySelector('.see-less');
    const extraProducts = document.querySelectorAll('.extra-products.hidden');

    seeMoreButton.addEventListener('click', function () {
        extraProducts.forEach((product, index) => {
            if (index < 6) { // Adjust the number if you want to show fewer or more products
                product.classList.remove('hidden');
            }
        });

        // Show the "See Less" button and hide the "See More" button
        seeMoreButton.classList.add('hidden');
        seeLessButton.classList.remove('hidden');
    });

    seeLessButton.addEventListener('click', function () {
        extraProducts.forEach((product, index) => {
            if (index < 6) { // Adjust the number if you want to hide fewer or more products
                product.classList.add('hidden');
            }
        });

        // Show the "See More" button and hide the "See Less" button
        seeLessButton.classList.add('hidden');
        seeMoreButton.classList.remove('hidden');
    });
});


