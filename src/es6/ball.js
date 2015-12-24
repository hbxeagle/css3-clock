(()=>{
  let $map = {
    wraper : $('.wraper'),
    ball : $('.ball'),
    setC : $("#setC"),
    setS : $("#setS"),
    setP : $("#setP"),
    setRx : $("#setRx"),
    setRy : $("#setRy"),
    setRz : $("#setRz"),
    move : $("#mymove"),
    pause : $("#pause"),
    run : $("#run"),
    rX : $(".rx"),
    rY : $(".ry"),
    rZ : $(".rz")
  };

  let bind = {
    button : ()=> {
      $map.setC.on('click',()=>{
        $map.wraper.toggleClass('circle');
      });
      $map.setS.on('click',()=>{
        $map.wraper.toggleClass('scale');
      });
      $map.setP.on('click',()=>{
        $map.wraper.toggleClass('place');
      });
      $map.setRx.on('click',()=>{
        $map.wraper.toggleClass('rotateX');
      });
      $map.setRy.on('click',()=>{
        $map.wraper.toggleClass('rotateY');
      });
      $map.setRz.on('click',()=>{
        $map.wraper.toggleClass('rotateZ');
      });
      $map.move.on('click',()=>{
        $map.ball.toggleClass('x-mymove');
      });
      $map.pause.on('click',()=>{
        $map.ball.css('animation-play-state', 'paused');
      });
      $map.run.on('click',()=>{
        $map.ball.css('animation-play-state', 'running');
      });
    },
    rotate : ()=> {
      $map.rX.on('change',()=>{

      });
      $map.rY.on('change',()=>{
        
      });
      $map.rZ.on('change',()=>{
        
      });
    }
  }

  let init = ()=>{
    for(let i in bind) {
      bind[i]();
    }
  }

  init();

})();