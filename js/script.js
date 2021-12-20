$(document).ready(function () {
  $('a.eduLink').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('div.eduTop').offset().top,
      },
      1000
    )
  }),
    $('a.exLink').click(function () {
      $('html, body').animate(
        {
          scrollTop: $('div.exTop').offset().top,
        },
        1000
      )
    }),
    $('a.proLink').click(function () {
      $('html, body').animate(
        {
          scrollTop: $('div.proTop').offset().top,
        },
        1000
      )
    }),
    $('a.skillLink').click(function () {
      $('html, body').animate(
        {
          scrollTop: $('div.skillTop').offset().top,
        },
        1000
      )
    }),
    $('a.contactLink').click(function () {
      $('html, body').animate(
        {
          scrollTop: $('div.contactTop').offset().top,
        },
        1000
      )
    })
})
