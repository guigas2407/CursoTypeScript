export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  frear(): void {
    this.motor.frear();
  }
}

export class Motor {
  ligar(): void {
    console.log("Motor ligado");
  }

  desligar(): void {
    console.log("Motor desligado");
  }

  acelerar(): void {
    console.log("Motor acelerando");
  }

  frear(): void {
    console.log("Motor freando");
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.frear();
carro.desligar();
