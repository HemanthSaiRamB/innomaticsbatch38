let monthDropDownOptions = [
    { label: "January", value: "jan", weekCount: 0 },
    { label: "February", value: "feb", weekCount: 0 },
    { label: "March", value: "mar", weekCount: 0 },
    { label: "April", value: "apr", weekCount: 0 },
    { label: "May", value: "may", weekCount: 0 },
    { label: "June", value: "june", weekCount: 0 },
    { label: "July", value: "july", weekCount: 0 },
    { label: "August", value: "aug", weekCount: 0 },
    { label: "September", value: "sep", weekCount: 0 },
    { label: "October", value: "oct", weekCount: 0 },
    { label: "November", value: "nov", weekCount: 0 },
    { label: "December", value: "dec", weekCount: 0 },

]
let selectDrop = document.getElementById("monthdropdown")
const addWeekBtn = document.getElementById('addWeekBtn')
const weeklyFormsContainer = document.getElementById("weeklyFormsContainer")
const monthlyIncome = document.getElementById("monthlyIncome")

document.addEventListener("DOMContentLoaded", () => {
    monthDropDownOptions.forEach(month => {
        const monthOption = document.createElement('option')
        monthOption.value = month.value
        monthOption.textContent = month.label
        selectDrop.appendChild(monthOption)
    })
})

selectDrop.addEventListener('change', () => {
    if (selectDrop.value !== '') {
        addWeekBtn.style.display = 'block'
        const monthIncomeForm = document.createElement('form')
        const dropdownValue = selectDrop.value
        const montIndex = monthDropDownOptions.findIndex(month => month.value === dropdownValue)
        monthIncomeForm.innerHTML = `
                <label for=${monthDropDownOptions[montIndex].value}>Enter Income(/Month)</label>
                <input type="text" id="${monthDropDownOptions[montIndex].value}">
            `
        monthlyIncome.appendChild(monthIncomeForm)
    } else {
        addWeekBtn.style.display = 'none'
    }
})

addWeekBtn.addEventListener('click', () => {
    const dropdownValue = selectDrop.value
    const weekForm = document.createElement('form')
    const montIndex = monthDropDownOptions.findIndex(month => month.value === dropdownValue)
    if (monthDropDownOptions[montIndex].weekCount < 4) {
        monthDropDownOptions[montIndex].weekCount += 1
        weekForm.innerHTML = `
            <h2>Month: ${(monthDropDownOptions.find(month => month.value === dropdownValue)).label}</h2>
            <h2>Week: ${(monthDropDownOptions.find(month => month.value === dropdownValue)).weekCount}</h2>
            <label for="foodExp">Food Expense</label>
            <input id="foodExp" type="text">
            <label for="traExp">Travel Expense</label>
            <input id="traExp" type="text">
            <label for="utilExp">Utilities Expense</label>
            <input id="utilExp" type="text">
            <button>Submit</button>
        `
        weeklyFormsContainer.appendChild(weekForm)
    } else {
        alert('No of weeks can only be 4')
    }

})