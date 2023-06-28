$('.l24-js-toggle').on('click.l24toggle', e => {
  e.preventDefault();
  let $target = $($(e.currentTarget).attr('data-target'));
  $target.animate({ height: 'toggle' }, 300);
});