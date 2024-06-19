// function validateForm() {
//     // Fetching values from all input fields and storing them in variables
//     var form = document.getElementById('form');
//     var name = form.elements['name'].value.trim();
//     var std = form.elements['class'].value.trim();
//     var rollno = form.elements['rollno'].value.trim();
//     var father = form.elements['father'].value.trim();
//     var mother = form.elements['mother'].value.trim();
//     var mobile = form.elements['mobile'].value.trim();
//     var city = form.elements['city'].value.trim();
//     var img = form.elements['img'].value.trim();

//     // Validating empty fields
//     if (name === '') {
//         alert('Name must be filled out');
//         return false;
//     }
//     if (!/^[a-zA-Z ]+$/.test(name)) {
//         alert('Name must contain only alphabetic characters');
//         return false;
//     }

//     if (std === '') {
//         alert('Class must be filled out');
//         return false;
//     }
//     if (!/^\d+$/.test(std)) {
//         alert('Class must contain only digits');
//         return false;
//     }

//     if (rollno === '') {
//         alert('Roll No must be filled out');
//         return false;
//     }
//     if (!/^\d+$/.test(rollno)) {
//         alert('Roll No must contain only digits');
//         return false;
//     }

//     if (father === '') {
//         alert("Father's Name must be filled out");
//         return false;
//     }
//     if (!/^[a-zA-Z ]+$/.test(father)) {
//         alert("Father's Name must contain only alphabetic characters");
//         return false;
//     }

//     if (mother === '') {
//         alert("Mother's Name must be filled out");
//         return false;
//     }
//     if (!/^[a-zA-Z ]+$/.test(mother)) {
//         alert("Mother's Name must contain only alphabetic characters");
//         return false;
//     }

//     if (mobile === '') {
//         alert('Mobile No must be filled out');
//         return false;
//     }
//     if (!/^\d+$/.test(mobile)) {
//         alert('Mobile No must contain only digits');
//         return false;
//     }

//     if (city === '') {
//         alert('City must be filled out');
//         return false;
//     }
//     if (!/^[a-zA-Z ]+$/.test(city)) {
//         alert('City must contain only alphabetic characters');
//         return false;
//     }

//     if (img === '') {
//         alert('Image must be uploaded');
//         return false;
//     }

//     return true; // If all validations pass, form will submit
// }