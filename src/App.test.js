import { render } from '@testing-library/react';
import App from './App';

function lapplicationContient(texteAttendu) {
  const ui = render(<App/>)
  expect(ui.container).toHaveTextContent(texteAttendu)
}

describe("Ardoise vide", () => {

  it("Au lancement le titre est afficher",  () => {
    const texteAttendu = "Ardoise";
    lapplicationContient(texteAttendu);
  });

  it("Au lancement, il n'y a aucun participant",  () => {
    const texteAttendu = "Aucun participant";
    lapplicationContient(texteAttendu);
  });

  it("Au lancement, il n'y a aucune dépenses",  () => {
    const texteAttendu = "Aucune dépense";
    lapplicationContient(texteAttendu);
  });
})
