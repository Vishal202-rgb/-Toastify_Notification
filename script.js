let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> successfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Debbug the error'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input,check Again'

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error')
    }

    if (msg.includes('Invalid')) {
        toast.classList.add('Invalid')
    }
    setTimeout(() => {
        toast.remove();
    }, 4000)
}