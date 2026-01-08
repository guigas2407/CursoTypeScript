enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = "ROXO", // 'ROXO'
  VERDE = 201, // 201
  ROSA, // 202
}

export function escolherCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolherCor(Cores.ROXO);
