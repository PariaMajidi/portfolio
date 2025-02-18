$(document).ready(function () {
  var secured = false
  $('#askPasswordModal').modal({ backdrop: 'static' })

  $('#askPasswordModal').on('hidden.bs.modal', function () {
    if (secured) return
    $('#askPasswordModal').modal('show')
  })

  $('#passwordError').hide()

  $('#formPassword').submit(function (e) {
    e.preventDefault()
    if ($('#password').val() === 'CanadaLife' || $('#password').val() === 'CLife25$Portfolio') {
      secured = true
      $('#askPasswordModal').modal('hide')
      $.get('canadaLife-private.html').then(data => {
        $('#secure').append(data)
      })
    } else {
      $('#passwordError').show()
    }
  })
})
