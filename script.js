// Bootstrap Toast example
document.getElementById('showToastBtn').addEventListener('click', () => {
  const toastEl = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
});
