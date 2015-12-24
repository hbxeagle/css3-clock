'use strict';

(function () {
  var $map = {
    wraper: $('.wraper'),
    ball: $('.ball'),
    setC: $("#setC"),
    setS: $("#setS"),
    setP: $("#setP"),
    setRx: $("#setRx"),
    setRy: $("#setRy"),
    setRz: $("#setRz"),
    move: $("#mymove"),
    pause: $("#pause"),
    run: $("#run"),
    rX: $(".rx"),
    rY: $(".ry"),
    rZ: $(".rz")
  };

  var bind = {
    button: function button() {
      $map.setC.on('click', function () {
        $map.wraper.toggleClass('circle');
      });
      $map.setS.on('click', function () {
        $map.wraper.toggleClass('scale');
      });
      $map.setP.on('click', function () {
        $map.wraper.toggleClass('place');
      });
      $map.setRx.on('click', function () {
        $map.wraper.toggleClass('rotateX');
      });
      $map.setRy.on('click', function () {
        $map.wraper.toggleClass('rotateY');
      });
      $map.setRz.on('click', function () {
        $map.wraper.toggleClass('rotateZ');
      });
      $map.move.on('click', function () {
        $map.ball.toggleClass('x-mymove');
      });
      $map.pause.on('click', function () {
        $map.ball.css('animation-play-state', 'paused');
      });
      $map.run.on('click', function () {
        $map.ball.css('animation-play-state', 'running');
      });
    },
    rotate: function rotate() {
      $map.rX.on('change', function () {});
      $map.rY.on('change', function () {});
      $map.rZ.on('change', function () {});
    }
  };

  var init = function init() {
    for (var i in bind) {
      bind[i]();
    }
  };

  init();
})();


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9lczYvYmFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBSTtBQUNILE1BQUksSUFBSSxHQUFHO0FBQ1QsVUFBTSxFQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDckIsUUFBSSxFQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDakIsUUFBSSxFQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDakIsUUFBSSxFQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDakIsUUFBSSxFQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDakIsU0FBSyxFQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbkIsU0FBSyxFQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbkIsU0FBSyxFQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbkIsUUFBSSxFQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDbkIsU0FBSyxFQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDbkIsT0FBRyxFQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDZixNQUFFLEVBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNiLE1BQUUsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2IsTUFBRSxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7R0FDZCxDQUFDOztBQUVGLE1BQUksSUFBSSxHQUFHO0FBQ1QsVUFBTSxFQUFHLGtCQUFLO0FBQ1osVUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDdkIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDbkMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDdkIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDbEMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDdkIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDbEMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDeEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDcEMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDeEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDcEMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDeEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDcEMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDdkIsWUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDbkMsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDeEIsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7T0FDakQsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQUk7QUFDdEIsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDbEQsQ0FBQyxDQUFDO0tBQ0o7QUFDRCxVQUFNLEVBQUcsa0JBQUs7QUFDWixVQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBSSxFQUV2QixDQUFDLENBQUM7QUFDSCxVQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBSSxFQUV2QixDQUFDLENBQUM7QUFDSCxVQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUMsWUFBSSxFQUV2QixDQUFDLENBQUM7S0FDSjtHQUNGLENBQUE7O0FBRUQsTUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFJLEdBQU87QUFDYixTQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtBQUNqQixVQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUNYO0dBQ0YsQ0FBQTs7QUFFRCxNQUFJLEVBQUUsQ0FBQztDQUVSLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvYmFsbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
