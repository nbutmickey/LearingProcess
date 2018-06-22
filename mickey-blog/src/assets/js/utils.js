export default function getCookie(name) {
  //获取cookie
  let arr;
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return arr[2];
  } else {
    return null;
  }
}
