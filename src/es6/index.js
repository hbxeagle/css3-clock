(() => {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let dh = document.getElementById('h');

  let dm = document.getElementById('m');

  let ds = document.getElementById('s');

  let dcs = document.getElementById('srunner');

  dh.style.transform = `rotate(${h % 12 * 30}deg)`;

  dm.style.transform = `rotate(${m*6}deg)`;

  ds.style.transform = `rotate(${s*6}deg)`;

  dcs.style.transform = `rotate(${s*6}deg)`;

  let $move = $("#move");

  $move.on('click',()=>{
    $(".all-box").toggleClass('c-unfold');
  });

})();
