'number' + 23 + 32 // 1. 'number' + 23 = 'number23', 2. 'number23' + 32 = 'number2332'
41 + 1 + 'number' // 1. 41 + 1 = 42, 2. 42 + 'number' = '42number'
null + 1 // null => 0, 0 + 1 = 1
'five' + + 'two' // 1. +'two' = > NaN, 2. 'five' + NaN = 'fiveNaN'
2 && 7 // 7 (returns last true value)
+'40' + +'2' // 1. +'40' => 40, 2. +'2' => 2, 3. 40 + 2 = 42
'10' - 5 === 6 // 1. '10' - 5 = 5, 2. 5 === 6 = false
true + false // true => 1, false => 0, 1 + 0 = 1
'4px' - 3 // NaN
'4' - 3 // '4' => 4,  4 - 3 = 1
'2' + 3 ** 2; // 1. 3 ** 2 = 9, 2. '2' + 9 = '29'
12 / '6' // 2
23 + 42 + 'number' // 1. 23 + 42 = 65, 2. 65 + 'number' = '65number'
'10' + (5 === 6); // 1. (5 === 6) = false, 2. '10' = false = '10false'
'number' + 15 + 3 // 1. 'number' + 15 = 'number15', 2.'number15' = 3 = 'number153'


undefined + 1; //1. undefined => NaN, 2. NaN + 1 = NaN
'true' == true // 1. true => 1, 2. 'true' == 1 = false
false == 'false' // 1. false => 0, 2. 0 == 'false' = false
null == '' // 1. null => 0, 2. 0 == '' = false
3 ** (9 / 3); // 1. ( 9 / 3 ) = 3, 2. 3 ** 3 =27
!!'false' == !!'true' // 1. !!'false' = > true, 2.!!'true' => true, 3. true == true = true
0 || '0' && 1 // 1. 0 || '0' = '0', 2. '0' && 1 = 1 (returns last true value)
1 < 2 < 3 // 1. 1 < 2 = true, 2. true => 1, 3. 1 < 3 = true
'foo'+ + +'bar' // +'bar' => NaN, 2. 'foo' + + NaN = 'fooNaN'
3 ** 2 / 3; // 1. 3 ** 2 = 9, 2. 9 / 3 = 3
1 < 2 > 3; // 1. 1 < 2 false, 2. false => 1, 3. 1 > 3 = false
(+null == false) < 1; // 1. +null => 0, 2. 0 == false = true, 3. true => 1, 4. 1 < 1 = false
false && true || true; // 1. false && true = false, 2. false || true = true
false && (true || true); // 1. (true || true) = true, 2. false && true = false
(+null == false) < 1 ** 5; // 1. +null => 0, 2. 0 == false = true, 3. 1 ** 5 = 1, 4, true => 1, 5. 1 < 1 = false
