// 現在地の設定
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

/***** ユーザーの現在の位置情報を取得 *****/
function successCallback(position) {
  var lat = position.coords.latitude ;
  var lng = position.coords.longitude ;

// 位置情報の設定
var position = [
        { x: 35.717885, y: 139.816565 },　　　//曳舟駅
        { x: 35.696927, y: 139.814419 },　　　//錦糸町駅
        { x: 35.697532, y: 139.826662 },　　　//亀戸駅
        { x: 35.706513, y: 139.842293 }　　　//平井駅
];

  // positionに現在地からの距離（distance）を追加
// 三平方の定理の変形で，本来は平方根を計算するが，大小関係がわかれば良いので省略している
position.forEach( (obj) => { obj.distance = ( lat - obj.x )**2 + ( lng - obj.y )**2 });
  // 並べ替えを行うための関数定義（distanceが小さい順にする）

position.sort(function(a,b){
        if(a.distance < b.distance) return -1;
        if(a.distance > b.distance) return 1;
        return 0;
    });
// 並べ替えが終わるとposition[0]に現在地から一番近い場所の情報が入っている
console.log( position[0] );

}

/***** 位置情報が取得できない場合 *****/
function errorCallback(error) {
  var err_msg = "";
  switch(error.code)
  {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  document.getElementById("show_result").innerHTML = err_msg;
  //デバッグ用→　document.getElementById("show_result").innerHTML = error.message;
}

