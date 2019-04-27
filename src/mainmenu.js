/* ********************************************************\
 * Walker 〜Path to Darkness〜
 * A game about walking the long road of life.
 * Author: Esa Koskinen (mmKALLL)
 *
 * NOT FOR REDISTRIBUTION OF ANY KIND. ALL RIGHTS RESERVED.
 * Copyright (c) 2017-2019 Esa Koskinen
 * ********************************************************/

(function () {
  function startNewGame() {
    window.location.replace("./walker.html");
  }
  const button = document.querySelector(".new-game-button")
  if (button) {
    button.addEventListener("click", startNewGame)
  }
})();