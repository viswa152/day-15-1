var fname = document.getElementById('fname')                    // to get all the elements
var lname = document.getElementById('lname')
var addr  = document.getElementById('address')
var pincode = document.getElementById('pincode')
var state = document.getElementById('state')
var country = document.getElementById('country')
var gender = document.getElementsByName('gender')
var food = document.getElementsByName('food')
var tbody = document.getElementById('tablebody')
var resultfood = []                                             // empty array to store check box values
function getvalues(event){
    event.preventDefault()                                      // to get in console     
    
    var gendervalue;                                            // to fetch radio values
    for(i = 0; i < gender.length; i++) {    
        if(gender[i].checked){
            gendervalue = gender[i].value
        }
    }

    for(i = 0; i < food.length; i++){                           // to fetch check box values
        if(food[i].checked){
            resultfood.push(food[i].value)
        }
    }

    tbody.innerHTML += (                                        // to create table with form submited values
        `<tr class="table-success">
            <td class="table-success">${fname.value}</td>
            <td class="table-success">${lname.value}</td>
            <td class="table-success">${addr.value}</td>
            <td class="table-success">${pincode.value}</td>
            <td class="table-success">${state.value}</td>
            <td class="table-success">${country.value}</td>
            <td class="table-success">${gendervalue}</td>
            <td class="table-success">${resultfood}</td>
        </tr>`
    )

    fname.value=""                                             // To empty all field values
    lname.value=""
    addr.value=""
    pincode.value=""
    state.value=""
    country.value=""
    document.getElementById('male').checked = false
    document.getElementById('female').checked = false
    document.getElementById('indian').checked = false
    document.getElementById('italian').checked = false
    document.getElementById('continental').checked = false
    document.getElementById('chinese').checked = false
    document.getElementById('mexican').checked = false
    resultfood=[]
}