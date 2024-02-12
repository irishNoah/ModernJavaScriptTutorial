// 13-2-0-import.js >>> 13-2-0-export.js 와 연계 파일

/* import *
무언갈 가져오고 싶다면 아래와 같이 이에 대한 목록을 만들어 import {...}안에 적어주면 됨
*/
// 📁 main.js
import {sayHi, sayBye} from './13-2-0-export.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// ==========================================================================
// 📁 main.js
import User from './13-2-0-user.js'; // {User}가 아닌 User로 클래스를 가져왔습니다.

new User('PCY');