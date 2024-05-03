const cards = document.querySelector('.cards')


function getApi() {
    const requestUrl = 'https://randomuser.me/api/?results=5'
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (employees) {
            console.log(employees)
            for (const employee of employees.results) {
                console.log(employee.gender);
                const genderEl = document.createElement('div')
                genderEl.textContent = employee.gender
                cards.appendChild(genderEl)
                

            }

        })
}

getApi()