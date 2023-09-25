function goToPage(ref) {
  window.location.href = ref;
}

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

//   if (isMobile()) {
//     console.log("Mobile device detected");
//   } else {
//     console.log("Desktop device detected");
// }

// if(!isMobile()){
//     document.body.style.backgroundImage = "url('web2.jpg')";
// }else{
//     document.body.style.backgroundImage = "url('web3.jpeg')";
// }
