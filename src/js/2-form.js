const formData =
  {
    email: "",
    message: ""
  };

const form = document.querySelector('.feedback-form');


const writeToLocalStorage = () => localStorage.setItem('feedback-form-state', JSON.stringify(formData));
const clearLocalStorageRecord = () => localStorage.removeItem('feedback-form-state');
const loadDataFromLocalStorage = () => {
  let data = localStorage.getItem('feedback-form-state');
  if (data !== null) {
    data = JSON.parse(data);
    formData.email = data.email;
    formData.message = data.message;
    let input = form.querySelector('input');
    let field = form.querySelector('textarea');
    input.value = data.email;
    field.value = data.message;
  }
}

const resetFormData = () => {
  formData.message = "";
  formData.email = "";
}

loadDataFromLocalStorage();

form.addEventListener('input', (e) => {
  switch (e.target.name) {
    case 'email':
      formData.email = e.target.value;
      break;
    case 'message':
      formData.message = e.target.value;
      break;
  }
  writeToLocalStorage();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(formData.email !== "" && formData.message !== ""){
    console.log(formData);
    clearLocalStorageRecord();
    resetFormData();
    form.reset();
  }else {
    alert('Please fill up all fields.');
  }
})