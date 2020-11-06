setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Dans quel ordre vont apparaitre les lettres ?
// 1 - ..500ms.. A B ..1000ms.. C ..500ms.. D E
// 2 - E B A D C
// 3 - B E A D C
// 4 - A B C E D
// 5 - B E D A C

// pile d'appels
// ^
// |
// |
// |st - st - st - st - lg ..↻..  cbB ..↻..           cbA cbD ..↻..      cbC
// +-----0------------------------12ms------14ms------500ms-----------------> temps
//                      E         B                   A   D              C

// file d'attente (0ms) : cbB
// file d'attente (12ms) :
// file d'attente (14ms) :
// file d'attente (499ms) : cbA cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) :
