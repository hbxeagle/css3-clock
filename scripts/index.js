'use strict';

(function () {
  var a = new Date();
  var h = a.getHours();
  var m = a.getMinutes();
  var s = a.getSeconds();
  var dh = document.getElementById('h');

  var dm = document.getElementById('m');

  var ds = document.getElementById('s');

  var dcs = document.getElementById('srunner');

  dh.style.transform = 'rotate(' + h % 12 * 30 + 'deg)';

  dm.style.transform = 'rotate(' + m * 6 + 'deg)';

  ds.style.transform = 'rotate(' + s * 6 + 'deg)';

  dcs.style.transform = 'rotate(' + s * 6 + 'deg)';

  var $move = $("#move");

  $move.on('click', function () {
    $(".all-box").toggleClass('c-unfold');
  });
})();


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9lczYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQU07QUFDTCxNQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQixNQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdkIsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3ZCLE1BQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLE1BQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLE1BQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLE1BQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTdDLElBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxlQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFNLENBQUM7O0FBRWpELElBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxlQUFhLENBQUMsR0FBQyxDQUFDLFNBQU0sQ0FBQzs7QUFFekMsSUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLGVBQWEsQ0FBQyxHQUFDLENBQUMsU0FBTSxDQUFDOztBQUV6QyxLQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsZUFBYSxDQUFDLEdBQUMsQ0FBQyxTQUFNLENBQUM7O0FBRTFDLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkIsT0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsWUFBSTtBQUNuQixLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0dBQ3ZDLENBQUMsQ0FBQztDQUVKLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9