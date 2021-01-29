import { render } from '@testing-library/react';
import App from './App';

function lapplicationContient(texteAttendu) {
  const ui = render(<App/>)
  expect(ui.container).toHaveTextContent(texteAttendu)
}

describe("Ardoise vide", () => {

  it("Au lancement le titre est afficher",  () => {
    lapplicationContient("Ardoise");
  });

  it("Au lancement, il n'y a aucun participant",  () => {
    lapplicationContient("Aucun participant");
  });

  it("Au lancement, il n'y a aucune dépenses",  () => {
    lapplicationContient("Aucune dépense");
  });

  it("Au lancement, il n'y a aucune créance",  () => {
    lapplicationContient("Aucune créance");
  });

})
