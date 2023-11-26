// Thread Filter by Category
// - Menampilkan list thread berdasarkan kategori yang dipilih
// - Menampikan keterangan bahwa thread difilter berdasarkan kategori

describe('Thread Filter By Category spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  // Scenario 1
  it('Menampilkan list thread berdasarkan kategori yang dipilih', () => {
    // Karena cypress menampilkan web pada resolusi 1000 x 660,
    // Side category tampil dalam mode toggle
    cy.get('#btn-toggle-side-categories').click();
    // Karena harus menunggu data thread di load, jadi harus diberikan timeout
    cy.wait(3000);
    cy.get('#fixed-side-categories ul li:first-child button').click();
    cy.get('#btn-close-side-categories').click();
    cy.get('#txt-info-filter').should('be.visible');
  });
});
