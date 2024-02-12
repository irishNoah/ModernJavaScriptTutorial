// 13-2-0-export.js >>> 13-2-0-import.js 와 연계 파일

/* 선언부 앞에 export 붙이기 

변수나 함수, 클래스를 선언할 때 맨 앞에 export를 붙이면 내보내기가 가능
*/
// 배열 내보내기
export let days = ['sun', 'mon', , 'tue', , 'wed', , 'thr', , 'fri', , 'sat'];

// 상수 내보내기
export const MODULSE_BECAME_STANDARTD_YEAR = 2024;

// 클래스 내보내기
export class Pcy {
    constructor(name){
        this.name = name;
    }
}

// ================================================================

/* 선언부와 떨어진 곳에 export 붙이기
선언부와 export가 떨어져 있어도 내보내기가 가능
*/

function sayHi(user){
    alert(`Hi, ${user} ~`);
}

function sayBye(user){
    alert(`Good Bye, ${user} ~`);
}

export {sayHi, sayBye}; // 두 함수를 내보냄
