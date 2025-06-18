function jogar() {
  const nome = prompt("Nome do jogador: ");
  const idade = Number(prompt("Insira sua idade: "));

  if (idade < 10) {
    return alert(
      `Ah... ${nome}, que pena! Você ainda não pode se tornar um treinador Pokémon... 🖥️`
    );
  }

  alert(
    `${nome}, você pode se tornar um treinador Pokémon! 🖥️\nEscolha seu Pokémon...`
  );

  const jogador = Number(
    prompt(
      "Digite o número correspondente ao pokémon que deseja:\n\n1 - Charmander 🔥\n2 - Squirtle 💧\n3 - Bulbasaur🌱\n "
    )
  );
  const pc = Math.floor(Math.random() * 3) + 1;

  const batalhar = prompt(
    "Deseja batalhar com este pokemon? (S/N)"
  ).toUpperCase();
  if (batalhar == "SIM" || batalhar == "S") {
    alert("Um treinador adversário apareceu! 🍃");
    alert("A Batalha vai começar! Preparem-se! ⚔️");

    if (jogador == pc) {
      alert(
        "Foi uma batalha equilibrada! Ambos os Pokémons estão fora de combate! EMPATE! 🖥️"
      );
    } else if ((jogador == 1 && pc == 3) || (jogador == 2 && pc == 1) || (jogador == 3 && pc == 2)) {
      alert(
        `Foi uma batalha intensa! ${nome}, seu pokemon saiu vitorioso! Parabéns 🎖️`
      );
    } else {
      alert(
        `Foi uma batalha difícil! Não foi dessa vez ${nome}, o Pokémon adversário foi mais forte. 😢`
      );
    }

    alert(`A escolha do computador foi ${pc}`);
  } else {
    alert("Volte quando quiser batalhar. 👻");
  }
}
