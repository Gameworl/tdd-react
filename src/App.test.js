import { render } from '@testing-library/react';
import App, {TITRE} from './App';

describe("Ardoise vide", () => {

  it("Au lancement le titre est afficher",  () => {
    const ui = render(<App/>)
    expect(ui.container).toHaveTextContent(TITRE)
  });

  it("Au lancement, il n'y a aucun participant",  () => {
    const ui = render(<App/>)
    expect(ui.container).toHaveTextContent("Aucun participant")
  });
})
