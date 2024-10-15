import Swal from 'sweetalert2'

export const showSuccessAlert = (message: string) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    timer: 2000,
    showConfirmButton: false,
  })
}

export const showErrorAlert = (message: string) => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
    showConfirmButton: true,
  })
}
