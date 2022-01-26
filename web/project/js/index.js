(function () {
    function searchForm(formSelector = '') {
        const form = document.querySelector(formSelector);

        async function getCountries() {
            const jsonP = await fetch('php/modules/countrySearch.php');
            const data = await jsonP.json();

            return data;
        }

        function validateSearchField(val) {
            return new Promise(async (res, rej) => {
                const { countries } = await getCountries();

                const isValid = countries.some((country) =>
                    country.toLowerCase().includes(val.toLowerCase())
                );

                isValid
                    ? res()
                    : rej(`Доступні країни - ${countries.join(', ')}`);
            });
        }

        function renderSearchFieldError(form, errorMsg) {
            form.querySelector('.error-msg').innerHTML = errorMsg;
        }

        form.addEventListener('submit', (e) => {
            const inputVal = e.target.elements.namedItem('country').value;

            e.preventDefault();

            validateSearchField(inputVal)
                .then(() => {
                    e.target.submit();
                })
                .catch((e) => {
                    renderSearchFieldError(form, e);
                });
        });
    }

    window.addEventListener('load', () => {
        searchForm('#search-cities');
    });
})();
