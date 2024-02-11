export function alertError (error){
    const errorBox = document.querySelector('.error-box');
    errorBox.textContent = error;
    errorBox.classList.add('show');

    setTimeout(() => {
        errorBox.classList.remove('show');
    }, 3000);
}