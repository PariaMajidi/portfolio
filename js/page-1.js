$(document).ready(function () {
  $('#askForEmailForm').hide()
  $('#askForEmailFeedback').hide()

  $('#askForEmailButton').click(function () {
    $('#askForEmailButton').hide()
    $('#askForEmailForm').show()
  })

  $('#askForEmailForm').submit(function (event) {
    const form = document.getElementById('askForEmailForm')
    event.preventDefault()
    const data = new FormData(event.target)
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        $('#askForEmailForm').hide()
        $('#askForEmailFeedback').show()
      })
      .catch(error => {
        console.log('error', error)
      })
  })
})
