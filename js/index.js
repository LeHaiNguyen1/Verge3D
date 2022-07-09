$('.part-btn').on('click', function() {
  $('.part-btn.active').removeClass('active');
  $(this).addClass('active');
  const target = $(this).data('target');
  $('#' + target).addClass('active').siblings().removeClass('active');
  // $('#btn-glossy').addClass('active').siblings().removeClass('active')
  window.v3d.puzzles.procedures.highLightObject(target);
});

$('.btn-glossy').on('click', function(e) {
  const target = $(this).parents('.material-item').data('target');
  const color = $(this).data('color');
  const type = $(this).data('type');
  if (type === 0) {
    window.v3d.puzzles.procedures.changeGlossyColor(
      state === 'right' ? target : target + '_1', color);
  } else if (type === 1) {
    window.v3d.puzzles.procedures.changeCarbon(target);
  } else if (type === 2) {
    window.v3d.puzzles.procedures.changeLeatherColor(target, color);
  }

  $('.btn-glossy.active').removeClass('active');
  $(this).addClass('active');
});

let firstTime = true;
let state = 'right';

$('.side-btn').on('click', function() {
  // $(this).addClass('active').siblings().removeClass('active');
  $('.side-btn').removeClass('active');
  $(this).addClass('active');
  const target = $(this).data('target');
  state = target;
  // kiểm tra xem đã load hay chưa
  if (firstTime) {
    if (target === 'left') {
      window.v3d.puzzles.procedures.appendLelf2(target);
    }
    firstTime = false;
  } else {
    window.v3d.puzzles.procedures.side(target);
  }
});