function submitForm() {
  const form = document.getElementById("userForm");
  const formData = new FormData(form);
  const summary = document.getElementById("summary");
 
  summary.innerHTML = "";
 summary.textContent= validateForm(formData);

}
function validateForm(formData) {
  let missingFields = [];
  let invalidFields = [];
  const currentDate = new Date();
  const emailRegex = 

  formData.forEach((value, key) => {
   //complete this
  });

  let errorMessage = "";
  if (missingFields.length > 0) {
    //complete this
  }
  if (invalidFields.length > 0) {
      errorMessage += invalidFields.join(". ");
  }

  if (errorMessage === "") {
         //complete this
}


module.exports =validateForm
