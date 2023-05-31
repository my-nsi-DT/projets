function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(20000).then(() => console.log('Tom propose d\'activer la console de developpeur'));
delay(40000).then(() => console.log('Tom a regarder sur Google (lui), la console c\'est F12'));
