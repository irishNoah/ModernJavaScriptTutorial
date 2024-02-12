/* setItem >>> 로컬 스토리지에 값 바인딩*/
localStorage.setItem('PCY', 1998);

/* hasOwnProperty를 이용해 로컬 스토리지의
키나 값 전체 가져오기 */
for (let key in localStorage){
    if(!localStorage.hasOwnProperty(key)){
        continue;
    }
    alert(`${key} : ${localStorage.getItem(key)}`);
}

// ===============================================
sessionStorage.setItem('Check', 1);
//alert( sessionStorage.getItem('Check') ); // 새로 고침 후: 1