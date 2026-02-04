type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log("--------------------------------------------------");
    }
  }
}

const votation1 = new Votation("Qual sua cor favorita?");
votation1.addVotationOption({ numberOfVotes: 0, option: "Azul" });
votation1.addVotationOption({ numberOfVotes: 0, option: "Vermelho" });
votation1.addVotationOption({ numberOfVotes: 0, option: "Verde" });

votation1.vote(0);
votation1.vote(0);
votation1.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

const votation2 = new Votation("Qual sua comida favorita?");
votation2.addVotationOption({ numberOfVotes: 0, option: "Pizza" });
votation2.addVotationOption({ numberOfVotes: 0, option: "Hambúrguer" });
votation2.addVotationOption({ numberOfVotes: 0, option: "Sushi" });

votation2.vote(0);
votation2.vote(0);
votation2.vote(1);

votationApp.addVotation(votation2);
votationApp.showVotations();
